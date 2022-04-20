import React from 'react';
import styled, { css, keyframes } from 'styled-components';

function SignupModal({ signupModalHandler }) {
  return (
    <div>
      <BackgroundModal>
        <ModalWrapper>
          <ModalInner>
            <HeadLine>
              <CloseBtn
                onClick={() => {
                  signupModalHandler('none');
                }}
              >
                X
              </CloseBtn>
              <Tittle>회원 가입 완료하기</Tittle>
            </HeadLine>
            <ContentsWrapper>
              <Wrapper>
                <InputContainer>
                  <Input placeholder="이름" />
                </InputContainer>
                <Text>
                  정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
                </Text>
              </Wrapper>
              <Wrapper>
                <InputContainer>
                  <Input placeholder="이메일" />
                </InputContainer>
                <Text>예약 확인과 영수증을 이메일로 보내드립니다.</Text>
              </Wrapper>
              <Wrapper>
                <InputContainer>
                  <Input placeholder="비밀번호" />
                </InputContainer>
              </Wrapper>
              <Text>
                <Bold>동의 및 계속하기</Bold>
                {` 버튼을 선택하면 에어비앤비 `}
                <Underline>서비스약관, 결제서비스 약관</Underline>
                {` 및 `}
                <Underline>차별금지 정책</Underline>에 동의하며
                <Underline>개인정보 처리방침</Underline>
                정책을 이해하는 것입니다.
              </Text>
              <CountinueBtn>동의 및 계속하기</CountinueBtn>
            </ContentsWrapper>
          </ModalInner>
        </ModalWrapper>
      </BackgroundModal>
    </div>
  );
}

const BackgroundModal = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const move = keyframes`
0%{
  opacity: 0;
  top: 300px;
} 50% {
  opacity: 0.8;
} 100% {
  opacity: 1;
  top: -50px;
}`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;

  animation: ${move} 0.3s ease-in-out forwards;
`;

const ModalInner = styled.div`
  position: relative;
  top: 50%;
  width: 600px;
  margin: 0 auto;
  transform: translateY(-50%);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
`;

const HeadLine = styled.div`
  display: felx;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const CloseBtn = styled.button`
  text-align: left;
  border: none;
  background-color: #ffffff;
  font-size: 0.9em;
  cursor: pointer;
`;

const Tittle = styled.div`
  font-size: 1.1em;
  padding-left: 200px;
  font-weight: 700;
`;

const ContentsWrapper = styled.div`
  padding: 40px 20px;
`;

const BtnLayout = css`
  display: flex;
  margin-top: 15px;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid gray;
`;

const Input = styled.input`
  margin: 26px 12px 6px;
  border: none;

  &: focus {
    outline: none;
  }
`;
const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const styledText = css`
  font-size: 12px;
`;

const Text = styled.span`
  color: #484848;
  ${styledText}
`;

const Bold = styled.span`
  font-weight: 700;
  ${styledText}
`;

const Underline = styled.span`
  text-decoration: underline;
  color: rgb(0, 76, 196);

  ${styledText}
`;

const CountinueBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  ${BtnLayout};
`;

export default SignupModal;
