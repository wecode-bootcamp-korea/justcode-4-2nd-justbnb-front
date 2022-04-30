import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import MapMarkerItem from './MapMarkerItem';
import { Map } from 'react-kakao-maps-sdk';
import { Button, Box } from './AccommodationListStyled';

function MapContainer({
  datas,
  local,
  level,
  setLevel,
  _setData,
  latlng,
  changeMap,
  setChangeMap,
  city,
  isMove,
}) {
  /*map*/
  let positions = [];
  const [area, setArea] = useState();

  for (let i = 0; i < datas.length; i++) {
    positions[i] = {
      id: datas[i].id,
      title: datas[i].name,
      latlng: { lat: datas[i].lat, lng: datas[i].long },
      image: datas[i].image_url[0],
      buildType: datas[i].build_type,
      localName: datas[i].city,
    };
  }
  /*map marker 범위 설정*/
  const [map, setMap] = useState();
  const bounds = useMemo(() => {
    const { kakao } = window;
    const bounds = new kakao.maps.LatLngBounds();

    datas.forEach(data => {
      bounds.extend(new kakao.maps.LatLng(data.lat, data.long));
    });
    return bounds;
  }, [datas]);

  useEffect(() => {
    if (map) {
      map.setBounds(bounds);
    }
  }, [bounds, map]);

  /* 맵을 움직일때 보여지는 마커의 리스트만 가져오기 */
  useEffect(() => {
    let markers = [];
    if (area !== undefined) {
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].lat < area.sw.Ma || datas[i].lat > area.ne.Ma) {
          continue;
        } else if (datas[i].long < area.sw.La || datas[i].long > area.ne.La) {
          continue;
        }
        markers.push(datas[i]);
      }
    }
    _setData(markers);

    //움직엿을때 all로 찍히도록 변경
    isMove.current += 1;
    if (isMove.current > 2) {
      local.current = 'all';
    }
  }, [area]);

  ////지도 크기 동적 변경
  const [mapStyle, setMapStyle] = useState({
    width: '50%',
    height: '850px',
    position: 'sticky',
    top: '105px',
    left: '50%',
  });
  useEffect(() => {
    if (map) {
      map.relayout();
    }
  }, [map, mapStyle]);

  useEffect(() => {
    if (changeMap === false) {
      setMapStyle({
        width: '50%',
        height: '850px',
        position: 'sticky',
        top: '105px',
        left: '50%',
      });
    } else {
      setMapStyle({
        width: '100%',
        height: '1650px',
        top: '0px',
        position: 'none',
      });
    }
  }, [changeMap]);

  //지도 레벨이 13이면 리스트 변화되도록 값 설정
  if (map) {
    setLevel(map.getLevel());
  }
  let height = level >= 13 ? '1900px' : '1250px';
  if (changeMap && level >= 13) {
    map.setLevel(10);
  }

  return (
    <>
      <Box height={height} active={changeMap ? 'true' : 'false'}>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 37.56610344059421,
            lng: 126.97884488662002,
          }}
          style={mapStyle}
          level={3} // 지도의 확대 레벨
          onCreate={setMap}
          onBoundsChanged={map =>
            setArea({
              sw: map.getBounds().getSouthWest(),
              ne: map.getBounds().getNorthEast(),
            })
          }
        >
          {positions.map((position, index) => (
            <MapMarkerItem
              position={position}
              latlng={latlng}
              key={`${position.title}-${position.latlng}`}
            />
          ))}
        </Map>
      </Box>
      {changeMap ? (
        <Button
          left="2%"
          onClick={() => {
            setChangeMap(!changeMap);
          }}
        >
          &gt; 목록 보기
        </Button>
      ) : (
        <Button
          width="50px"
          onClick={() => {
            setChangeMap(!changeMap);
          }}
        >
          &lt;
        </Button>
      )}
    </>
  );
}

export default React.memo(MapContainer);
