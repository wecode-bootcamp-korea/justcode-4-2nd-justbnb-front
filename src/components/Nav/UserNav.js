import React, { useState } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUser3Line } from 'react-icons/ri';
import { CgGlobeAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import LogoutToggle from './LogoutToggle';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';

function UserNav() {
  const [openToggle, setOpenToggle] = useState({ display: 'none' });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

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

  return (
    <div>
      <Navbar>
        <Link to="/hosting" style={{ textDecoration: 'none' }}>
          <Buttons>호스트 되기</Buttons>
        </Link>
        <Buttons>
          <CgGlobeAlt fontSize={20} style={{ opacity: '0.5' }} />
        </Buttons>
        <UserBox onClick={toggleHandler}>
          <StyledIcon>
            <GiHamburgerMenu fontSize={16} />
          </StyledIcon>
          <User>
            <RiUser3Line fontSize={18} />
          </User>
        </UserBox>
      </Navbar>
      <LogoutToggle
        openToggle={openToggle}
        loginModalHandler={loginModalHandler}
        signupModalHandler={signupModalHandler}
      />
      {/* {token && <LoginToggle showToggle={showToggle} />} */}
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
  color: #ffffff;
  border-radius: 22px;
  font-weight: 400;
  font-size: 14px;

  &: hover {
    color: #dddddd;
    cursor: pointer;
    background: #262626;
  }
`;

export default UserNav;
