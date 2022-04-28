import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CounterValue from './Component/Counter';
import CounterValue2 from './Component/Counter2';

export default function Hosting4({ onChange, resultChoice }) {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          숙소에서 맞이할 최대
          <br />
          인원수를 알려주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <HeaderButton className="help-button">도움말</HeaderButton>
          <Link to="/">
            <HeaderButton className="exit-button">나가기</HeaderButton>
          </Link>
        </Header>
        <Body>
          <CountWrapper>
            <Text2>게스트</Text2>
            <CounterValue onChange={onChange} />
          </CountWrapper>
          <CountWrapper>
            <Text2>반려동물</Text2>
            <CounterValue2 onChange={onChange} />
          </CountWrapper>
        </Body>
      </Container2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: rgb(217, 18, 100);
  background: linear-gradient(
    180deg,
    rgba(217, 18, 100, 0.9598214285714286) 0%,
    rgba(165, 4, 166, 1) 52%,
    rgba(55, 8, 159, 1) 100%
  );
  line-height: 3.5em;
  img {
    width: 80px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 40px;
  }
`;

const Text1 = styled.div`
  width: 85%;
  color: white;
  font-weight: 530;
  font-size: 48.5px;
`;

const Container2 = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  padding: 30px 40px;
  .help {
    margin-right: 15px;
    opacity: 0.3;
  }
`;

const HeaderButton = styled.button`
  padding: 7px 15px;
  background-color: rgba(155, 149, 167, 0.1);
  border: 1px solid rgba(155, 149, 167, 0);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CountWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 25px;
`;

const Text2 = styled.div`
  font-size: 27px;
  font-weight: 500;
`;
