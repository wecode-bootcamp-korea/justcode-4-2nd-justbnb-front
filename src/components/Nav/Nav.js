import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUser3Line } from 'react-icons/ri';
import { CgGlobeAlt } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import LogoutToggle from './LogoutToggle';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';
// import LoginToggle from './LoginToggle';

function Nav() {
  const [openToggle, setOpenToggle] = useState({ display: 'none' });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [highlightBtn, setHighlightBtn] = useState();

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

  const onClickBar = () => {
    setHighlightBtn({});
  };

  return (
    <>
      <Aside>
        저스트비앤비의 코로나 19 대응 방안에 대한 최신 정보를 확인하세요.
      </Aside>
      <Header>
        <Container>
          <img
            alt="main-logo"
            src={`${process.env.PUBLIC_URL}/images/로고화이트.png`}
            width="150"
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
                <CgGlobeAlt fontSize={20} />
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
        <SearchBarWrapper>
          <SearchBar>
            <SearchInner>
              <SearchKeyword>위치</SearchKeyword>
              <Input placeholder="어디로 여행가세요?" />
            </SearchInner>
            <SearchInner>
              <SearchKeyword>체크인</SearchKeyword>
              <Input placeholder="날짜 입력" />
            </SearchInner>
            <SearchInner>
              <SearchKeyword>체크아웃</SearchKeyword>
              <Input placeholder="날짜 입력" />
            </SearchInner>
            <SearchInner>
              <SearchKeyword>인원</SearchKeyword>
              <Input placeholder="게스트 추가" />
            </SearchInner>
            <SearchBtns>
              <BiSearch font-size={20} />
              <SearchKeyword2>검색</SearchKeyword2>
            </SearchBtns>
          </SearchBar>
        </SearchBarWrapper>
      </Header>
      {isLoginModalOpen && <LoginModal loginModalHandler={loginModalHandler} />}
      {isSignupModalOpen && (
        <SignupModal signupModalHandler={signupModalHandler} />
      )}
    </>
  );
}

const Aside = styled.aside`
  padding: 16px 0;
  background: black;
  color: #ffffff;
  text-align: center;
  text-decoration: underline;
  font-size: 15px;
  font-weight: 400;

  &: hover {
    color: #dddddd;
    cursor: pointer;
  }
`;

const Header = styled.header`
  margin: 0 auto;
  background: black;
  padding-bottom: 80px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  padding-left: 60px;
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
  padding: 10px;
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

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  background-color: #ffffff;
  border-radius: 40px;
`;

const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px 15px 25px;
  background-color: #ffffff;
  border-radius: 40px;

  &: hover {
    background: #ebebeb;
    cursor: pointer;
  }
`;

const SearchBtns = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 15px;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: #ffffff;
  border-radius: 40px;
`;

const SearchKeyword = styled.div`
  padding-left: 5px;
  padding-bottom: 5px;
  font-size: 0.8em;
  font-weight: 600;
`;

const SearchKeyword2 = styled.div`
  padding-left: 5px;
  font-size: 1em;
`;

const Input = styled.input`
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;
export default Nav;
