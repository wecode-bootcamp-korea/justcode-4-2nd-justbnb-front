import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function MembersToggle({ count, setCount, setHaveAnimal }) {
  const [changeColor, setChangeColor] = useState({
    changeYes: { backgroundColor: '#ffffff' },
    changeNo: { backgroundColor: '#ffffff' },
  });
  const { changeYes, changeNo } = changeColor;
  const minus = () => {
    if (count === 1) return;
    setCount(prev => prev - 1);
  };

  const plus = () => {
    setCount(prev => prev + 1);
  };

  const onClickYesBtn = () => {
    if (changeYes.backgroundColor === '#ffffff') {
      setChangeColor({
        changeYes: { backgroundColor: '#ebebeb' },
        changeNo: { backgroundColor: '#ffffff' },
      });
      setHaveAnimal('y');
    } else {
      setChangeColor({
        ...changeColor,
        changeYes: { backgroundColor: '#ffffff' },
      });
    }
  };

  const onClickNoBtn = () => {
    if (changeNo.backgroundColor === '#ffffff') {
      setChangeColor({
        changeYes: { backgroundColor: '#ffffff' },
        changeNo: { backgroundColor: '#ebebeb' },
      });
      setHaveAnimal('n');
    } else {
      setChangeColor({
        ...changeColor,
        changeNo: { backgroundColor: '#ffffff' },
      });
    }
  };

  return (
    <Container>
      <Wrapper>
        <Tittle>인원 수</Tittle>
        <div>
          <Buttons onClick={minus}>
            <AiOutlineMinus />
          </Buttons>
          {count}
          <Buttons onClick={plus}>
            <AiOutlinePlus />
          </Buttons>
        </div>
      </Wrapper>
      <Wrapper>
        <Tittle>반려동물 동반</Tittle>
        <BtnWrapper>
          <Buttons onClick={onClickYesBtn} style={changeYes}>
            O
          </Buttons>
          <Buttons onClick={onClickNoBtn} style={changeNo}>
            X
          </Buttons>
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
  box-shadow: 1px 1px 2px #dddddd;
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
  border: 1px solid black;
  color: black;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
  }
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
