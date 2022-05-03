import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';
import CityCard from './CityCard';

function Main() {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  const sliderRef = useRef();

  const goToList = city => {
    navigate(`/list/${city}`, {
      state: {
        city: city,
      },
    });
    window.scrollTo(0, 0);
  };

  const goToHosting = () => {
    navigate(`/layout`);
  };

  useEffect(() => {
    fetch('/data/jiho/cities.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setCities(result);
      });
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <MainBanner>
          <PinkBox>
            <Text color="#ffffff">
              10만 명에 달하는 우크라이나 피란민에게 임시숙소를 제공해주세요
            </Text>
            <div>
              <Btn>자세히 알아보기</Btn>
            </div>
          </PinkBox>
        </MainBanner>
      </Container>

      <div>
        <PictureBox>
          <Text color="#ffffff">호기심을 자극하는 숙소로 떠나보세요</Text>
          <Button>
            <Text2>유연한 검색</Text2>
          </Button>
        </PictureBox>
        <CityContainer>
          <Text color="black">설레이는 다음 여행을 위한 아이디어</Text>
          <SlideCard ref={sliderRef}>
            {cities.map(list => (
              <Wrapper
                key={list.id}
                onClick={() => {
                  goToList(list.name);
                }}
              >
                <CityCard key={list.id} list={list} />
              </Wrapper>
            ))}
          </SlideCard>
        </CityContainer>
      </div>
      <HostingBanner>
        <Box>
          <Text color="#ffffff"> 호스팅에 관해 궁금하신 점이 있나요?</Text>
        </Box>
        <div>
          <Button2 onClick={goToHosting}>슈퍼호스트에게 물어보세요</Button2>
        </div>
      </HostingBanner>
      <Footer />
    </>
  );
}

const Container = styled.div`
  padding-top: 235px;
  background-color: black;
`;

const MainBanner = styled.div`
  position: relative;
  margin: 10px 10vw;
  padding: 80px 0 400px 0px;
  background-color: black;

  @media screen and (max-width: 1127px) {
    margin: 10px 1vw;
  }
`;

const PinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  border-radius: 10px;
  background-color: #ff385c;
  @media screen and (max-width: 1127px) {
    padding: 300px 0;
  }
`;

const Text = styled.div`
  padding-bottom: 30px;
  font-size: 2rem;
  font-weight: 500;
  color: ${props => props.color};
`;

const Btn = styled.button`
  padding: 10px 16px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  background: #ff385c;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Button = styled.div`
  padding: 15px 25px;
  border: none;
  border-radius: 30px;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
const Text2 = styled.div`
  font-weight: 700;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
  -webkit-background-clip: text;
`;

const PictureBox = styled.div`
  position: absolute;
  top: 750px;
  left: 10vw;
  right: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 240px 200px;
  border-radius: 10px;
  background-image: url('https://ifh.cc/g/qZM3wa.jpg');
  background-size: cover;

  @media screen and (max-width: 1127px) {
    position: absolute;
    top: 1050px;
    left: 1vw;
    right: 1vw;
    padding: 300px 0;
  }
`;

const CityContainer = styled.div`
  padding: 500px 50px 300px 50px;
`;

const SlideCard = styled.div`
  @media screen and (min-width: 1127px) {
    display: flex;
  }
  @media screen and (max-width: 1127px) {
  }
  position: relative;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 35%;
`;

const HostingBanner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-image: url('https://ifh.cc/g/B2bWvW.jpg');
  background-size: cover;
`;

const Box = styled.div`
  padding-bottom: 500px;
  width: 300px;
`;

const Button2 = styled.button`
  padding: 15px 20px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    box-shadow: 4px 5px 5px gray;
  }
`;

export default Main;
