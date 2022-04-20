import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Management() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch('/data/hwseol/list.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/dlwjdals/management.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setData2(data);
      });
  }, []);

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
          {/* 여기서부터 슬라이드 */}
          {data2.map((el, index) => {
            if (index <= 30) {
              return (
                <Card2 key={el.id}>
                  <Img2 src={el.imageUrl} alt="test" />
                  <CardDescription2>Guest : {el.guest}</CardDescription2>
                  <CardDescription2>
                    총 인원 : {el.total_members} 명
                  </CardDescription2>
                  <CardDescription2>Check-In : {el.check_in}</CardDescription2>
                  <CardDescription2>
                    Check-Out : {el.check_out}
                  </CardDescription2>
                  <CardDescription2>
                    숙소 이름 : {el.accommodations_name}
                  </CardDescription2>
                </Card2>
              );
            }
          })}
          {/* 여기까지 슬라이드 */}
        </Accommodation>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </GuestCardWide>

      <ManagementFooter>
        <TextAndTips>
          <Text>호스팅 관련 팁과 업데이트</Text>
          <Tips>
            {data.map((el, index) => {
              if (index <= 3) {
                return (
                  <Card key={el.id}>
                    <Img src={el.image} alt="test" />
                    <CardDescription>{el.name}</CardDescription>
                  </Card>
                );
              }
            })}
          </Tips>
        </TextAndTips>
      </ManagementFooter>
    </div>
  );
}

export default Management;

const Banner = styled.div`
  height: 10em;
  margin: 1em 0 2em 0;
  background: rgb(27, 0, 209);
  background: linear-gradient(
    90deg,
    rgba(27, 0, 209, 1) 0%,
    rgba(255, 0, 168, 1) 100%
  );
`;

const GuestCardWide = styled.div`
  margin: 0 7em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid red;
  /* max-width: 100%; */
`;

const BookingText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const AllBooking = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: right;
  text-decoration: underline;
`;

const ManageButtons = styled.div`
  display: flex;
  /* flex-flow = wrap; */
  margin: 10px 0 30px 0;
`;

const Button = styled.div`
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin-right: 10px;
  padding: 15px;
`;
const ManagementFooter = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column;
  align-items: center; */
  background-color: black;
  margin-top: 100px;
  padding-bottom: 0px;
`;

const TextAndTips = styled.div`
  display: flex;
  margin: 0 7em;
  justify-content: flex-start;
  flex-direction: column;
  /* align-items: center; */
  /* width: 50%; */
  /* border: 1px solid red; */
`;

const Text = styled.div`
  color: white;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin-left: 3.7em;
  padding: 60px 0 20px 0;
  /* border: 1px solid red; */
`;

const Tips = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin: 0 7em;
  padding: 20px 0px 60px 0px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin: 0 10px;
  overflow: hidden;
`;

const CardDescription = styled.div`
  color: white;
  padding: 30px 0px 50px 10px;
  background-color: rgba(100, 100, 100, 0.6);
  font-size: 20px;
`;

const Img = styled.img`
  min-width: 340px;
  height: 17em;
  /* min-height: 17em; */
`;
//-----------------------------------------------------------------------
const Accommodation = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  display: flex;
  justify-content: space-between;
  /*align-items: center; */
  /* justify-content: space-around; */
  /* flex-direction: row; */
  /* display: grid;
  grid-template-columns: repeat(800, 1fr);
  flex-wrap: nowrap; */
  padding: 30px;
  overflow: hidden;
`;

const Card2 = styled.div`
  min-width: 300px;
  border-radius: 20px;
  margin: 0 2%;
  overflow: hidden;
  background-color: rgba(100, 100, 100, 1);
  padding-bottom: 10px;

  /* border : 1px solid red; */
`;

const CardDescription2 = styled.div`
  color: white;
  padding: 8px 0px 5px 10px;
  background-color: rgba(100, 100, 100, 1);
  font-size: 15px;
`;

const Img2 = styled.img`
  min-width: 340px;
  height: 16em;
  /* min-height : 16em; */
`;
