import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import SearchToggle from './SearchToggle';
import MembersToggle from './MembersToggle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar({ scrollPosition, updateScroll, flag }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [isCheckIn, setIsCheckIn] = useState(true);
  const [isCheckOut, setIsCheckOut] = useState(true);

  const [city, setCity] = useState();
  const [count, setCount] = useState(0);
  const [haveAnimal, setHaveAnimal] = useState('');

  const [isSearchToggleOpen, setIsSearchToggleOpen] = useState(false);
  const [isMembersToggleOpen, setIsMembersToggleOpen] = useState(false);
  const navigate = useNavigate();

  const goToList = () => {
    navigate(`/list/:${city}`, {
      state: {
        city: city,
        startDate: startDate,
        endDate: endDate,
        count: count,
        haveAnimal: haveAnimal,
      },
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  const onClickCheckIn = () => {
    setIsCheckIn(false);
    setIsMembersToggleOpen(false);
    setIsSearchToggleOpen(false);
  };

  const onClickCheckOut = () => {
    setIsCheckOut(false);
    setIsMembersToggleOpen(false);
    setIsSearchToggleOpen(false);
  };

  const searchToggleHandler = () => {
    if (!isSearchToggleOpen) {
      setIsSearchToggleOpen(true);
      setIsMembersToggleOpen(false);
    } else {
      setIsSearchToggleOpen(false);
    }
  };
  const membersToggleHandler = () => {
    if (!isMembersToggleOpen) {
      setIsMembersToggleOpen(true);
      setIsSearchToggleOpen(false);
    } else {
      setIsMembersToggleOpen(false);
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
              {!city && <Text>어디로 여행가세요?</Text>}
              {city && <Text2>{city}</Text2>}
            </SearchInner>
            {isSearchToggleOpen && (
              <SearchToggle setCity={setCity} close={searchToggleHandler} />
            )}
          </div>
          <SearchInner
            onClick={onClickCheckIn}
            bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
            hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
          >
            <SearchKeyword>체크인</SearchKeyword>
            {isCheckIn && <Text>날짜 선택</Text>}
            {!isCheckIn && (
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="MM월 dd일"
                minDate={new Date()}
                customInput={<ExampleCustomInput />}
              />
            )}
          </SearchInner>
          <SearchInner
            onClick={onClickCheckOut}
            bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
            hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
          >
            <SearchKeyword>체크아웃</SearchKeyword>
            {isCheckOut && <Text>날짜 선택</Text>}
            {!isCheckOut && (
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                minDate={new Date()}
                dateFormat="MM월 dd일"
                customInput={<ExampleCustomInput />}
              />
            )}
          </SearchInner>
          <div>
            <SearchInner
              onClick={membersToggleHandler}
              bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
              hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
            >
              <SearchKeyword>인원</SearchKeyword>
              {count === 0 && <Text>게스트 추가</Text>}
              {count > 0 && <Text2>{count} 명</Text2>}
            </SearchInner>
            {isMembersToggleOpen && (
              <MembersToggle
                count={count}
                setCount={setCount}
                setHaveAnimal={setHaveAnimal}
                close={membersToggleHandler}
              />
            )}
          </div>
          <SearchBtns>
            <BiSearch font-size={20} />
            <SearchKeyword2 onClick={goToList}>검색</SearchKeyword2>
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
  /* padding-bottom: 20px; */
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
  padding: 10px 50px 15px 40px;
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

const Text2 = styled.div`
  padding-top: 5px;
  padding-right: 80px;
  font-size: 0.9rem;
`;
const SearchKeyword = styled.div`
  padding: 5px 0 5px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const SearchKeyword2 = styled.div`
  padding-left: 5px;
  font-size: 1rem;
`;

const DateInput = styled.div`
  padding-right: 30px;
  font-size: 14px;
  font-weight: 500;
`;

export default SearchBar;
