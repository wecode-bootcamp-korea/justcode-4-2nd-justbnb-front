import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUser3Line } from 'react-icons/ri';
import { CgGlobeAlt } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import LogoutToggle from './LogoutToggle';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';
import LoginToggle from './LoginToggle';

function UserNav({ scrollPosition, token }) {
  const [openToggle, setOpenToggle] = useState({ display: 'none' });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => {
    openToggle.display === 'none'
      ? setOpenToggle({ display: 'block' })
      : setOpenToggle({ display: 'none' });
  };

  const loginModalHandler = display => {
    !isLoginModalOpen ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
    setOpenToggle({ display: display });
  };

  const signupModalHandler = display => {
    !isSignupModalOpen
      ? setIsSignupModalOpen(true)
      : setIsSignupModalOpen(false);
    setOpenToggle({ display: display });
  };

  const action = () => {
    token ? navigate('/management') : loginModalHandler();
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Navbar>
        {scrollPosition < 50 ? (
          <>
            <Buttons color="#ffffff" background="#262626" onClick={action}>
              {!token ? '호스트 되기' : '호스트 모드로 전환'}
            </Buttons>
            <Buttons background="#262626">
              <CgGlobeAlt
                fontSize={20}
                style={{ opacity: '0.5' }}
                color="#ffffff"
              />
            </Buttons>
            <UserBox onClick={toggleHandler} active={false}>
              <StyledIcon>
                <GiHamburgerMenu fontSize={16} />
              </StyledIcon>
              <User>
                <RiUser3Line fontSize={18} />
              </User>
            </UserBox>
          </>
        ) : (
          <>
            <Buttons color="black" background="#F7F7F7" onClick={action}>
              {!token ? '호스트 되기' : '호스트 모드로 전환'}
            </Buttons>
            <Buttons color="black" background="#F7F7F7">
              <CgGlobeAlt fontSize={20} style={{ opacity: '0.5' }} />
            </Buttons>
            <UserBox onClick={toggleHandler} active={true}>
              <StyledIcon>
                <GiHamburgerMenu fontSize={16} />
              </StyledIcon>
              <User>
                <RiUser3Line fontSize={18} />
              </User>
            </UserBox>
          </>
        )}
      </Navbar>
      {token && (
        <LoginToggle
          openToggle={openToggle}
          toggleHandler={toggleHandler}
          setOpenToggle={setOpenToggle}
        />
      )}
      {!token && (
        <LogoutToggle
          openToggle={openToggle}
          loginModalHandler={loginModalHandler}
          signupModalHandler={signupModalHandler}
          setOpenToggle={setOpenToggle}
        />
      )}
      {isLoginModalOpen && <LoginModal loginModalHandler={loginModalHandler} />}
      {isSignupModalOpen && (
        <SignupModal signupModalHandler={signupModalHandler} />
      )}
    </div>
  );
}

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserBox = styled.div`
  display: flex;
  padding: 5px 5px 5px 12px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 22px;
  cursor: pointer;

  &:hover {
    box-shadow: ${props => props.active && '2px 2px 3px lightgray'};
    transform: scale(1, 1);
  }
`;

const User = styled.div`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 50%;
  color: gray;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
  font-weight: 300;
  color: #717171;
`;

const Buttons = styled.li`
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 15px;
  color: ${props => props.color};
  border-radius: 22px;
  font-weight: 600;
  font-size: 14px;

  &: hover {
    cursor: pointer;
    background: ${props => props.background};
  }
`;

export default UserNav;
