import React from 'react';
import styled from 'styled-components';
import CounterValue3 from './Component/Counter3';

export default function Hosting9() {
  return (
    <Wrapper>
      <Container>
        <Text1>이제 요금을 설정하실 차례입니다</Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <PriceBox>
            <CounterValue3 />
          </PriceBox>
          <Text2>/박</Text2>
        </Body>
        <Footer>
          <p>뒤로</p>
          <button className="next-button">다음</button>
        </Footer>
      </Container2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.section`
  width: 50%;
  min-height: 100vh;
  background: rgb(217, 18, 100);
  background: linear-gradient(
    180deg,
    rgba(217, 18, 100, 0.9598214285714286) 0%,
    rgba(165, 4, 166, 1) 52%,
    rgba(55, 8, 159, 1) 100%
  );
  display: flex;
  align-items: center;
  line-height: 3.5em;
`;

const Text1 = styled.div`
  color: white;
  font-weight: 530;
  font-size: 48.5px;
  margin-left: 20px;
`;

const Container2 = styled.section`
  width: 50%;
  min-height: 100vh;
  position: relative;
  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Header = styled.section`
  /* position: absolute;
  top: 0; */
  /* border: 1px solid red; */
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  .help-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 20px;
    margin-right: 15px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: rgba(155, 149, 167, 0.1);
  }
  .exit-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 20px;
    border-radius: 20px;
    margin-right: 30px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: rgba(155, 149, 167, 0.1);
  }
`;

const Body = styled.section`
  /* height: 80%; */
  width: 100%;
  /* border: 1px solid blue; */
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// const CounterWrapper = styled.section`
//   border: 1px solid black;
// `;

const PriceBox = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  /* padding: 32px; */
  width: 65%;
  padding: 30px;
`;

const Text2 = styled.div`
  margin-top: 15px;
  font-size: 16px;
`;

// const Button = styled.button`
//   background-color: white;
//   border-radius: 10px;
//   border: 1px solid rgba(155, 149, 167, 0.44);
//   font-size: 18px;
//   font-weight: 500;
//   text-align: left;
//   padding: 32px;
//   width: 65%;
//   margin: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   .img-wrapper {
//     height: 100%;
//     width: 20px;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

const Footer = styled.section`
  padding: 15px;
  width: 100%;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-top: 2px solid rgba(155, 149, 167, 0.2);
  p {
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    margin-left: 30px;
  }
  .next-button {
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 13px 23px;
    margin-right: 30px;
    border-radius: 8px;
    border: 1px solid rgba(155, 149, 167, 0.1);
    background-color: black;
  }
`;