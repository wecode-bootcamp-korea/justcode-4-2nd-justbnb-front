import React, { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { AiFillTrophy } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Accommodation from '../../components/Accommodation/Accommodation';
import Pagination from '../../components/paging/Pagination';
import BigCategoryList from './BigCategoryList';
import MapContainer from './AcommodationMap';
import PageNav from '../../components/Nav/PageNav';
import Footer from '../../components/Footer';
import {
  ListContainer,
  Container,
  Text,
  Text2,
  IconTextWrap,
  Icon,
  H2,
  WrapContainer,
  TextArea,
  Blank,
} from './AccommodationListStyled';

const AccommodationList = () => {
  const { localName } = useParams();
  const [datas, setData] = useState([]);
  const [limit, setlimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [level, setLevel] = useState();
  const [_data, _setData] = useState([]);
  const [latlng, setlatlng] = useState({ lat: 0, lng: 0 });
  const [changeMap, setChangeMap] = useState(false);
  const location = useLocation();
  let mapMarkers = useRef([]);
  let isMove = useRef(0);
  let local = useRef(localName);
  let city = useRef(local.current);
  let startDate = '';
  let endDate = '';
  let count = '';
  let haveAnimal = '';

  const buildType = ''; //별채
  const roomType = ''; //개인실

  local.current = city.current;

  if (isMove.current > 1) {
    city.current = 'all';
    local.current = '_all';
    startDate = '';
    endDate = '';
    count = '';
    haveAnimal = '';
  }
  useEffect(() => {
    isMove.current = 0;
    city.current =
      location.state.city === '전체 도시' ? 'all' : location.state.city;
    startDate = location.state.startDate;
    endDate = location.state.endDate;
    count = location.state.count;
    haveAnimal = location.state.hasOwnProperty('haveAnimal')
      ? location.state.haveAnimal.toUpperCase()
      : '';
  }, [location.state]);

  /*목데이터 가져오기 */
  const refreshData = async () => {
    mapMarkers.current = [];
    await fetch(
      `http://localhost:8000/accommodations?city=${city.current}&buildType=${buildType}&roomType=${roomType}&animalYn=${haveAnimal}&totalMembers=${count}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        let temp = [];
        for (let i = 0; i < data.accommodationsList.length; i++) {
          temp.push(data.accommodationsList[i]);
        }
        setData([...temp]);
      });
  };
  /* 하트 데이터리스트 가져오기 */
  let token = localStorage.getItem('token');
  const [hearts, setHearts] = useState([]);
  const getHeartList = async () => {
    await fetch(`http://localhost:8000/wish?city=${city.current}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accessToken: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setHearts(data.wish);
      });
  };
  useEffect(() => {
    refreshData();
    getHeartList();
  }, [local.current, location.state]);
  //rendering이 한박자 늦어서 어쩔수 없이 한번 더 리랜더링
  useEffect(() => {}, [datas, city.current]);

  //반응형 웹
  const [width, setWidth] = useState(window.innerWidth);
  const resizeWindow = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  });
  if (datas === []) return null;

  return (
    <WrapContainer>
      <PageNav />
      {datas.length !== 0 ? (
        <Container>
          {/* {changeMap === false ? ( */}
          <ListContainer active={changeMap ? 'true' : 'false'}>
            <TextArea>
              <Text>
                {local.current === 'all' || local.current === '_all'
                  ? '지도에 표시된 지역'
                  : local.current}
                에 위치한 300개 이상의 숙소
              </Text>
              <Text>
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
                있습니다.
              </Text>
              <IconTextWrap>
                <Icon>
                  <AiFillTrophy size="28" color="red" />
                </Icon>
                <Text2>
                  390,000명의 게스트가 {local.current}의 숙소에 머물렀습니다.
                  게스트는 평균적으로 이 숙소를 별 5개 만점에 4.8점으로
                  평가했습니다.
                </Text2>
              </IconTextWrap>
            </TextArea>
            {level >= 13 ? <BigCategoryList data={datas} /> : null}
            {level >= 13 ? (
              <H2>{_data.length}개 이상의 숙소 둘러보기</H2>
            ) : null}
            <AccomList
              width={width}
              _data={_data}
              offset={offset}
              limit={limit}
              hearts={hearts}
              setlatlng={setlatlng}
              datas={datas}
            />
            <Pagination
              total={width > 1308 ? _data.length : datas.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </ListContainer>
          {width >= 1308 ? (
            <MapContainer
              datas={datas}
              local={local}
              //setLocal={setLocal}
              level={level}
              setLevel={setLevel}
              _data={_data}
              _setData={_setData}
              setlatlng={setlatlng}
              latlng={latlng}
              changeMap={changeMap}
              setChangeMap={setChangeMap}
              city={city.current}
              mapMarkers={mapMarkers}
              isMove={isMove}
            />
          ) : null}
        </Container>
      ) : (
        <Blank>데이터가 없습니다.</Blank>
      )}
      <Footer />
    </WrapContainer>
  );
};

function AccomList({ width, _data, offset, limit, hearts, setlatlng, datas }) {
  return (
    <div>
      {width > 1308
        ? _data.slice(offset, offset + limit).map((data, index) =>
            hearts !== undefined ? (
              hearts.map((heart, index) =>
                heart.id === data.id ? (
                  <Accommodation
                    data={data}
                    key={data.id}
                    localName={data.city}
                    setlatlng={setlatlng} //{{ lat: datas[index].lat, lng: datas[index].long }}
                    heart={heart.wish_yn}
                  />
                ) : null
              )
            ) : (
              <Accommodation
                data={data}
                key={data.id}
                localName={data.city}
                setlatlng={setlatlng} //{{ lat: datas[index].lat, lng: datas[index].long }}
                heart="N"
              />
            )
          )
        : datas.slice(offset, offset + limit).map((data, index) => (
            <Accommodation
              data={data}
              key={data.id}
              localName={data.city}
              setlatlng={setlatlng} //{{ lat: datas[index].lat, lng: datas[index].long }}
            />
          ))}
    </div>
  );
}

export default React.memo(AccommodationList);
