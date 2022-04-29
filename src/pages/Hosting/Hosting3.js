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
          <HeaderButton className="help">도움말</HeaderButton>
          <Link to="/">
            <HeaderButton>나가기</HeaderButton>
          </Link>
        </Header>
        <Body>
          <ButtonTextWrapper>
            <Icon>
              <IoLocationSharp />
            </Icon>
            <Buttons>
              <Seoul
                className="button"
                onClick={e => {
                  setLocal('seoul');
                  onChange(e);
                }}
              >
                Seoul
              </Seoul>
              <Jeju
                className="button"
                onClick={e => {
                  setLocal('jeju');
                  onChange(e);
                }}
              >
                Jeju
              </Jeju>
              <Busan
                className="button"
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
            style={{ width: '100%', height: '100vh' }}
            ref={container}
          />
        </Body>
      </Container2>
    </Wrapper>
  );
}
const Clicked = styled`
background-color: black;
color :white;`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: rgb(217, 18, 100);
  background: linear-gradient(
    180deg,
    rgba(217, 18, 100, 0.9598214285714286) 0%,
    rgba(165, 4, 166, 1) 52%,
    rgba(55, 8, 159, 1) 100%
  );
  line-height: 3.5em;
  img {
    width: 80px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 40px;
  }
`;

const Text1 = styled.div`
  width: 85%;
  color: white;
  font-weight: 530;
  font-size: 48.5px;
`;

const Container2 = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Header = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  padding: 30px 40px;
  z-index: 2;
  .help {
    margin-right: 15px;
    background-color: #5f5f5d;
  }
`;

const HeaderButton = styled.button`
  padding: 7px 15px;
  background-color: #222222;
  border: 1px solid rgba(155, 149, 167, 0);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  cursor: pointer;
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

const Map = styled.div`
  z-index: 0;
  .bAddr {
    width: 200%;
    padding: 10px;
  }
`;

const ButtonTextWrapper = styled.button`
  position: absolute;
  top: 20%;
  display: flex;
  align-items: center;
  padding: 16px;
  width: 70%;
  background-color: white;
  border: 1px solid rgba(155, 149, 167, 0.44);
  border-radius: 50px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  box-shadow: 2px 1px 5px 7px rgba(0, 0, 0, 0.14);
  z-index: 1;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* border: 1px solid red; */
  .button {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 5px 13px;
    margin: 0 6px;
    background-color: white;
    cursor: pointer;
  }
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
