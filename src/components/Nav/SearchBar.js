import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import SearchToggle from './SearchToggle';
import MembersToggle from './MembersToggle';
import DatePickerRangeController from 'react-datepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar({ scrollPosition, updateScroll, flag }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  const [city, setCity] = useState();
  const [count, setCount] = useState(1);
  const [haveAnimal, setHaveAnimal] = useState('');

  const [isSearchToggleOpen, setIsSearchToggleOpen] = useState(false);
  const [isMembersToggleOpen, setIsMembersToggleOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const searchToggleHandler = () => {
    if (!isSearchToggleOpen) {
      setIsSearchToggleOpen(true);
      setIsMembersToggleOpen(false);
      setIsDatesOpen(false);
    } else {
      setIsSearchToggleOpen(false);
    }
  };
  const membersToggleHandler = () => {
    if (!isMembersToggleOpen) {
      setIsMembersToggleOpen(true);
      setIsSearchToggleOpen(false);
      setIsDatesOpen(false);
    } else {
      setIsMembersToggleOpen(false);
    }
  };

  const datesToggleHandler = () => {
    if (isDatesOpen) {
      setIsDatesOpen(false);
      setIsMembersToggleOpen(false);
      setIsSearchToggleOpen(false);
    }
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <DateInput onClick={onClick}>{value}</DateInput>
  );

  return (
    <Container bgColor={flag === 'list' ? 'white' : 'black'}>
      {scrollPosition < 100 && (
        <SearchWrapper bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}>
          <div>
            <SearchInner
              onClick={searchToggleHandler}
              bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
              hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
            >
              <SearchKeyword>위치</SearchKeyword>
              <Text>어디로 여행가세요?</Text>
            </SearchInner>
            {isSearchToggleOpen && <SearchToggle setCity={setCity} />}
          </div>
          <SearchInner
            onClick={datesToggleHandler}
            bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
            hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
          >
            <SearchKeyword>체크인</SearchKeyword>
            {!startDate ? (
              <Text>날짜 선택</Text>
            ) : (
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                minDate={new Date()}
                monthsShown={2}
                customInput={<ExampleCustomInput />}
              />
            )}
          </SearchInner>
          <SearchInner
            bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
            hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
          >
            <SearchKeyword>체크아웃</SearchKeyword>
            <DatePickerRangeController
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              minDate={new Date()}
              customInput={<ExampleCustomInput />}
            />
          </SearchInner>
          <div>
            <SearchInner
              onClick={membersToggleHandler}
              bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
              hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
            >
              <SearchKeyword>인원</SearchKeyword>
              <Text>게스트 추가</Text>
            </SearchInner>
            {isMembersToggleOpen && (
              <MembersToggle
                count={count}
                setCount={setCount}
                setHaveAnimal={setHaveAnimal}
              />
            )}
          </div>
          <SearchBtns>
            <BiSearch font-size={20} />
            <SearchKeyword2>검색</SearchKeyword2>
          </SearchBtns>
        </SearchWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: fixed;
  justify-content: center;

  top: -header.height;
  width: 100%;
  transition: top 0.3s;
  margin: 0 auto;
  background: ${props => props.bgColor};
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 14px;
  background-color: ${props => props.bgColor};
  border-radius: 40px;
`;

const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 25px;
  background-color: ${props => props.bgColor};
  border-radius: 40px;
  &: hover {
    background: ${props => props.hoverColor};
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
  font-size: 0.9rem;
  font-weight: 600;
`;

const SearchKeyword2 = styled.div`
  padding-left: 5px;
  font-size: 1rem;
`;

const DateInput = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export default SearchBar;
