import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import DatePickerRangeController from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Calendar from '../../../components/Calendar/Calendar';

function CalendarModal(props) {
  const {
    start,
    end,
    change,
    deleteDate,
    dateDiff,
    dateDeleted,
    setCalendarModalOpen,
  } = props;
  const [checkInValue, setCheckInValue] = useState('');
  const [checkOutValue, setCheckOutValue] = useState('');
  const [checkInDate, setCheckInDate] = useState(0);

  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setCalendarModalOpen(false);
    } else {
      setCalendarModalOpen(true);
    }
  };

  useEffect(() => {
    setCheckInDate(dateDiff);
  }, [dateDiff]);

  useEffect(() => {
    // setCheckInValue(start);
    // startDate가 null일 경우 렌더링이 되지 않는 오류 발생
    if (start) {
      let newStartDate = `${start.getFullYear()}.${
        start.getMonth() + 1
      }.${start.getDate()}`;
      setCheckInValue(newStartDate);
    }
    // setCheckOutValue('');
  }, [start]);

  useEffect(() => {
    // setCheckOutValue(end);
    // startDate가 null일 경우 렌더링이 되지 않는 오류 발생
    if (end) {
      let newEndDate = `${end.getFullYear()}.${
        end.getMonth() + 1
      }.${end.getDate()}`;
      setCheckOutValue(newEndDate);
    }
  }, [end]);

  return (
    <Wrapper
      ref={wrapperRef}
      style={{ display: props.open ? 'block' : 'none' }}
    >
      <Header>
        <Text>
          {/* <h2>날짜 선택</h2> */}
          <h2>{end ? `${checkInDate}박` : '날짜 선택'}</h2>
          <span>
            {end
              ? `${start.getFullYear()}년 ${
                  start.getMonth() + 1
                }월 ${start.getDate()}일 ~ ${end.getFullYear()}년 ${
                  end.getMonth() + 1
                }월 ${end.getDate()}일`
              : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
          </span>
        </Text>
        <InputWrapper>
          <CheckIn>
            <div>체크인</div>
            <Input
              placeholder="날짜 추가"
              defaultValue={!dateDeleted ? '' : checkInValue}
            />
          </CheckIn>
          <CheckOut>
            <div>체크아웃</div>
            <Input
              placeholder="날짜 추가"
              defaultValue={!dateDeleted ? '' : checkOutValue}
            />
          </CheckOut>
        </InputWrapper>
      </Header>
      <CalenderWrapper>
        {/* <Calendar /> */}
        <DatePickerRangeController
          selected={start}
          onChange={change}
          startDate={start}
          endDate={end}
          monthsShown={2}
          minDate={new Date()}
          selectsRange
          inline
        />
      </CalenderWrapper>
      <ButtonWrapper>
        <Delete
          onClick={() => {
            deleteDate();
          }}
        >
          날짜 지우기
        </Delete>
        <Close
          onClick={() => {
            props.close();
          }}
        >
          닫기{' '}
        </Close>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: absolute;
  right: 0;
  padding: 20px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.div`
  width: 60%;
  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
`;

const CheckIn = styled.div`
  margin-right: 5px;
  border-right: 1px solid black;

  div {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const CheckOut = styled.div`
  div {
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const CalenderWrapper = styled.div`
  width: 530px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Delete = styled.button`
  margin-right: 10px;
  border: none;
  background-color: transparent;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;
const Close = styled.button`
  padding: 8px 15px;
  background-color: black;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

export default CalendarModal;
