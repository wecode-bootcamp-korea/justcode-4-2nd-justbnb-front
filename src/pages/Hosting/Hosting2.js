import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'react-kakao-maps-sdk';
import { IoLocationSharp } from 'react-icons/io5';
import {
  Text1,
  Container,
  Container2,
  Wrapper,
  Header,
  Footer,
  Body,
  ButtonTextWrapper,
  Icon,
  Text2,
} from './Hosting2Styled';

export default function Hosting() {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>숙소 위치는 어디인가요?</Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <Link to="/">
            <button className="exit-button">나가기</button>
          </Link>
        </Header>
        <Body>
          <Map
            center={{
              lat: 37.56610344059421,
              lng: 126.97884488662002,
            }}
            style={{
              width: '100%',
              height: '1000px',
              position: 'fixed',
              top: 0,
              left: '50%',
            }}
            level={8}
          />
          <ButtonTextWrapper>
            <Icon>
              <IoLocationSharp />
            </Icon>
            <Text2>주소를 입력하세요.</Text2>
          </ButtonTextWrapper>
        </Body>
        <Footer>
          <p>뒤로</p>
          <button className="next-button">다음</button>
        </Footer>
      </Container2>
    </Wrapper>
  );
}
