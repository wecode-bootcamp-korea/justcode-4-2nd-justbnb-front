import React, { useState } from 'react';
import styled from 'styled-components';
import UserNav from './UserNav';
import { BiSearch } from 'react-icons/bi';
import SearchBar from './SearchBar';

function PageNav() {
  const [isTrue, setIsTrue] = useState(false);
  const token = localStorage.getItem('token');
  const goToTop = () => {
    window.scrollTo(0.0);
  };
  const onClickBtn = () => {
    !isTrue ? setIsTrue(true) : setIsTrue(false);
  };

  return (
    <Header>
      <Container color="#ffffff">
        <img
          alt="main-logo"
          src={`${process.env.PUBLIC_URL}/images/로고핑크.png`}
          width="150"
          style={{ cursor: 'pointer' }}
          onClick={goToTop}
        />
        <SearchBtn onClick={onClickBtn}>
          <Text>검색 시작하기</Text>
          <BtnBox>
            <BiSearch font-size={20} />
          </BtnBox>
        </SearchBtn>
        <UserNav token={token} />
      </Container>
      {isTrue && <SearchBar scrollPosition={0} flag="list" />}
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  top: -header.height;
  width: 100%;
  transition: top 0.3s;
  margin: auto;
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  background-color: ${props => props.color};
`;

const Text = styled.div`
  padding-right: 200px;
  color: black;
  font-weight: 500;
  font-size: 0.9rem;
`;

const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  color: #ffffff;
  border-radius: 30px;
  border: 1px solid #dddddd;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 5px 5px lightgray;
  }
`;

const BtnBox = styled.div`
  padding: 7px 7px 5px 7px;
  border-radius: 50%;
  background-color: #ff385c;
`;

export default PageNav;
