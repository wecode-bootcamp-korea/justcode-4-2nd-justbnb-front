import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Hosting7({ onChange, resultChoice }) {
  const [textlength, setTextLength] = useState(0);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>숙소 이름을 만들어주세요.</Text1>
      </Container>

      <Container2>
        <Header>
          <HeaderButton className="help">도움말</HeaderButton>
          <HeaderButton>나가기</HeaderButton>
        </Header>
        <Body>
          <TextAndInput>
            <Text2>숙소 이름 정하기</Text2>
            <Input
              id="8"
              onKeyUp={e => setTextLength(e.target.value.length)}
              maxLength={49}
              placeholder="숙소 이름을 적어주세요."
              onChange={onChange}
            />
            <TextLength>{textlength} / 50</TextLength>
          </TextAndInput>
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

const Footer = styled.section`
  padding: 15px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
`;

const TextAndInput = styled.div`
  /* width: fit-content;
  height: fit-content; */
  display: flex;
  flex-direction: column;
`;

const Text2 = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  margin: auto auto auto 0;
`;

const Input = styled.textarea`
  display: flex;
  margin: 1vw 0;
  padding: 1.5vw;
  font-size: 1.1vw;
  min-width: 30vw;
  max-width: 30vw;
  height: 20vh;
  max-height: 50vh;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  /* font-weight: bold; */
`;

const TextLength = styled.div`
  font-size: 1vw;
`;
