import React from 'react';
import styled from 'styled-components';

function CityCard({ list }) {
  return (
    <Wrapper>
      <Img alt="cityImg" src={list.imgUrl} />
      <TextWrapper style={{ backgroundColor: `${list.colors}` }}>
        <Tittle>{list.name}</Tittle>
        <Distance>{list.distance} 거리</Distance>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 2/1;
  border-radius: 10px 10px 0 0;
`;

const TextWrapper = styled.div`
  padding: 60px 20px;
  border-radius: 0 0 10px 10px;
  color: #ffffff;
`;
const Tittle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 10px;
`;
const Distance = styled.div``;
export default CityCard;
