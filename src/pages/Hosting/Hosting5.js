import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          숙소 편의시설 정보를 추가해
          <br />
          주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <HeaderButton className="help">도움말</HeaderButton>
          <HeaderButton>나가기</HeaderButton>
        </Header>
        <Body>
          <Text2>특별히 내세울만한 편의시설이 있나요?</Text2>
          <Convenience>
            {convenience.map((el, index) => (
              <ConvMap
                el={el}
                onChange={onChange}
                resultChoice={resultChoice}
                key={el.id}
              />
            ))}
          </Convenience>
        </Body>
      </Container2>
    </Wrapper>
  );
}

function compareResult(resultChoice, el) {
  // console.log(resultChoice);
  if (!resultChoice.hasOwnProperty(6)) return false;
  for (let i = 0; i < resultChoice[6].length; i++) {
    if (resultChoice[5][i] === el.convenience) {
      return 'on';
    }
  }
}

function ConvMap({ el, onChange, resultChoice }) {
  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    !selected ? setSelected(true) : setSelected(false);
  };
  const conv = {
    수영장: 1,
    '바베큐 그릴': 2,
    WIFI: 3,
    TV: 4,
    주차공간: 5,
    욕조: 6,
  };
  console.log(conv['수영장']);
  return (
    <Button
      key={el.id}
      onClick={e => {
        onChange(e);
        handleSelected();
      }}
      id="6"
      value={el.convenience}
      defaultChecked={compareResult(resultChoice, el)}
      style={{ backgroundColor: selected ? 'rgba(155, 149, 167, 0.2)' : null }}
    >
      <div key={el.id}>
        <BoxWrapper>
          {/* <TextAndIcon
            key={el.id}
            onChange={e => onChange(e)}
            id="6"
            value={conv[el.convenience]}
            type="checkbox"
            defaultChecked={compareResult(resultChoice, el)}
          /> */}
          <Icon>{selectIcon(el.icon)}</Icon>
          <Text3>{el.convenience}</Text3>
        </BoxWrapper>
      </div>
    </Button>
  );
}
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
  font-size: 22px;
  font-weight: 500;
  margin-left: 55px;
  margin-top: 40px;
`;

const Convenience = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 40px;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  text-align: left;
  padding: 25px;
  width: 30%;
  margin: 8px;
  cursor: pointer;
  &:hover {
    outline: 2px solid black;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 30px;
`;

const Text3 = styled.div`
  font-size: 15px;
`;
