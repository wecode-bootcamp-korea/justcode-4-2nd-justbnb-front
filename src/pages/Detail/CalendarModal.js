import { React, useState } from 'react';
import styled from 'styled-components';

import DatePickerRangeController from 'react-datepicker';

function CalendarModal(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Wrapper style={{ display: props.open ? 'block' : 'none' }}>
      <Header>
        <Text>
          <h2>날짜 선택</h2>
          <span>여행 날짜를 입력하여 정확한 요금을 확인하세요.</span>
        </Text>
        <InputWrapper>
          <CheckIn>
            <div>체크인</div>
            <Input placeholder="날짜 추가" value={startDate} />
          </CheckIn>
          <CheckOut>
            <div>체크아웃</div>
            <Input placeholder="날짜 추가" value={endDate} />
          </CheckOut>
        </InputWrapper>
      </Header>
      <Calender>
        <DatePickerRangeController
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy/MM/dd"
          monthsShown={2}
          selectsRange
          inline
        />
      </Calender>
      <ButtonWrapper>
        <Delete
          onClick={() => {
            setStartDate(null);
            setEndDate(null);
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

const Calender = styled.div`
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
