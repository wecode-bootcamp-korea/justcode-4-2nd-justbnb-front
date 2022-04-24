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

export default function Hosting() {
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
          <Button>
            <div className="but-name">아파트</div>
            <div className="img-wrapper">
              <img src="/images/thump/home10.jpg" />
            </div>
          </Button>
          <Button>
            <div className="but-name">주택</div>
            <div className="img-wrapper">
              <img src="/images/thump/home3.jpg" />
            </div>
          </Button>
          <Button>
            <div className="but-name">별채</div>
            <div className="img-wrapper">
              <img src="/images/thump/home14.jpg" />
            </div>
          </Button>
          <Button>
            <div className="but-name">독특한 숙소</div>
            <div className="img-wrapper">
              <img src="/images/thump/home1.jpg" />
            </div>
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
