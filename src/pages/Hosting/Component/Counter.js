import React, { useState } from 'react';
import styled from 'styled-components';

export default function CounterValue({ onChange, resultChoice }) {
  const [num, setNum] = useState(1);

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
        <button
          className="minus"
          id="4"
          onClick={e => NumDown(e)}
          value={num}
          style={{ opacity: num === 1 ? '0.3' : '1' }}
        >
          <Bar></Bar>
        </button>
      </Button>
      <Num>
        <h1>{num}</h1>
      </Num>
      <Button>
        <button
          id="4"
          onClick={e => NumUp(e)}
          value={num}
          style={{ opacity: num === 16 ? '0.3' : '1' }}
        >
          +
        </button>
      </Button>
    </CounterWrapper>
  );
}

const CounterWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 50%;
    border: none;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

const Bar = styled.div`
  width: 50%;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.7); ;
`;

const Num = styled.div`
  h1 {
    font-size: 17px;
    margin-left: 15px;
    margin-right: 18px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
