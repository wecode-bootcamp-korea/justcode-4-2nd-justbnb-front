import { useEffect, useState } from 'react';
import styled from 'styled-components';

const { kakao } = window;

function MapInfo(props) {
  const { city, lat, long, district, neighborhood } = props;

  // 카카오맵
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(lat, long),
      level: 4,
    };
    const map = new window.kakao.maps.Map(container, options);
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //마커 생성
    const imageSrc = '/images/marker.png',
      imageSize = new kakao.maps.Size(50, 50),
      imageOption = { offset: new kakao.maps.Point(25, 25) };
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      //마커 위치
      markerPosition = new kakao.maps.LatLng(lat, long);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);

    // 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
      content:
        '<div class="info-content">정확한 위치는 예약 완료 후에 표시됩니다.  </div>',
    });
    kakao.maps.event.addListener(marker, 'mouseover', function () {
      infowindow.open(map, marker);
    });
    kakao.maps.event.addListener(marker, 'mouseout', function () {
      infowindow.close();
    });

    // 마커 주위 원 생성
    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(lat, long),
      radius: 200,
      strokeWeight: 1,
      strokeColor: '#DA0A63',
      strokeOpacity: 0,
      strokeStyle: 'solid',
      fillColor: '#DA0A63',
      fillOpacity: 0.2,
    });
    circle.setMap(map);

    // lat long 넣었을 때 렌더링 안됨 - lat long 목데이터 값 변경
    // console.log('lat, long', lat, long);
  }, [lat, long]);

  return (
    <Wrapper>
      <Title>호스팅 지역</Title>
      <Address>{`${neighborhood}, ${district}, ${city}`}</Address>
      <MapContainer id="map"></MapContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  /* margin: 0 80px; */
  padding: 40px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
`;
const Address = styled.div`
  margin-bottom: 20px;
`;

const MapContainer = styled.div`
  width: 1120px;
  height: 500px;
  // 인포윈도우
  .info-content {
    width: 200%;
    padding: 10px;
    font-size: 13px;
  }
`;

export default MapInfo;
