import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function LogoutToggle({
  openToggle,
  loginModalHandler,
  signupModalHandler,
  setOpenToggle,
}) {
  const outSection = useRef();

  useEffect(() => {
    window.addEventListener('mousedown', onClickOutSection);
    return () => {
      window.removeEventListener('mousedown', onClickOutSection);
    };
  });

  const onClickOutSection = ({ target }) => {
    if (openToggle.display === 'block' && !outSection.current.contains(target))
      setOpenToggle({ display: 'none' });
  };

  return (
    <div>
      {openToggle.display === 'block' && (
        <ToggleBox style={openToggle} ref={outSection}>
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
          <ToggleList onClick={loginModalHandler}>숙소호스트 되기</ToggleList>
          <ToggleList>도움말</ToggleList>
        </ToggleBox>
      )}
    </div>
  );
}

const ToggleBox = styled.div`
  position: absolute;
  width: 15rem;
  background-color: #ffffff;
  border-radius: 10px;
  list-style: none;
  box-shadow: 1px 1px 2px #dddddd;
  z-index: 999;
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

  &:nth-child(2) {
    border-bottom: 1px solid lightgray;
  }
`;

export default LogoutToggle;
