import React from 'react';
import styled from 'styled-components';

function LoginToggle({ openToggle }) {
  return (
    <ToggleBox style={openToggle}>
      <ToggleList>위시리스트</ToggleList>
      <ToggleList>숙소관리</ToggleList>
      <ToggleList>로그아웃</ToggleList>
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

export default LoginToggle;
