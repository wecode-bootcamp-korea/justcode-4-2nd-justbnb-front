import React, { useState } from 'react';
import styled from 'styled-components';
import BtnCard from './BtnCard';

function SearchToggle() {
  const [cityId, setCityId] = useState();

  const cities = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
    { id: 3, name: '대구' },
    { id: 4, name: '부산' },
    { id: 5, name: '제주도' },
  ];

  // const colorChangeHandler = () => {
  //   !changeColor
  //     ? setChangeColor({
  //         background: `linear-gradient(
  //           to right,
  //           rgb(230, 30, 77) 0%,
  //           rgb(227, 28, 95) 50%,
  //           rgb(215, 4, 102) 100%
  //         )`,
  //         border: 'none',
  //         color: '#ffffff',
  //       })
  //     : setChangeColor();
  // };
  return (
    <Wrapper>
      <div>언제 어디로든 떠나는 여행</div>

      {cities.map(list => (
        <div
          onClick={() => {
            setCityId(list.id);
          }}
        >
          <BtnCard list={list} key={list.id} cityId={cityId} />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 25rem;
  margin-top: 10px;
  margin-left: 18rem;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 0.8rem;
`;

export default SearchToggle;
