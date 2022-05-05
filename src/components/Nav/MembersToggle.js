import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function MembersToggle({
  count,
  setCount,
  setHaveAnimal,
  close,
  isMembersToggleOpen,
  setIsMembersToggleOpen,
}) {
  const outSection = useRef();
  const [disabled, setDisabled] = useState({
    left: { color: '#ebebeb', border: '1px solid #ebebeb' },
    right: { color: 'black', border: '1px solid black' },
  });
  const { left, right } = disabled;

  const [isYes, setIsYes] = useState({
    yes: { color: '#ebebeb', border: '1px solid #ebebeb' },
    no: { color: '#ebebeb', border: '1px solid #ebebeb' },
  });
  const { yes, no } = isYes;

  const minus = () => {
    if (count === 0) return;
    if (count === 1) {
      setDisabled({
        ...disabled,
        left: { color: '#ebebeb', border: '1px solid #ebebeb' },
      });
    }
    setCount(prev => prev - 1);
  };

  const plus = () => {
    if (count < 4) {
      setCount(prev => prev + 1);
      setDisabled({
        ...disabled,
        left: { color: 'black', border: '1px solid black' },
      });
    }
    if (count === 3) {
      setDisabled({
        ...disabled,
        right: { color: '#ebebeb', border: '1px solid #ebebeb' },
      });
    }
  };

  const onClickYesBtn = () => {
    setHaveAnimal('y');
    setIsYes({
      yes: { color: 'black', border: '1px solid black' },
      no: { color: '#ebebeb', border: '1px solid #ebebeb' },
    });

    close();
  };

  const onClickNoBtn = () => {
    setHaveAnimal('n');
    setIsYes({
      ...isYes,
      yes: { color: '#ebebeb', border: '1px solid #ebebeb' },
      no: { color: 'black', border: '1px solid black' },
    });

    close();
  };

  useEffect(() => {
    window.addEventListener('mousedown', onClickOutSection);
    return () => {
      window.removeEventListener('mousedown', onClickOutSection);
    };
  }, []);

  const onClickOutSection = ({ target }) => {
    if (isMembersToggleOpen && !outSection.current.contains(target))
      setIsMembersToggleOpen(false);
  };

  return (
    <div>
      {isMembersToggleOpen && (
        <Container ref={outSection}>
          <Wrapper>
            <Tittle>인원 수</Tittle>
            <div>
              <Buttons onClick={minus} style={left}>
                <AiOutlineMinus />
              </Buttons>
              {count}
              <Buttons onClick={plus} style={right}>
                <AiOutlinePlus />
              </Buttons>
            </div>
          </Wrapper>
          <Wrapper>
            <Tittle>반려동물 동반</Tittle>
            <BtnWrapper>
              <Buttons onClick={onClickYesBtn} style={yes}>
                O
              </Buttons>
              <Buttons onClick={onClickNoBtn} style={no}>
                X
              </Buttons>
            </BtnWrapper>
          </Wrapper>
          <Text>
            반려동물을 3마리 이상 동반하는 경우, 반드시 호스트에게 알려주세요.
          </Text>
        </Container>
      )}
    </div>
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
