import React, { useState } from 'react';
import styled from 'styled-components';

export default function CounterValue2({ onChange, resultChoice }) {
  const [num, setNum] = useState(0);

  const upNum = () => {
    setNum(num >= 4 ? 4 : num + 1);
  };

  const downNum = () => {
    setNum(num <= 0 ? 0 : num - 1);
  };

  const NumUp = e => {
    onChange(e);
    upNum(e);
  };

  const NumDown = e => {
    onChange(e);
    downNum(e);
  };

  return (
    <CounterWrapper>
      <Button>
        <button
          id="4"
          onClick={e => NumDown(e)}
          value={num === 0 ? 'false' : 'true'}
        >
          -
        </button>
      </Button>
      <Num>
        <h1>{num}</h1>
      </Num>
      <Button2>
        <button
          id="4"
          onClick={e => NumUp(e)}
          value={num === 0 ? 'false' : 'true'}
        >
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
    margin-right: 17px;
  }
`;
