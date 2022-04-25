import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LogoutToggle({ openToggle, loginModalHandler, signupModalHandler }) {
  return (
    <ToggleBox style={openToggle}>
      <ToggleList
        onClick={() => {
          signupModalHandler('none');
        }}
      >
        회원가입
      </ToggleList>
      <ToggleList
        onClick={() => {
          loginModalHandler('none');
        }}
      >
        로그인
      </ToggleList>
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
  width: 15rem;
  background: #ffffff;
  border-radius: 10px;
  list-style: none;
  box-shadow: 2px 2px 10px #dddddd;
`;

const ToggleList = styled.li`
  margin: 10px 0;
  padding: 15px;
  font-size: 14px;
  color: black;

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
