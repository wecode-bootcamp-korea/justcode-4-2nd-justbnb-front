import React, { useState } from 'react';
import styled from 'styled-components';

export default function CounterValue2({ onChange, resultChoice }) {
  const [count, setCount] = useState(false);

  return (
    <CounterWrapper>
      <Button>
        <button
          id="5"
          value="Y"
          onClick={e => {
            setCount(true);
            onChange(e);
          }}
          style={{ opacity: count ? null : '0.3' }}
        >
          O
        </button>
      </Button>
      <Button>
        <button
          id="5"
          value="N"
          onClick={e => {
            setCount(false);
            onChange(e);
          }}
          style={{ opacity: count ? '0.3' : null }}
        >
          X
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
  cursor: pointer;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 50%;
    border: none;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
  &:first-child {
    margin-right: 40px;
  }
`;
