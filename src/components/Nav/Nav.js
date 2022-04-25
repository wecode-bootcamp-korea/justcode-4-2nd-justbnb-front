import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUser3Line } from 'react-icons/ri';
import { CgGlobeAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import LogoutToggle from './LogoutToggle';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';
import SearchBar from './SearchBar';
import FixedNav from './FixedNav';
// import LoginToggle from './LoginToggle';

function Nav() {
  const [openToggle, setOpenToggle] = useState({ display: 'none' });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

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
    <Box>
      <Aside>
        저스트비앤비의 코로나 19 대응 방안에 대한 최신 정보를 확인하세요.
      </Aside>
      {scrollPosition < 40 ? (
        <Header>
          <Container>
            <img
              alt="main-logo"
              src={`${process.env.PUBLIC_URL}/images/로고화이트.png`}
              width="150"
              style={{ cursor: 'pointer' }}
            />
            <Wrapper>
              <Menu>숙소</Menu>
              <DisableMenu>체험</DisableMenu>
              <DisableMenu>온라인 체험</DisableMenu>
            </Wrapper>
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
            </div>
          </Container>
          <SearchBar />
        </Header>
      ) : (
        <FixedNav />
      )}
      {isLoginModalOpen && <LoginModal loginModalHandler={loginModalHandler} />}
      {isSignupModalOpen && (
        <SignupModal signupModalHandler={signupModalHandler} />
      )}
    </Box>
  );
}

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;
const Aside = styled.aside`
  padding: 20px 0;
  background: black;
  color: #ffffff;
  text-align: center;
  text-decoration: underline;
  font-size: 0.9rem;
  font-weight: 400;

  &: hover {
    color: #dddddd;
    cursor: pointer;
  }
`;

const Header = styled.header`
  position: fixed;
  top: -header.height;
  width: 100%;
  transition: top 0.5s;
  margin: 0 auto;
  background: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
`;

const Wrapper = styled.div`
  display: flex;
  padding-left: 80px;
`;

const styledMenu = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
`;

const Menu = styled.div`
  ${styledMenu}
  cursor: pointer;

  &: after {
    content: '';
    width: 20px;
    margin-top: 10px;
    border-bottom: 2px solid #ffffff;
  }
`;

const DisableMenu = styled.div`
  ${styledMenu}
  opacity:0.7;
  cursor: default;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserBox = styled.div`
  display: flex;
  padding: 5px 5px 5px 12px;
  background: #ffffff;
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
export default Nav;
