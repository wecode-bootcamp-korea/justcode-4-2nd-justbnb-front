import styled from 'styled-components';

import { GiBarbecue } from 'react-icons/gi';
import { FaSwimmingPool, FaWifi, FaTv, FaCar, FaBath } from 'react-icons/fa';

function InfoConvenience() {
  return (
    <Wrapper>
      <Title>숙소 편의시설</Title>
      <ul>
        <List>
          <FaSwimmingPool className="icons" />
          <span>수영장</span>
        </List>
        <List>
          <GiBarbecue className="icons" />
          <span>바비큐 그릴</span>
        </List>
        <List>
          <FaWifi className="icons" />
          <span>와이파이</span>
        </List>
        <List>
          <FaTv className="icons" />
          <span>TV</span>
        </List>
        <List>
          <FaCar className="icons" />
          <span>주차공간</span>
        </List>
        <List>
          <FaBath className="icons" />
          <span>욕조</span>
        </List>
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
