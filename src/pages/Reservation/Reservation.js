import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageNav from '../../components/Nav/PageNav';
import Footer from '../../components/Footer';
import styled from 'styled-components';

function Reservation() {
  const [data2, setData2] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const goToMain = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch('http://localhost:8000/reservation/guest', {
      // fetch('/data/dlwjdals/reservation.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accessToken: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        if (data.status === 200) setData2(data.reservation);
      });
  }, []);
  return (
    <>
      <PageNav />
      <Banner>
        <Desc>예약 내역을 확인해보세요! </Desc>
      </Banner>
      <Body>
        <Travel>여행</Travel>
        <Line />
        {/* 여기서부터 예약된 여행 있는 경우 */}
        <ReservationList>
          {data2.map((el, index) => {
            return (
              <Card2 key={el.id}>
                <Img2 src={el.image_url[0]} alt="img" />
                <TextWrapper>
                  <Text>
                    <div>예약자 이름 :</div>
                    <div>{el.user_name}</div>
                  </Text>
                  <Text>
                    <div>Check-In :</div>
                    <div>{el.check_in}</div>
                  </Text>
                  <Text>
                    <div>Check-Out :</div>
                    <div>{el.check_out}</div>
                  </Text>

                  <Text>
                    <div>총 인원 :</div>
                    <div>{el.members}명</div>
                  </Text>
                  <Text>
                    <div>총 가격 :</div>
                    <div>{el.total_charge}원</div>
                  </Text>
                  <TextName>
                    <div>숙소 이름 :</div>
                    <div>{el.name}</div>
                  </TextName>
                </TextWrapper>
              </Card2>
            );
          })}
        </ReservationList>
        {/* 여기까지 예약된 여행 있는 경우 */}
        {/* 여기서부터 예약된 여행 없는 경우 */}
        {/* <NoReservation>
          <Text1>아직 예약된 여행이 없습니다!</Text1>
          <Text2>
            여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
          </Text2>
          <Text3 onClick={goToMain}>숙소 검색하기</Text3>
        </NoReservation> */}
        {/* 여기까지 예약된 여행 없는 경우 */}
        <Line />
        <Text4>예약 내역을 찾으실 수 없나요?&nbsp;</Text4>
        <Text5>도움말 센터 방문하기</Text5>
      </Body>
      <Footer />
    </>
  );
}

export default Reservation;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  padding-top: 100px;

  /* background: rgb(27, 0, 209); */
  background: linear-gradient(
    90deg,
    rgba(27, 0, 209, 1) 0%,
    rgba(255, 0, 168, 1) 100%
  );
`;

const Desc = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  color: #ffffff;
  padding-left: 80px;
`;

const Travel = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin: 40px 0;
`;

const Body = styled.div`
  padding: 120px 80px 80px 80px;
`;

const ReservationList = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Text3 = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  width: fit-content;
  padding: 20px 30px;
  margin: 10px 0 70px 0px;
`;

const Text4 = styled.span`
  font-size: 15px;
`;

const Text5 = styled.span`
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
`;

const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 400px;

  border-radius: 20px;
  margin: 0 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.15);
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 45%;
  padding: 20px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  div:first-child {
    display: flex;
    align-items: flex-start;
    /* width: 30%; */
    height: 100%;
    white-space: nowrap;
    font-weight: 600;
    margin-right: 10px;
    margin-bottom: 6px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
  }
  div:last-child {
    /* width: 60%; */
    height: 100%;
    text-align: left;
    font-size: 14px;
  }
`;

const TextName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  div:first-child {
    display: flex;
    align-items: flex-start;
    /* width: 30%; */
    height: 100%;
    white-space: nowrap;
    font-weight: 600;
    margin-right: 10px;
    margin-bottom: 6px;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
  }
  div:last-child {
    height: 100%;
    text-align: left;
    font-size: 14px;
  }
`;
const CardDescription2 = styled.div`
  color: white;
  padding: 8px 0px 5px 10px;
  background-color: rgba(100, 100, 100, 1);
  font-size: 19px;
`;

const Img2 = styled.img`
  object-fit: cover;
  width: 100%;
  height: 55%;
`;
