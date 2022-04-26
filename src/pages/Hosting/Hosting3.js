import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import styled from 'styled-components';

const { kakao } = window;

export default function Hosting3() {
  // const [InputText, setInputText] = useState('');
  // const [Place, setPlace] = useState('');

  // const onChange = e => {
  //   setInputText(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setPlace(InputText);
  //   setInputText('');
  // };

  // useEffect(() => {
  //   let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3,
  //   };
  //   const map = new kakao.maps.Map(container, options);

  //   const ps = new kakao.maps.services.Places();

  //   ps.keywordSearch(Place, placesSearchCB);

  //   function placesSearchCB(data, status, pagination) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       let bounds = new kakao.maps.LatLngBounds();

  //       for (let i = 0; i < data.length; i++) {
  //         displayMarker(data[i]);
  //         bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
  //       }

  //       map.setBounds(bounds);
  //     }
  //   }

  //   function displayMarker(place) {
  //     let marker = new kakao.maps.Marker({
  //       map: map,
  //       position: new kakao.maps.LatLng(place.y, place.x),
  //     });

  //     // 마커에 클릭이벤트를 등록합니다
  //     kakao.maps.event.addListener(marker, 'click', function () {
  //       // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
  //       infowindow.setContent(
  //         '<div style="padding:5px;font-size:12px;">' +
  //           place.place_name +
  //           '</div>'
  //       );
  //       infowindow.open(map, marker);
  //     });
  //   }
  // }, [Place]);
  // ------------------------------------------------------------------------------------
  const container = useRef(null);

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    function setCenter() {
      let moveLatLon = new kakao.maps.LatLng(37.5283169, 126.9294254); // seoul

      map.setCenter(moveLatLon);
    }

    // function panTo() {
    //   let moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);
    // }
  }, []);

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
            <Text2 placeholder="주소를 입력하세요." />
            <TestBtn1>TestBtn1</TestBtn1>
            <TestBtn2>TestBtn2</TestBtn2>
          </ButtonTextWrapper>
          <Map
            id="map"
            style={{ width: '100%', height: '1000px' }}
            ref={container}
          />
        </Body>
        <Footer>
          <p>뒤로</p>
          <button className="next-button">다음</button>
        </Footer>
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
  position: relative;
  z-index: -999;
  margin: 0;
`;

const ButtonTextWrapper = styled.button`
  position: absolute;
  z-index: 999;
  background-color: white;
  border-radius: 50px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  padding: 16px;
  box-shadow: 2px 1px 5px 7px rgba(0, 0, 0, 0.14);
  width: 70%;
  top: 20vw;
  display: flex;
  align-items: center;
`;

const TestBtn1 = styled.button`
  font-size: 10px;
`;

const TestBtn2 = styled.button`
  font-size: 10px;
`;
