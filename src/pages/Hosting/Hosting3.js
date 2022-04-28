import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import styled from 'styled-components';

const { kakao } = window;

export default function Hosting3({ onChange, resultChoice }) {
  const container = useRef(null);

  const [local, setLocal] = useState('seoul');

  // 위도, 경도 정보 전달하기 위한 state
  const [dnlrud, setDnlrud] = useState({
    La: 0,
    Ma: 0,
  });

  // 지번주소 정보 전달하기 위한 state
  const [wlqjs, setWlqjs] = useState({
    address: '',
  });

  // useEffect(
  //   e => {
  //     wlqjs && dnlrud
  //       ? console.log(e.target.value)
  //       : console.log(dnlrud, wlqjs);
  //   },
  //   [wlqjs, dnlrud]
  // );
  const Movelocation = {
    jeju: {
      latitude: 33.40981832937095,
      longitude: 126.52984973415151,
    },
    busan: {
      latitude: 35.162960289695896,
      longitude: 129.11194084073773,
    },
    seoul: {
      latitude: 37.5283169,
      longitude: 126.9294254,
    },
  };

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(
        Movelocation[local].latitude,
        Movelocation[local].longitude
      ),

      level: 9,
    };

    const map = new kakao.maps.Map(container, options); // 지도 생성

    const marker = new kakao.maps.Marker({
      position: map.getCenter(),
    });
    marker.setMap(map);

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;
      // console.log(latlng); // 위도, 경도 정보

      setDnlrud((dnlrud.La = latlng.La), (dnlrud.Ma = latlng.Ma));
      console.log('----------------------');
      //onChange({ 3: dnlrud });
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      // 추가 구현위해 일부러 남겨두는 코드------------------------------------------------------
      // let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      // message += '경도는 ' + latlng.getLng() + ' 입니다';

      // let resultDiv = document.getElementById('clickLatlng');
      // resultDiv.innerHTML = message;
      //-------------------------------------------------------------------------------------
    });
    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();

    let infowindow = new kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          let detailAddr = !!result[0].road_address
            ? '<div>도로명주소 : ' +
              result[0].road_address.address_name +
              '</div>'
            : '';
          detailAddr +=
            '<div>지번 주소 : ' + result[0].address.address_name + '</div>';

          let content =
            '<div class="bAddr">' +
            '<span class="title">법정동 주소정보</span>' +
            detailAddr +
            '</div>';
          // 마커를 클릭한 위치에 표시합니다
          marker.setPosition(mouseEvent.latLng);
          marker.setMap(map);

          // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
          infowindow.setContent(content);
          infowindow.open(map, marker);

          // console.log(result[0].address.address_name); // 지번주소 정보
          setWlqjs((wlqjs.address = String(result[0].address.address_name)));
          console.log('지번주소 :', wlqjs);
          onChange({ 11: wlqjs.address, 3: dnlrud });
        }
      });
    });

    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'idle', function () {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    });

    function searchAddrFromCoords(coords, callback) {
      // 좌표로 행정동 주소 정보를 요청합니다
      geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    }

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }

    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
    function displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let infoDiv = document.getElementById('centerAddr');

        for (let i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[i].region_type === 'H') {
            infoDiv.innerHTML = result[i].address_name;
            break;
          }
        }
      }
    }
  }, [local]);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>숙소 위치는 어디인가요?</Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <Link to="/">
            <button className="exit-button">나가기</button>
          </Link>
        </Header>
        <Body>
          <ButtonTextWrapper>
            <Icon>
              <IoLocationSharp />
            </Icon>
            <Buttons>
              <Seoul
                onClick={e => {
                  setLocal('seoul');
                  onChange(e);
                }}
              >
                Seoul
              </Seoul>
              <Jeju
                onClick={e => {
                  setLocal('jeju');
                  onChange(e);
                }}
              >
                Jeju
              </Jeju>
              <Busan
                onClick={e => {
                  setLocal('busan');
                  onChange(e);
                }}
              >
                Busan
              </Busan>
              {/* <Confirm
                onClick={e => {
                  // onChange(wlqjs);
                }}
              >
                확인
              </Confirm> */}
            </Buttons>
          </ButtonTextWrapper>
          <Map
            id="map"
            style={{ width: '100%', height: '900px' }}
            ref={container}
          />
        </Body>
        <Footer />
      </Container2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.section`
  width: 50%;
  min-height: 100vh;
  background: rgb(217, 18, 100);
  background: linear-gradient(
    180deg,
    rgba(217, 18, 100, 0.9598214285714286) 0%,
    rgba(165, 4, 166, 1) 52%,
    rgba(55, 8, 159, 1) 100%
  );
  display: flex;
  align-items: center;
  line-height: 3.5em;
  position: relative;
  img {
    width: 80px;
    height: 70px;
    position: absolute;
    top: 0;
    margin-top: 30px;
    margin-left: 40px;
  }
`;

const Text1 = styled.div`
  color: white;
  font-weight: 530;
  font-size: 48.5px;
  margin-left: 55px;
`;

const Container2 = styled.section`
  width: 50%;
  /* min-height: 100vh; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Header = styled.section`
  position: absolute;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  z-index: -1;
  .help-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 20px;
    margin-right: 15px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: black;
    color: white;
  }
  .exit-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 20px;
    border-radius: 20px;
    margin-right: 30px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: black;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  font-size: 25px;
  margin-top: 5px;
`;

const Text2 = styled.textarea`
  margin-top: 1vw;
  margin-left: 1vw;
  width: 100%;
  font-size: 1vw;
  font-weight: bold;
  outline: none;
  border: none;
  resize: none;
  color: grey;
`;

const Footer = styled.section`
  position: absolute;
  padding: 15px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-top: 2px solid rgba(155, 149, 167, 0.2);
  p {
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    margin-left: 30px;
  }
  .next-button {
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 13px 23px;
    margin-right: 30px;
    border-radius: 8px;
    border: 1px solid rgba(155, 149, 167, 0.1);
    background-color: black;
  }
`;

const Map = styled.div`
  /* position: relative; */
  /* height: fit-content; */
  object-fit: cover;
  z-index: 0;
  margin: 0;
`;

const ButtonTextWrapper = styled.button`
  position: absolute;
  z-index: 999;
  background-color: white;
  border-radius: 50px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  border: red 10px solid;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  padding: 16px;
  box-shadow: 2px 1px 5px 7px rgba(0, 0, 0, 0.14);
  width: 70%;
  top: 10vw;
  display: flex;
  align-items: center;
`;

const Buttons = styled.div`
  width: 100%;
`;

const Jeju = styled.button`
  font-size: 10px;
`;

const Busan = styled.button`
  font-size: 10px;
`;

const Seoul = styled.button`
  font-size: 10px;
`;

const Confirm = styled.button`
  font-size: 15px;
  /* margin-right: -100vw; */
`;
