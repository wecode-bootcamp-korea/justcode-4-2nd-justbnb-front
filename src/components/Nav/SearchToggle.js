import React from 'react';
import styled from 'styled-components';
import BtnCard from './BtnCard';

function SearchToggle({ setCity, close }) {
  const cities = [
    { id: 1, name: '서울시' },
    { id: 2, name: '대전시' },
    { id: 3, name: '대구시' },
    { id: 4, name: '부산시' },
    { id: 5, name: '제주시' },
  ];

  return (
    <Wrapper>
      <div>언제 어디로든 떠나는 여행</div>

      {cities.map(list => (
        <BtnCard
          list={list}
          key={list.id}
          name={list.name}
          setCity={setCity}
          close={close}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 22rem;
  margin-top: 10px;
  margin-left: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 1px 1px 2px #dddddd;

  font-size: 0.8rem;
`;

export default SearchToggle;
