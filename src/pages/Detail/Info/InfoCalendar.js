import { React, useEffect, useState } from 'react';
import styled from 'styled-components';

//DatePicker
import DatePickerRangeController from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function InfoCalender(props) {
  const { start, end, change, deleteDate, dateDiff, district, selected } =
    props;
  const [checkInDate, setCheckInDate] = useState(0);

  useEffect(() => {
    setCheckInDate(dateDiff);
  }, [dateDiff]);

  return (
    <Wrapper>
      <h2>
        {end
          ? `${district}에서의 ${checkInDate}박`
          : '체크인 날짜를 선택해주세요'}
      </h2>
      <span>
        {start && end
          ? `${start.getFullYear()}년 ${
              start.getMonth() + 1
            }월 ${start.getDate()}일 ~ ${end.getFullYear()}년 ${
              end.getMonth() + 1
            }월 ${end.getDate()}일`
          : '여행 날짜를 입력하여 정확한 요금을 확인하세요.'}
      </span>
      <CalendarBox>
        {/* <Calendar/> */}
        <DatePickerRangeController
          selected={selected}
          onChange={change}
          startDate={start}
          endDate={end}
          monthsShown={2}
          minDate={new Date()}
          selectsRange
          inline
        />
      </CalendarBox>
      <ButtonWrapper>
        <Button
          type="button"
          onClick={() => {
            deleteDate();
          }}
        >
          날짜 지우기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 50px 0;
  width: 100%;
  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  span {
    display: block;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }
`;

const CalendarBox = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

export default InfoCalender;
