import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { Wrap, Img, TextBox, TextBox2, P } from './MapMarkerItemStyled';

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
              <TextBox2>{position.title}</TextBox2>
              <P>{position.desc}</P>
            </Wrap>
          </CustomOverlayMap>
        </div>
      )}
    </div>
  );
}

export default MapMarkerItem;
