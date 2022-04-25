import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styled from 'styled-components';

export default function CounterValue2() {
  const [num, setNum] = useState(0);

  const upNum = () => {
    setNum(num >= 4 ? 4 : num + 1);
  };

  const downNum = () => {
    setNum(num <= 0 ? 0 : num - 1);
  };

  return (
    <CounterWrapper>
      <Button>
        <button onClick={downNum}>
          <FaMinus className="icons" />
        </button>
      </Button>
      <Num>
        <h1>{num}</h1>
      </Num>
      <Button2>
        <button onClick={upNum}>
          <FaPlus classBane="icons " />
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
    margin-right: 17px;
  }
`;
