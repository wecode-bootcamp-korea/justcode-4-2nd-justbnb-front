import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillTrophy } from 'react-icons/ai';
import { useState, useEffect, useMemo } from 'react';
import Accommodation from '../../components/Accommodation/Accommodation';
import Pagination from '../../components/paging/Pagination';
import { Map } from 'react-kakao-maps-sdk';
import MapMarkerItem from './MapMarkerItem';
import styled from 'styled-components';
import {
  ListContainer,
  Container,
  Text,
  Text2,
  IconTextWrap,
  Icon,
} from './AccommodationListStyled';

const AccommodationList = () => {
  const { localName } = useParams();
  const [datas, setData] = useState([]);

  const [limit, setlimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  /*목데이터 가져오기 */
  useEffect(() => {
    fetch('/data/hwseol/list.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  /*map*/
  let positions = [];
  const [latlng, setlatlng] = useState({});
  const [area, setArea] = useState();

  for (let i = 0; i < datas.length; i++) {
    positions[i] = {
      title: datas[i].name,
      latlng: { lat: datas[i].lat, lng: datas[i].long },
      image: datas[i].image,
      buildType: datas[i].build_type,
      localName: localName,
      desc: datas[i].desc,
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
    if (map) map.setBounds(bounds);
  }, [bounds]);

  /* 맵을 움직일때 보여지는 마커의 리스트만 가져오기 */
  const [_data, _setData] = useState([]);
  useEffect(() => {
    let markers = [];
    if (area !== undefined) {
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].lat < area.sw.Ma || datas[i].lat > area.ne.Ma) {
          continue;
        }
        if (datas[i].long < area.sw.La || datas[i].long > area.ne.La) {
          continue;
        }
        markers.push(datas[i]);
      }
    }
    _setData(markers);
  }, [area]);

  return (
    <div>
      <Container>
        <ListContainer>
          <Text>{localName}에 위치한 300개 이상의 숙소</Text>
          <Text>
            여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
            있습니다.
          </Text>
          <IconTextWrap>
            <Icon>
              <AiFillTrophy size="28" color="red" />
            </Icon>
            <Text2>
              390,000명의 게스트가 {localName}의 숙소에 머물렀습니다. 게스트는
              평균적으로 이 숙소를 별 5개 만점에 4.8점으로 평가했습니다.
            </Text2>
          </IconTextWrap>
          {_data.slice(offset, offset + limit).map((data, index) => (
            <Accommodation
              data={data}
              key={data.id}
              localName={localName}
              setlatlng={setlatlng}
            />
          ))}
          <Pagination
            total={_data.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </ListContainer>

        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 37.56610344059421,
            lng: 126.97884488662002,
          }}
          style={{
            width: '55%',
            height: '1000px',
            position: 'fixed',
            top: 0,
            left: '45%',
          }}
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
      </Container>
    </div>
  );
};

export default AccommodationList;
