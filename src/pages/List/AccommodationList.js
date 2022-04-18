import React from 'react';
import { useParams } from 'react-router-dom';
import { AiFillTrophy } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Accommodation from '../../components/Accommodation/Accommodation';
import Pagination from '../../components/paging/Pagination';
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
          {datas.slice(offset, offset + limit).map((data, index) => (
            <Accommodation data={data} key={data.id} localName={localName} />
          ))}
        </ListContainer>
      </Container>
      <Pagination
        total={datas.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default AccommodationList;
