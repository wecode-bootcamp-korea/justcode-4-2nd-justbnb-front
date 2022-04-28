import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LoginToggle({ openToggle, toggleHandler, setOpenToggle }) {
  const outSection = useRef();
  const navigate = useNavigate();

  const goToWishList = () => {
    navigate('/wish');
  };

  const goToManagingPage = () => {
    navigate('/management');
  };

  const logOut = () => {
    localStorage.removeItem('token');
    toggleHandler();
    window.location.reload();
  };

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
          <ToggleList onClick={goToWishList}>위시리스트</ToggleList>
          <ToggleList onClick={goToManagingPage}>숙소관리</ToggleList>
          <ToggleList onClick={logOut}>로그아웃</ToggleList>
          <ToggleList>도움말</ToggleList>
        </ToggleBox>
      )}
    </div>
  );
}

const ToggleBox = styled.div`
  position: absolute;
  width: 18em;
  background: #ffffff;
  border-radius: 10px;
  list-style: none;
  box-shadow: 1px 1px 2px #dddddd;
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

export default LoginToggle;
