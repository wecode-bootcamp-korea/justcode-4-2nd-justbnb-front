import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const Say = () => {
//   const [message, setMessage] = useState('');

//   const onClickEnter = () => setMessage('Enter');
//   const onClickLeave = () => setMessage('Leave');

//   const handleClick = (event) => {
//     const getStyleAttr = event.target.getAttribute("style");
//     const message = document.getElementById("message");
// };

// const loginModalHandler = display => {
//   !isLoginModalOpen ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
//   setOpenToggle({ display: display });
// };

// function switchState() {
//   swithChange(!switchOn);
// }

export default function Hosting({ onChange, resultChoice }) {
  // const [isClicked, setIsClicked] = useState();

  // const clikcedHandler = () => {
  //   !isClicked ? setIsClikced(true) : setIsClicked(false);
  // };
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          호스팅할 숙소 유형을
          <br />
          알려주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <HeaderButton className="help">도움말</HeaderButton>
          <Link to="/">
            <HeaderButton>나가기</HeaderButton>
          </Link>
        </Header>
        <Body>
          <Button
            id="1"
            onClick={e => {
              onChange(e);
            }}
            value="아파트"
            style={{
              backgroundColor:
                resultChoice['1'] === '아파트'
                  ? 'rgba(155, 149, 167, 0.2)'
                  : 'white',
            }}
          >
            <div className="but-name">아파트</div>
            <div className="img-wrapper">
              <img src="/images/thump/home10.jpg" />
            </div>
          </Button>
          <Button
            id="1"
            onClick={e => {
              onChange(e);
            }}
            style={{
              backgroundColor:
                resultChoice['1'] === '주택'
                  ? 'rgba(155, 149, 167, 0.2)'
                  : 'white',
            }}
            value="주택"
          >
            <div className="but-name">주택</div>
            <div className="img-wrapper">
              <img src="/images/thump/home3.jpg" />
            </div>
          </Button>
          <Button
            id="1"
            onClick={e => {
              onChange(e);
            }}
            style={{
              backgroundColor:
                resultChoice['1'] === '별채'
                  ? 'rgba(155, 149, 167, 0.2)'
                  : 'white',
            }}
            value="별채"
          >
            <div className="but-name">별채</div>
            <div className="img-wrapper">
              <img src="/images/thump/home14.jpg" />
            </div>
          </Button>
          <Button
            id="1"
            onClick={e => {
              onChange(e);
            }}
            value="독특한 숙소"
            style={{
              backgroundColor:
                resultChoice['1'] === '독특한 숙소'
                  ? 'rgba(155, 149, 167, 0.2)'
                  : 'white',
            }}
          >
            <div className="but-name">독특한 숙소</div>
            <div className="img-wrapper">
              <img src="/images/thump/home1.jpg" />
            </div>
          </Button>
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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  margin: 8px;
  background-color: white;
  border: 1px solid rgba(155, 149, 167, 0.44);
  border-radius: 10px;
  font-size: 17.5px;
  font-weight: 500;
  text-align: left;
  &:hover {
    outline: 1.5px solid black;
    cursor: pointer;
  }
  .img-wrapper {
    margin: 10px;
  }
  .but-name {
    margin-left: 18px;
  }
  img {
    width: 55px;
    height: 55px;
    border-radius: 5px;
  }
`;
