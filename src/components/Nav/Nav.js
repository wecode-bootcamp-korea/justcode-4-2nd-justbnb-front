import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import SearchBar from './SearchBar';
import UserNav from './UserNav';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <Box>
      <Header>
        {scrollPosition < 100 && (
          <Aside>
            저스트비앤비의 코로나 19 대응 방안에 대한 최신 정보를 확인하세요.
          </Aside>
        )}
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
            {scrollPosition < 100 ? (
              <img
                alt="main-logo"
                src={`${process.env.PUBLIC_URL}/images/로고화이트.png`}
                width="150"
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <img
                alt="main-logo"
                src={`${process.env.PUBLIC_URL}/images/로고핑크.png`}
                width="150"
                style={{ cursor: 'pointer' }}
              />
            )}
          </Link>
          {scrollPosition < 100 ? (
            <Wrapper>
              <Menu>숙소</Menu>
              <DisableMenu>체험</DisableMenu>
              <DisableMenu>온라인 체험</DisableMenu>
            </Wrapper>
          ) : (
            <SearchBtn>
              <Text>검색 시작하기</Text>
              <div>
                <BiSearch font-size={20} />
              </div>
            </SearchBtn>
          )}
          <UserNav />
        </Container>
        <SearchBar
          scrollPosition={scrollPosition}
          updateScroll={updateScroll}
        />
      </Header>
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

const moveTop = keyframes`
0%{
  opacity:0;
  top:-200px;
} 50% {
  top: -100px;
} 100% {
  top: 0;
}`;

const Header = styled.header`
  position: fixed;
  top: -header.height;
  width: 100%;
  transition: top 0.3s;
  margin: 0 auto;
  background: black;

  animation: ${moveTop} 0.3s linear forwards;
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

const Text = styled.div`
  padding-right: 100px;
  font-weight: 500;
  font-size: 0.9rem;
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 10px 15px 20px;
  border-radius: 30px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
`;

export default Nav;
