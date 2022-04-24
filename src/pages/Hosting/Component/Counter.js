import React, { useState } from 'react';
import styled from 'styled-components';

export default function CounterValue() {
  const [num, setNum] = useState(4);

  //최대 16명, 최소 1명//
  const upNum = () => {
    setNum(num >= 16 ? 16 : num + 1);
  };

  const downNum = () => {
    setNum(num <= 1 ? 1 : num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <Button>
        <button onClick={downNum}>-</button>
        <button onClick={upNum}>+</button>
      </Button>
    </div>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    border-radius: 12px;
    border: 1px solid grey;
    font-size: 15px;
    background-color: white;
  }
`;
