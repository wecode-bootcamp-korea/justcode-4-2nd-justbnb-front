import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Review(props) {
  console.log('props', props);
  return (
    <Wrapper>
      <User>
        <Photo>
          <img src={props.imgUrl} alt={props.id} />
        </Photo>
        <Text>
          <Name>{props.name}</Name>
          <Date>{props.date}</Date>
        </Text>
      </User>
      <Content>{props.content}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 50%;
  margin-bottom: 30px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Photo = styled.div`
  width: 56px;
  height: 56px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const Text = styled.div``;

const Name = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const Date = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;
const Content = styled.div``;

export default Review;
