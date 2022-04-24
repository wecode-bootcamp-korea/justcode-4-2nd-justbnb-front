import React from 'react';
import CounterValue from '../../components/Hosting/Counter';
import {
  Text1,
  Container,
  Container2,
  Wrapper,
  Header,
  Footer,
  Body,
  Text2,
} from './Hosting4Styled';

export default function Hosting4() {
  return (
    <Wrapper>
      <Container>
        <Text1>
          숙소에서 맞이할 최대
          <br />
          인원수를 알려주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <Text2>게스트</Text2>
          <CounterValue />
          <Text2>반려동물</Text2>
          <CounterValue />
        </Body>
        <Footer>
          <p>뒤로</p>
          <button className="next-button">다음</button>
        </Footer>
      </Container2>
    </Wrapper>
  );
}
