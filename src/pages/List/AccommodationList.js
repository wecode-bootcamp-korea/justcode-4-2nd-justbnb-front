import React from 'react';
import { useParams } from 'react-router-dom';
import { AiFillTrophy } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import Accommodation from '../../components/Accommodation/Accommodation';
import Pagination from '../../components/paging/Pagination';
import BigCategoryList from './BigCategoryList';
import MapContainer from './AcommodationMap';
import {
  ListContainer,
  Container,
  Text,
  Text2,
  IconTextWrap,
  Icon,
  H2,
  WrapContainer,
} from './AccommodationListStyled';

const AccommodationList = () => {
  const { localName } = useParams();
  const [local, setLocal] = useState(localName);
  const [datas, setData] = useState([]);

  const [limit, setlimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const [level, setLevel] = useState();
  const [_data, _setData] = useState([]);
  const [latlng, setlatlng] = useState({ lat: 0, lng: 0 });
  const [changeMap, setChangeMap] = useState(false);

  /*목데이터 가져오기 */
  const refreshData = async () => {
    await fetch('/data/hwseol/list.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        let temp = [];
        for (let i = 0; i < data.length; i++) {
          if (local === '지도에 표시된 지역') {
            temp.push(data[i]);
          } else if (data[i].local === local) {
            temp.push(data[i]);
          }
        }
        setData([...temp]);
      });
  };
  useEffect(() => {
    refreshData();
  }, [local]);
  //rendering이 한박자 늦어서 어쩔수 없이 한번 더 리랜더링
  useEffect(() => {}, [datas]);

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
  return (
    <WrapContainer>
      <Container>
        {/* {changeMap === false ? ( */}
        <ListContainer active={changeMap ? 'true' : 'false'}>
          <Text>{local}에 위치한 300개 이상의 숙소</Text>
          <Text>
            여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
            있습니다.
          </Text>
          <IconTextWrap>
            <Icon>
              <AiFillTrophy size="28" color="red" />
            </Icon>
            <Text2>
              390,000명의 게스트가 {local}의 숙소에 머물렀습니다. 게스트는
              평균적으로 이 숙소를 별 5개 만점에 4.8점으로 평가했습니다.
            </Text2>
          </IconTextWrap>
          {level >= 13 ? <BigCategoryList data={datas} /> : null}
          {level >= 13 ? <H2>{_data.length}개 이상의 숙소 둘러보기</H2> : null}
          {width > 1308
            ? _data.slice(offset, offset + limit).map((data, index) => (
                <Accommodation
                  data={data}
                  key={data.id}
                  localName={data.local}
                  setlatlng={setlatlng} //{{ lat: datas[index].lat, lng: datas[index].long }}
                />
              ))
            : datas.slice(offset, offset + limit).map((data, index) => (
                <Accommodation
                  data={data}
                  key={data.id}
                  localName={data.local}
                  setlatlng={setlatlng} //{{ lat: datas[index].lat, lng: datas[index].long }}
                />
              ))}
          <Pagination
            total={width > 1308 ? _data.length : datas.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </ListContainer>
        {/* ) : null} */}
        {/* {datas.length !== 0 ? ( */}
        {width >= 1308 && datas.length !== 0 ? (
          <MapContainer
            datas={datas}
            setLocal={setLocal}
            level={level}
            setLevel={setLevel}
            _data={_data}
            _setData={_setData}
            setlatlng={setlatlng}
            latlng={latlng}
            changeMap={changeMap}
            setChangeMap={setChangeMap}
          />
        ) : null}
      </Container>
    </WrapContainer>
  );
};

export default React.memo(AccommodationList);
