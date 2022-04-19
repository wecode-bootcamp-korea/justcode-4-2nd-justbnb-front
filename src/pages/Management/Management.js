import { useState, useEffect } from 'react';
import style from 'styled-components';

function Management() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/hwseol/list.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

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
  margin : 10px 0 30px 0;
  `;

  const Button = style.div`
  border-radius : 50px;
  border : 1px solid rgba(0,0,0,0.4);
  margin-right : 10px;
  padding : 15px;
  `;

  const Accommodation = style.div`
  height: content-fit;
  background-color : rgba(0,0,0,0.05);
  display : flex;
  justify-content : space-between;
  border-radius : 30px;
  padding : 30px;
  `;

  const ManagementFooter = style.div`
  background-color : black;
  margin-top: 100px;
  padding-bottom : 0px;

  `;

  const Text = style.div`
  color : white;
  font-size : 30px;
  font-weight : bold;
  margin-left : 3.7em;
  padding : 60px 0 20px 0;
  `;

  const Tips = style.div`
  display : flex;
  justify-content : space-between;
  margin : 0 7em;
  padding : 20px 0px 60px 0px;
  `;

  const Card = style.div`
  display : flex;
  flex-direction : column;
  border-radius : 20px;
  overflow : hidden;
  `;

  const CardDescription = style.div`
  color : white;
  padding: 30px 0px 50px 10px;
  background-color : rgba(100, 100, 100, 0.6);
  font-size : 20px;`;

  const Img = style.img`
  width : 340px;
  height : auto;
  
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
        <Accommodation>
          <Card>
            <Img src={data[5].image} />
            <CardDescription>{data[5].name}</CardDescription>
          </Card>
          <Card>
            <Img src={data[5].image} />
            <CardDescription>{data[5].name}</CardDescription>
          </Card>
          <Card>
            <Img src={data[5].image} />
            <CardDescription>{data[5].name}</CardDescription>
          </Card>
        </Accommodation>
      </GuestCardWide>
      <ManagementFooter>
        <Text>호스팅 관련 팁과 업데이트</Text>
        <Tips>
          <Card>
            <Img src={data[1].image} />
            <CardDescription>{data[1].name}</CardDescription>
          </Card>
          <Card>
            <Img src={data[2].image} />
            <CardDescription>{data[2].name}</CardDescription>
          </Card>
          <Card>
            <Img src={data[3].image} />
            <CardDescription>{data[3].name}</CardDescription>
          </Card>
          <Card>
            <Img src={data[5].image} />
            <CardDescription>{data[5].name}</CardDescription>
          </Card>
        </Tips>
      </ManagementFooter>
    </div>
  );
}

export default Management;
