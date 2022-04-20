import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LogoutToggle({ openToggle, modalHandler }) {
  return (
    <ToggleBox style={openToggle}>
      <ToggleList>회원가입</ToggleList>
      <ToggleList onClick={modalHandler}>로그인</ToggleList>
      <Link
        to="/hosting"
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <ToggleList>숙소호스트 되기</ToggleList>
      </Link>
      <ToggleList>도움말</ToggleList>
    </ToggleBox>
  );
}

const ToggleBox = styled.div`
  position: absolute;
  width: 15em;
  background: #ffffff;
  border-radius: 10px;
  list-style: none;
`;

const ToggleList = styled.li`
  margin: 10px 0;
  padding: 15px;
  font-size: 14px;

  &:hover {
    background-color: rgb(247, 247, 247);
    cursor: pointer;
  }

  &:first-child {
    font-weight: 600;
  }

  &: nth-child(2) {
    border-bottom: 1px solid lightgray;
  }
`;

export default LogoutToggle;
