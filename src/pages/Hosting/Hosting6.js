import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePicture } from 'react-icons/ai';

export default function Hosting6({ onChange, resultChoice }) {
  return (
    <Wrapper>
      <Container>
        <Text1>
          이제 숙소 사진을 올릴
          <br />
          차례입니다.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <Line>
            <PictureIcon>
              <AiOutlinePicture />
            </PictureIcon>
            <Text2>여기로 사진을 끌어다 놓으세요.</Text2>
            <Text3>5장 이상의 사진을 올리세요.</Text3>
            <Text4>기기에서 업로드</Text4>
          </Line>
        </Body>
        <Footer />
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
  margin-left: 55px;
`;

const Container2 = styled.section`
  width: 50%;
  /* border: 5px solid green; */
  height: 80vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 999;
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
  width: 100%;
  margin: auto;
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
const Line = styled.div`
  /* border: 1px dashed rgb(176, 176, 176) !important; */
  outline: 1px dashed rgb(176, 176, 176) !important;
  /* outline: 1px dashed black; */
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 350px 150px 0 150px; */
  padding: 12vw 5vw 1vw 5vw;
  margin: auto auto 7vw auto;
`;

const PictureIcon = styled.div`
  font-size: 5vw;
`;

const Text2 = styled.div`
  font-size: 1.7vw;
  font-weight: bold;
`;

const Text3 = styled.div`
  font-size: 1.5vw;
  margin: 12px;
`;

const Text4 = styled.div`
  font-size: 1vw;
  font-weight: bold;
  margin-top: 7vw;
  margin-bottom: 3vw;
  text-decoration: underline;
  cursor: pointer;
`;
