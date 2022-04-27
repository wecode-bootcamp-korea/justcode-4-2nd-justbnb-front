import React from 'react';
import styled from 'styled-components';

function BtnCard({ list, setCity, close }) {
  const onClickBtn = () => {
    setCity(list.name);
    close();
  };

  return (
    <BtnsWrapper>
      <BtnLayout onClick={onClickBtn}>{list.name}</BtnLayout>
    </BtnsWrapper>
  );
}

const BtnLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(227, 28, 95);
    background: #f7f7f7;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default BtnCard;
