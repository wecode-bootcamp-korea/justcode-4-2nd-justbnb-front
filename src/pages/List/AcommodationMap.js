import React from 'react';
import { useState, useEffect, useRef } from 'react';
import MapMarkerItem from './MapMarkerItem';
import { Button, Box, MapBox } from './AccommodationListStyled';
function MapContainer({
  datas,
  setLocal,
  level,
  setLevel,
  _data,
  _setData,
  latlng,
  setlatlng,
  changeMap,
  setChangeMap,
  city,
  mapMarkers,
}) {
  let _positions = [];
  const [positions, setPositions] = useState([]);
  const [area, setArea] = useState();
  const { kakao } = window;
  let map = useRef(0);
  let bounds = useRef(0);
  let count = useRef(0);
  let flag = useRef(0);

  useEffect(() => {
    let mapContainer = document.getElementById('kakaoMap'),
      mapOption = {
        center: new kakao.maps.LatLng(37.56610344059421, 126.97884488662002),
        level: 3,
      };
    map.current = new kakao.maps.Map(mapContainer, mapOption);

    const getMapInfo = () => {
      bounds.current = map.current.getBounds();
      setArea({
        sw: bounds.current.getSouthWest(),
        ne: bounds.current.getNorthEast(),
      });
    };
    kakao.maps.event.addListener(map.current, 'bounds_changed', getMapInfo);
  }, []);

  useEffect(() => {
    for (let i = 0; i < datas.length; i++) {
      _positions[i] = {
        id: datas[i].id,
        title: datas[i].name,
        latlng: new kakao.maps.LatLng(datas[i].lat, datas[i].long),
        image: datas[i].image_url[0],
        buildType: datas[i].build_type,
        localName: datas[i].city,
      };
    }
    setPositions(_positions);
  }, [datas]);

  /*map marker 범위 설정*/
  useEffect(() => {
    /*map marker 범위 설정*/
    flag.current += 1;
    if (flag.current >= 3) return;
    if (map.current && positions.length !== 0) {
      bounds.current = new kakao.maps.LatLngBounds();
      for (let i = 0; i < positions.length; i++) {
        bounds.current.extend(positions[i].latlng);
      }
      map.current.setBounds(bounds.current);
    }
  }, [positions]);

  /* 맵을 움직일때 보여지는 마커의 리스트만 가져오기 */
  //map 정보 가져오기
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
      _setData(markers);
    } else {
      _setData(datas);
    }

    count.current += 1;
    if (count.current > 2) setLocal('all');
  }, [area, datas]);

  //zoom level 변함에 따라 리스트 내용 변경
  if (map.current) {
    kakao.maps.event.addListener(map.current, 'zoom_changed', function () {
      setLevel(map.current.getLevel());
    });
  }
  //지도 크기 동적 변경
  const [mapStyle, setMapStyle] = useState({
    width: '50%',
    height: '740px',
    position: 'fixed',
    left: '50%',
  });

  useEffect(() => {
    if (map.current) {
      map.current.relayout();
    }
  }, [map.current, changeMap]);

  useEffect(() => {
    if (changeMap === false) {
      setMapStyle({
        width: '100%',
        height: '740px',
        position: 'sticky',
        top: '250px',
        left: '50%',
      });
    } else {
      setMapStyle({
        width: '100%',
        height: '1250px',
        position: 'none',
      });
    }
  }, [changeMap]);

  let height = level >= 13 ? '1900px' : '1250px';
  if (changeMap && level >= 13) {
    map.current.setLevel(10);
  }
  return (
    <Box height={height} active={changeMap ? 'true' : 'false'}>
      {/* <div id="kakaoMap" style={mapStyle} /> */}
      <MapBox id="kakaoMap" changeMap={changeMap ? 'true' : 'false'} />
      {positions.map(position => (
        <MapMarkerItem
          position={position}
          latlng={latlng}
          key={position.id}
          map={map.current}
          mapMarkers={mapMarkers}
          city={city}
        />
      ))}
      {changeMap ? (
        <Button
          left="3%"
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
    </Box>
  );
}

export default React.memo(MapContainer);
