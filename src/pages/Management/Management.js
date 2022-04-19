import { useState, useEffect } from 'react';
import style from 'styled-components';

function Management() {
  const Banner = style.div`
  height : 10em;
  margin : 1em 0 2em 0;
  background-color : rgba(255,0,255,1);
  `;

  const GuestCardWide = style.div`
  margin : 0 7em;
  `;

  const BookingText = style.div`
  font-size : 30px;
  font-weight : bold;
  
  `;

  const AllBooking = style.div`
  font-size : 15px;
  font-weight : bold;
  text-align : right;
  text-decoration: underline;
  `;

  const ManageButtons = style.div`
  display : flex;
  flex-flow = wrap;
  margin : 50px 0 30px 0;
  `;

  const Button = style.div`
  border-radius : 50px;
  border : 1px solid rgba(0,0,0,0.4);
  margin-right : 10px;
  padding : 15px;
  `;

  const Accommodation = style.div`
  height: 250px;
  background-color : rgba(0,0,0,0.05);
  border-radius : 13px;
  `;

  const ManagementFooter = style.div`
  background-color : black;
  `;

  return (
    <div>
      <Banner>&nbsp;</Banner>
      <GuestCardWide>
        <BookingText>예약</BookingText>
        <AllBooking>모든 예약(0건)</AllBooking>
        <ManageButtons>
          <Button>현재 호스팅 중(0건)</Button>
          <Button>체크인 예정(0건)</Button>
          <Button>체크아웃 예정(0건)</Button>
          <Button>예정(0건)</Button>
        </ManageButtons>
        <Accommodation>&nbsp;</Accommodation>
      </GuestCardWide>
      <ManagementFooter>
        
      </ManagementFooter>
    </div>
  );
}

export default Management;
