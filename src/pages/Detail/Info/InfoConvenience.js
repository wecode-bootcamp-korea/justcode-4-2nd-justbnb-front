import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GiBarbecue } from 'react-icons/gi';
import { FaSwimmingPool, FaWifi, FaTv, FaCar, FaBath } from 'react-icons/fa';

function InfoConvenience() {
  const [convenienceArray, setConvenienceArray] = useState([]);
  // 숙소 편의시설 받아오기
  useEffect(() => {
    fetch('data/minji/accommodationsConvenience.json', {
      method: 'GET',
    }).then(res =>
      res.json().then(result => {
        setConvenienceArray(
          result.accommodationsConvenience[0].convenience_name
        );
      })
    );
  }, []);

  useEffect(() => {
    setConvenienceArray(convenienceArray);
  }, [convenienceArray]);

  return (
    <Wrapper>
      <Title>숙소 편의시설</Title>
      <ul>
        {convenienceArray.map(el => {
          return (
            <List>
              {el == '수영장' ? <FaSwimmingPool className="icons" /> : null}
              {el == '바비큐 그릴' ? <GiBarbecue className="icons" /> : null}
              {el == '와이파이' ? <FaWifi className="icons" /> : null}
              {el == 'TV' ? <FaTv className="icons" /> : null}
              {el == '주차공간' ? <FaCar className="icons" /> : null}
              {el == '욕조' ? <FaBath className="icons" /> : null}
              <span>{el}</span>
            </List>
          );
        })}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 50px 0;
  & > ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 17px;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  width: 50%;

  .icons {
    font-size: 23px;
    margin-right: 15px;
  }
`;

export default InfoConvenience;