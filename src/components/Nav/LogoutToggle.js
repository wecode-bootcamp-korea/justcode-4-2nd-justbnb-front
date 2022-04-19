import React from 'react';
import styled from 'styled-components';

function LogoutToggle({ showToggle }) {
  return (
    <Container style={showToggle}>
      <List>회원가입</List>
      <List>로그인</List>
      <List>숙소호스트 되기</List>
      <List>도움말</List>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 15em;
  background: #ffffff;
  border-radius: 10px;
  list-style: none;
`;

const List = styled.li`
  padding: 20px;
  font-size: 14px;
  cursor: pointer;

  &:first-child {
    font-weight: 600;
  }

  &: nth-child(2) {
    border-bottom: 1px solid lightgray;
  }
`;

export default LogoutToggle;
