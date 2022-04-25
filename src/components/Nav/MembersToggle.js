import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function MembersToggle() {
  return (
    <Container>
      <Wrapper>
        <Tittle>인원 수</Tittle>
        <div>
          <Buttons>
            <AiOutlineMinus />
          </Buttons>
          1
          <Buttons>
            <AiOutlinePlus />
          </Buttons>
        </div>
      </Wrapper>
      <Wrapper>
        <Tittle>반려동물 동반</Tittle>
        <BtnWrapper>
          <Buttons>O</Buttons>
          <Buttons>X</Buttons>
        </BtnWrapper>
      </Wrapper>
      <Text>
        반려동물을 3마리 이상 동반하는 경우, 반드시 호스트에게 알려주세요.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 20rem;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;

  &:nth-child(1) {
    border-bottom: 1px solid rgb(235, 235, 235);
  }
`;

const Tittle = styled.div`
  font-weight: 500;
  font-size: 15px;
`;

const Buttons = styled.button`
  margin: 10px;
  padding: 6px 8px;
  border-radius: 50%;
  border: 1px solid #dddddd;
  color: #dddddd;
  background-color: #ffffff;
`;

const BtnWrapper = styled.div`
  padding-right: 8px;
`;

const Text = styled.div`
  padding: 10px;
  color: rgb(113, 113, 113);
  font-size: 0.8rem;
`;
export default MembersToggle;
