import React from 'react';
import {
  Text1,
  Container,
  Container2,
  Wrapper,
  Header,
  Footer,
  Body,
  Button,
} from './HostingStyled';

export default function Hosting({ onChange, resultChoice }) {
  return (
    <Wrapper>
      <Container>
        <Text1>
          호스팅할 숙소 유형을
          <br />
          알려주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <Button id="1" onClick={e => onChange(e)} value="아파트">
            <div>아파트</div>
            <div className="img-wrapper">
              <img src="/images/thump/home10.jpg" />
            </div>
          </Button>
          <Button id="1" onClick={e => onChange(e)} value="주택">
            주택
          </Button>
          <Button id="1" onClick={e => onChange(e)} value="별채">
            별채
          </Button>
          <Button id="1" onClick={e => onChange(e)} value="독특한 숙소">
            독특한 숙소
          </Button>
        </Body>
        <Footer>
          <p>뒤로</p>
          <button className="next-button">다음</button>
        </Footer>
      </Container2>
    </Wrapper>
  );
}
