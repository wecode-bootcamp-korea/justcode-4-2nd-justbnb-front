import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PageNav from '../../components/Nav/PageNav';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

function Management() {
  const [mockData, setMockData] = useState([]);
  const [data, setData] = useState([]);
  const [leftEndPoint, setLeftEndPoint] = useState('none'); // 왼쪽 버튼 활성화, 비활성화
  const [rightEndPoint, setRightEndPoint] = useState('auto'); // 오른쪽 버튼 활성화, 비활성화
  const [leftOpacity, setLeftOpacity] = useState('0.3'); // 왼쪽 버튼 투명도
  const [rightOpacity, setRightOpacity] = useState('1'); // 오른쪽 버튼 투명도

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const reservationList = data.reservationList;

  const TOTAL_CARD = data.length - 1;

  // left 버튼 클릭 시
  const LeftSlide = () => {
    // 첫 번째 슬라이드보다 하나 전에 버튼을 비활성화하기 위함.
    if (currentSlide === 1) {
      setLeftEndPoint('none');
      setRightEndPoint('auto');
      setLeftOpacity('0.3');
      setRightOpacity('1');
    }
    if (currentSlide === 0) {
      return;
    } else {
      setRightEndPoint('auto');
      setRightOpacity('1');
      setCurrentSlide(currentSlide - 1);
    }
    return;
  };

  // right 버튼 클릭 시
  const RightSlide = () => {
    // 마지막 슬라이드보다 하나 전에 버튼을 비활성화하기 위함.
    if (currentSlide >= TOTAL_CARD - 1) {
      setLeftEndPoint('auto');
      setRightEndPoint('none');
      setLeftOpacity('1');
      setRightOpacity('0.3');
    }
    if (currentSlide >= TOTAL_CARD) {
      return;
    } else {
      setLeftEndPoint('auto');
      setLeftOpacity('1');
      setCurrentSlide(currentSlide + 1);
    }
    return;
  };

  useEffect(() => {
    fetch('/data/jiho/hostingUpdate.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMockData(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/reservation/host ', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accessToken: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) setData(data.reservationList);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(calc(${
      (-150 / data.length) * currentSlide
    }%))`;
  }, [currentSlide]);

  const ButtonLeft = styled.button`
    pointer-events: ${leftEndPoint};
    opacity: ${leftOpacity};
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: auto;
    margin-right: 20px;
    padding: 15px;
    border-radius: 100px;
    border: 1px solid black;
    background-color: #ffffff;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      cursor: pointer;
    }
  `;

  const ButtonRight = styled.button`
    pointer-events: ${rightEndPoint};
    opacity: ${rightOpacity};
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: auto;
    margin-left: 20px;
    padding: 15px;
    border-radius: 100px;
    border: 1px solid black;
    background-color: #ffffff;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      cursor: pointer;
    }
  `;

  const onClickBtn = () => {
    navigate('/layout');
  };

  return (
    <>
      <PageNav />
      <Banner>
        <Wrap>
          <Text2>투데이</Text2>
          <Btn onClick={onClickBtn}>숙소 등록하기 </Btn>
        </Wrap>
        <Desc>숙소를 등록해보세요! </Desc>
      </Banner>
      <Body>
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
            <Wrapper>
              <Slide ref={slideRef}>
                {/* 여기서부터 슬라이드 */}
                {data.map(el => {
                  return (
                    <Card2 key={el.id}>
                      <Name>{el.user_name} 님</Name>
                      <CardDescription2>
                        <Tittle>총 인원 :</Tittle> {el.members} 명
                      </CardDescription2>
                      <CardDescription2>
                        <Tittle>Check-In :</Tittle> {el.check_in}
                      </CardDescription2>
                      <CardDescription2>
                        <Tittle>Check-Out :</Tittle>
                        {el.check_out}
                      </CardDescription2>
                      <CardDescription2>
                        <Tittle>숙소 이름 :</Tittle> {el.name}
                      </CardDescription2>
                    </Card2>
                  );
                })}
                {/* 여기까지 슬라이드 */}
              </Slide>
            </Wrapper>
          </Accommodation>
          <Buttons>
            <ButtonLeft onClick={LeftSlide}>&lt;</ButtonLeft>
            <ButtonRight onClick={RightSlide}>&gt;</ButtonRight>
          </Buttons>
        </GuestCardWide>
      </Body>
      <ManagementFooter>
        <TextAndTips>
          <Text>호스팅 관련 팁과 업데이트</Text>
          <Tips>
            {mockData.map(el => {
              return (
                <Card key={el.id}>
                  <Img src={el.imgUrl} alt="test" />
                  <CardDescription>{el.desc}</CardDescription>
                </Card>
              );
            })}
          </Tips>
        </TextAndTips>
      </ManagementFooter>
      <Footer />
    </>
  );
}

export default Management;

const Body = styled.div`
  padding: 120px 80px 80px 80px;
`;

const Banner = styled.div`
  padding: 7rem;
  background: rgb(27, 0, 209);
  background: linear-gradient(
    90deg,
    rgba(27, 0, 209, 1) 0%,
    rgba(255, 0, 168, 1) 100%
  );
`;

const GuestCardWide = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100em;
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
  margin-top: 100px;
  background-color: black;
`;

const TextAndTips = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  color: white;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 60px 0 20px 120px;
`;

const Tips = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 7em;
  padding: 20px 0px 60px 0px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const CardDescription = styled.div`
  color: white;
  padding: 30px 0px 50px 10px;
  background-color: rgb(34, 34, 34);
  border-radius: 0 0 10px 10px;
  font-size: 16px;
  font-weight: 400;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`;

const Accommodation = styled.div`
  position: relative;
  background-color: #f7f7f7;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 30px 17px;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  display: flex;
`;

const Card2 = styled.div`
  width: 20rem;
  margin: 0 2.8%;
  padding: 20px 30px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
`;

const Tittle = styled.div`
  padding-right: 30px;
  font-weight: 600;
`;

const Name = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 25px;
  font-size: 1.2rem;
  font-weight: 600;
`;
const CardDescription2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 8px 0px 5px 10px;
  font-size: 0.9rem;
  font-weight: 400;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 30px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 150px;
`;
const Text2 = styled.div`
  color: #ffffff;
  font-size: 2.2em;
`;
const Btn = styled.button`
  padding: 10px 20px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Desc = styled.div`
  padding-left: 150px;
  color: #ffffff;
`;
