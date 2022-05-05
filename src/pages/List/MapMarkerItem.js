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
        position={position.latlng}
        image={{
          src:
            latlng.lat === position.latlng.lat || Open
              ? 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'
              : '/images/thump/marker.png',
          size: {
            widht: 24,
            height: 35,
          },
        }}
        title={position.title}
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

export default React.memo(MapMarkerItem);
