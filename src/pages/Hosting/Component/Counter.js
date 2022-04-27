import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styled from 'styled-components';

export default function CounterValue({ onChange, resultChoice }) {
  const [num, setNum] = useState(4);

  //최대 16명, 최소 1명//
  const upNum = () => {
    setNum(num >= 16 ? 16 : num + 1);
  };

  const downNum = () => {
    setNum(num <= 1 ? 1 : num - 1);
  };

  const NumUp = e => {
    upNum(e);
    e.target.value = Number(e.target.value) + 1;
    onChange(e);
  };

  const NumDown = e => {
    downNum(e);
    e.target.value = Number(e.target.value) - 1;
    onChange(e);
  };

  return (
    <CounterWrapper>
      <Button>
        <button id="3" onClick={e => NumDown(e)} value={num}>
          {/* <button onClick={downNum}> */}-
        </button>
      </Button>
      <Num>
        <h1>{num}</h1>
      </Num>
      <Button2>
        <button id="3" onClick={e => NumUp(e)} value={num}>
          +
        </button>
      </Button2>
    </CounterWrapper>
  );
}

const CounterWrapper = styled.section`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  button {
    padding: 7px;
    background-color: white;
    border: 1px solid rgba(155, 149, 167, 0.6);
    border-radius: 50%;
  }
  .icons {
    display: flex;
  }
`;

const Button2 = styled.div`
  display: flex;
  button {
    padding: 6px;
    background-color: white;
    border: 1px solid rgba(155, 149, 167, 0.6);
    border-radius: 50%;
  }
  .icons {
    display: flex;
  }
`;

const Num = styled.div`
  h1 {
    font-weight: lighter;
    font-size: 17px;
    margin-left: 15px;
    margin-right: 18px;
  }
`;
