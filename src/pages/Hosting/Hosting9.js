import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CounterValue3 from './Component/Counter3';

export default function Hosting9({ onChange, resultChoice }) {
  const test = () => {
    const formData = new FormData();
    //const fileField = document.querySelector('input[type="file"]');
    //formData.append('image', fileField.files[0]);
    // fetch('http://localhost:8000/aws-s3', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log('성공:', result);
    //     //result + 숙소 정보 -> fetch() -> 백엔드
    //   });
  };

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          이제 요금을 설정하실 <br />
          차례입니다
        </Text1>
      </Container>

      <Container2>
        <Header>
          <HeaderButton className="help">도움말</HeaderButton>
          <HeaderButton>나가기</HeaderButton>
        </Header>
        <Body>
          <CounterValue3 onChange={onChange} />
          <Text2>/박</Text2>
        </Body>
        {/* <Comfirm onClick={() => test()}>확인</Comfirm> */}
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
const Text2 = styled.div`
  margin-top: 15px;
  font-size: 16px;
`;

const Comfirm = styled.button`
  font-size: 10px;
`;
