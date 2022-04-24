import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiBarbecue } from 'react-icons/gi';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdPersonalVideo } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { GiBathtub } from 'react-icons/gi';

export default function Hosting5({ onChange, resultChoice }) {
  const [convenience, setConvenience] = useState([]);

  // 조건문 사용 시 예시
  // function selectIcon(el) {
  //   if (el === 'FaSwimmingPool') {
  //     return <FaSwimmingPool />;
  //   } else if (el === 'GiBarbecue') {
  //     return <GiBarbecue />;
  //   }
  // }
  console.log('ddddd', resultChoice);
  function selectIcon(el) {
    let result;
    switch (el) {
      case 'FaSwimmingPool':
        result = <FaSwimmingPool />;
        break;
      case 'GiBarbecue':
        result = <GiBarbecue />;
        break;
      case 'AiOutlineWifi':
        result = <AiOutlineWifi />;
        break;
      case 'MdPersonalVideo':
        result = <MdPersonalVideo />;
        break;
      case 'FaParking':
        result = <FaParking />;
        break;
      case 'GiBathtub':
        result = <GiBathtub />;
        break;
      default:
        break;
    }
    return result;
  }

  useEffect(() => {
    fetch('/data/dlwjdals/hosting.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setConvenience(data);
      });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Text1>
          숙소 편의시설 정보를 추가해
          <br />
          주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <Text2>특별히 내세울만한 편의시설이 있나요?</Text2>
          <Convenience>
            {convenience.map((el, index) => {
              return (
                <TextAndIcon
                  key={el.id}
                  onClick={e => onChange(e)}
                  id="2"
                  value={el.convenience}
                >
                  <Icon>{selectIcon(el.icon)}</Icon>
                  <Text3>{el.convenience}</Text3>
                </TextAndIcon>
              );
            })}
          </Convenience>
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
  font-weight: bold;
  font-size: 50px;
  margin-left: 55px;
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
  width: 100%;
  margin: 55px;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  padding: 32px;
  width: 65%;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img-wrapper {
    height: 100%;
    width: 20px;
  }
  img {
    width: 100%;
    height: 100%;
  }
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

const Text2 = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin: 14px;
`;

const Convenience = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  margin: 50px 0;
`;

const TextAndIcon = styled.button`
  &:hover {
    outline: 3px solid black;
    /* outline-offset: -3px; */
    /* box-shadow: 0 0 0 2px #333 inset;*/
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: fit-content;
  font-size: 30px;
  font-weight: bolder;
  padding: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 15px;
`;

const Icon = styled.div`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bolder;
`;

const Text3 = styled.div`
  font-size: 20px;
  font-weight: bolder;
`;
