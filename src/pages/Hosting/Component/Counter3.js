import React, { useState } from 'react';
import { FaPlus, FaMinus, FaAlignJustify } from 'react-icons/fa';
import styled from 'styled-components';

export default function CounterValue3({ onChange }) {
  const [num, setNum] = useState(20000);

  const upNum = e => {
    console.log(e);
    setNum(num >= 100000 ? 100000 : num + 1000);
    e.target.value = Number(e.target.value) + 1000;
    onChange(e);
  };

  const downNum = e => {
    setNum(num <= 0 ? 0 : num - 1000);
    e.target.value = Number(e.target.value) - 1000;
    onChange(e);
  };

  return (
    <CounterWrapper>
      <Button>
        <button onClick={downNum} id="7" value={num}>
          <Bar></Bar>
        </button>
      </Button>
      <NumContainer>
        <h1>₩{num}</h1>
      </NumContainer>
      <Button>
        <button onClick={upNum} id="7" value={num}>
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
  width: 70%;
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

const NumContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(155, 149, 167, 0.6);
  font-size: 47px;
  font-weight: 650;
  text-align: center;
  width: 65%;
  padding: 30px 0 22px 0;
  h1 {
    text-align: center;
  }
`;
