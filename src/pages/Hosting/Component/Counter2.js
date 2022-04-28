import React, { useState } from 'react';
import styled from 'styled-components';

export default function CounterValue2({ onChange, resultChoice }) {
  const [count, setCount] = useState(false);

  // const upNum = () => {
  //   setNum(num >= 4 ? 4 : num + 1);
  // };

  // const downNum = () => {
  //   setNum(num <= 0 ? 0 : num - 1);
  // };

  // const NumUp = e => {
  //   upNum();
  //   e.target.value = e.target.value === 'true' ? 'false' : 'true';
  //   onChange(e);
  // };

  // const NumDown = e => {
  //   downNum();
  //   e.target.value = e.target.value === 'true' ? 'false' : 'true';
  //   onChange(e);
  // };

  return (
    <CounterWrapper>
      <Button>
        <button
          id="5"
          value="true"
          onClick={e => {
            setCount(true);
            onChange(e);
          }}
          style={{ opacity: count ? null : '0.3' }}
        >
          o
        </button>
      </Button>
      <Button2>
        <button
          id="5"
          value="false"
          onClick={e => {
            setCount(false);
            onChange(e);
          }}
          style={{ opacity: count ? null : '0.3' }}
        >
          x
        </button>
      </Button2>
    </CounterWrapper>
  );
}

const CounterWrapper = styled.section`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
`;

const Button = styled.div`
  /* display: flex; */
  button {
    padding: 7px;
    background-color: white;
    border: 1px solid rgba(155, 149, 167, 0.6);
    border-radius: 50%;
    font-size: 15px;
  }
`;

const Button2 = styled.div`
  /* display: flex; */
  margin-left: 40px;
  button {
    padding: 6px;
    background-color: white;
    border: 1px solid rgba(155, 149, 167, 0.6);
    border-radius: 50%;
    font-size: 15px;
  }
`;

// const Num = styled.div`
//   h1 {
//     font-weight: lighter;
//     font-size: 17px;
//     margin-left: 15px;
//     margin-right: 17px;
//   }
// `;
