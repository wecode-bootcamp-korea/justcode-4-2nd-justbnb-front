import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import SearchToggle from './SearchToggle';
import MembersToggle from './MembersToggle';

function SearchBar() {
  const [isSearchToggleOpen, setIsSearchToggleOpen] = useState(false);
  const [isMembersToggleOpen, setIsMembersToggleOpen] = useState(false);

  const searchToggleHandler = () => {
    !isSearchToggleOpen
      ? setIsSearchToggleOpen(true)
      : setIsSearchToggleOpen(false);
  };

  const membersToggleHandler = () => {
    !isMembersToggleOpen
      ? setIsMembersToggleOpen(true)
      : setIsMembersToggleOpen(false);
  };

  return (
    <Container>
      <SearchWrapper>
        <div>
          <SearchInner onClick={searchToggleHandler}>
            <SearchKeyword>위치</SearchKeyword>
            <Text>어디로 여행가세요?</Text>
          </SearchInner>
          {isSearchToggleOpen && <SearchToggle />}
        </div>
        <SearchInner>
          <SearchKeyword>체크인</SearchKeyword>
          <Input placeholder="날짜 입력" />
        </SearchInner>
        <SearchInner>
          <SearchKeyword>체크아웃</SearchKeyword>
          <Input placeholder="날짜 입력" />
        </SearchInner>
        <div>
          <SearchInner onClick={membersToggleHandler}>
            <SearchKeyword>인원</SearchKeyword>
            <Text>게스트 추가</Text>
          </SearchInner>
          {isMembersToggleOpen && <MembersToggle />}
        </div>
        <SearchBtns>
          <BiSearch font-size={20} />
          <SearchKeyword2>검색</SearchKeyword2>
        </SearchBtns>
      </SearchWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 14px;
  background-color: #ffffff;
  border-radius: 40px;
`;

const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 25px;
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
  cursor: pointer;
`;

const Text = styled.div`
  padding-top: 3px;
  padding-right: 40px;
  font-size: 0.8rem;
  color: #838383;
`;
const SearchKeyword = styled.div`
  padding-left: 5px;
  padding-bottom: 5px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const SearchKeyword2 = styled.div`
  padding-left: 5px;
  font-size: 1rem;
`;

const Input = styled.input`
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`;
export default SearchBar;
