import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUser3Line } from 'react-icons/ri';
import { CgGlobeAlt } from 'react-icons/cg';
import styled from 'styled-components';
import LogoutToggle from './LogoutToggle';

function Nav() {
  const [showToggle, setShowToggle] = useState({ display: 'none' });

  const toggleHandler = () => {
    showToggle.display === 'none'
      ? setShowToggle({ display: 'block' })
      : setShowToggle({ display: 'none' });
  };

  console.log('showToggle: ', showToggle);
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
          <Menu>숙소</Menu>
          <div>
            <Navbar>
              <Buttons>호스트 되기</Buttons>
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
            <LogoutToggle showToggle={showToggle} />
          </div>
        </Container>
        <SearchBar>search bar UI</SearchBar>
      </Header>
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
  padding-left: 80px;
  padding-right: 80px;
  background: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-size: 17px;
  font-weight: 400;
  cursor: pointer;

  &: after {
    content: '';
    width: 20px;
    margin-top: 10px;
    border-bottom: 2px solid #ffffff;
  }
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
  padding: 0 15px;
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

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  bolder-radius: 22px;
  border: 1px solid white;
`;

export default Nav;
