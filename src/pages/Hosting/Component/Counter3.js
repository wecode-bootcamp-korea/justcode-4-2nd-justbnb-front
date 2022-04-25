import React, { useState } from 'react';
import { FaPlus, FaMinus, FaAlignJustify } from 'react-icons/fa';
import styled from 'styled-components';

export default function CounterValue3() {
  const [num, setNum] = useState(20000);

  const upNum = () => {
    setNum(num >= 100000 ? 100000 : num + 1000);
  };

  const downNum = () => {
    setNum(num <= 0 ? 0 : num - 1000);
  };

  return (
    <CounterWrapper>
      <Button>
        <button onClick={downNum}>
          <FaMinus className="icons " />
        </button>
      </Button>
      <NumContainer>
        <h1>₩{num}</h1>
      </NumContainer>
      <Button2>
        <button onClick={upNum}>
          <FaPlus className="icons " />
        </button>
      </Button2>
    </CounterWrapper>
  );
}

const CounterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* width: 100%; */
  width: 70%;

  /* position: relative; */
  /* width: 90px; */
  /* justify-content: space-evenly; */
`;

const Button = styled.div`
  display: flex;
  button {
    background-color: white;
    border: 1px solid rgba(155, 149, 167, 0.6);
    border-radius: 50%;
    padding: 15px;
    .icons {
      display: flex;
    }
  }
`;

const NumContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(155, 149, 167, 0.6);
  font-size: 47px;
  font-weight: 650;
  text-align: center;
  /* padding: 32px; */
  width: 65%;
  padding: 30px 0 22px 0;
  h1 {
    text-align: center;
  }
`;

const Button2 = styled.div`
  display: flex;
  button {
    background-color: white;
    border: 1px solid rgba(155, 149, 167, 0.6);
    border-radius: 50%;
    padding: 15px;
    cursor: pointer;
    .icons {
      display: flex;
    }
  }
`;
