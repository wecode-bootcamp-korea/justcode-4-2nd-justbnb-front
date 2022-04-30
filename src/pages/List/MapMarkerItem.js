import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { Wrap, Img, TextBox, P } from './MapMarkerItemStyled';

function MapMarkerItem({ position, latlng }) {
  const [Open, setOpen] = useState(false);

  //마커 밖 영역 선택 시 오버레이 닫기
  const el = useRef();
  const handleClickOutside = ({ target }) => {
    if (el.current === false) {
      setOpen(false);
    }
    el.current = false;
  };
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div>
      <MapMarker
        position={position.latlng} // 마커를 표시할 위치
        image={{
          src:
            latlng.lat === position.latlng.lat || Open
              ? 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'
              : '/images/thump/marker.png', // 마커이미지의 주소입니다
          size: {
            widht: 24,
            height: 35,
          }, // 마커이미지의 크기입니다
        }}
        title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        onClick={() => setOpen(true)}
      />
      {Open && (
        <div ref={el}>
          <CustomOverlayMap position={position.latlng}>
            <Wrap>
              <Img src={position.image} alt="photo" />
              <TextBox>
                {position.buildType} 전체 · {position.localName}
              </TextBox>
              <P>{position.title}</P>
            </Wrap>
          </CustomOverlayMap>
        </div>
      )}
    </div>
  );
}

/*
function MapMarkerItem(position, latlng, map, mapMarkers, city) {
  console.log('dddd :', position);
  MapMarker(position, position.title, map, latlng, mapMarkers, city);
}

function MapMarker({ position, title, map, latlng, mapMarkers, city }) {
  const { kakao } = window;
  const [open, setOpen] = useState(false);

  let image =
    latlng.lat === position.latlng.Ma
      ? '/images/thump/marker_yellow.png'
      : '/images/thump/marker_black.png';
  let imageSize = new kakao.maps.Size(40, 50);
  let markerImage = new kakao.maps.MarkerImage(image, imageSize);
  let marker = new kakao.maps.Marker({
    map: map,
    position: position.latlng,
    title: title,
  });
  marker.setImage(markerImage);

  if (!mapMarkers.current.hasOwnProperty(city)) {
    mapMarkers.current[city] = [];
  }

  mapMarkers.current[city].push(marker);
  useEffect(() => {}, []);
  // 마커 위에 커스텀오버레이를 표시합니다
  let _content = `
    <div ref="el" style="width:250px; height:270px; border-radius: 5%; position: absolute; top: 0px; left:-120px; background-color: white;">
    <img src=${position.image} alt="photo" style="width: 100%; border-top-left-radius: 5%; border-top-right-radius: 5%; height: 180px;"/>
    <div style="margin-top: 15px; padding-top: 10px; padding-left: 20px;">
    ${position.buildType} 전체 · ${position.localName}
    </div>
    <p style="width: 100%; padding-top: 10px; padding-left: 20px; padding-right: 20px; text-overflow: ellipsis; overflow: hidden;">${position.title}</p>
    </div>`;
  let content = document.createElement('p');
  let parser = new DOMParser();
  let doc = parser.parseFromString(_content, 'text/html');
  content.appendChild(doc.documentElement);

  let overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition(),
  });
  overlay.setMap(null);
  kakao.maps.event.addListener(marker, 'click', function () {
    setOpen(true);
  });
  kakao.maps.event.addListener(map, 'click', function () {
    setOpen(false);
    overlay.setMap(null);
  });
  if (open) overlay.setMap(map);
}
*/

export default React.memo(MapMarkerItem);
