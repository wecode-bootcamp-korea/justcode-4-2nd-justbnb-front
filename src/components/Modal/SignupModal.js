import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { RiErrorWarningFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
function SignupModal({ signupModalHandler }) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { name, email, password } = inputs;
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const usernameHandler = e => {
    setInputs({ ...inputs, name: e.target.value });
    name === '' ? setNameErr(true) : setNameErr(false);
  };

  const emailHandler = e => {
    setInputs({ ...inputs, email: e.target.value });

    let regEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    !regEmail.test(email) ? setEmailErr(true) : setEmailErr(false);
  };

  const passwordHandler = e => {
    setInputs({ ...inputs, password: e.target.value });
    // 문자, 숫자 1개이상 포함, 8자리 이상
    let regPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,20}/;
    !regPassword.test(password) ? setPasswordErr(true) : setPasswordErr(false);
  };

  const successSignup = () => {
    if (name === '' || email === '' || password === '') {
      !name ? setNameErr(true) : setNameErr(false);
      !email ? setEmailErr(true) : setEmailErr(false);
      !password ? setPasswordErr(true) : setPasswordErr(false);
      return;
    }

    signupModalHandler('none');
    signupPost();
  };

  const signupPost = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(res => {
        if (res.status === 201) {
          alert('회원가입이 완료되었습니다 :)');
        } else if (res.status === 400 || res.status === 500) {
          return res.json();
        }
      })
      .then(res => {
        console.log('에러메세지: ', res.message);
      });
  };

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
                <Input placeholder="이름" onChange={usernameHandler} />
                <Text>
                  정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
                </Text>
                {nameErr && (
                  <ErrBox>
                    <RiErrorWarningFill fontSize={20} />
                    <ErrText>이름을 입력하세요.</ErrText>
                  </ErrBox>
                )}
              </Wrapper>
              <Wrapper>
                <Input placeholder="이메일" onChange={emailHandler} />
                <Text>예약 확인과 영수증을 이메일로 보내드립니다.</Text>
                {emailErr && (
                  <ErrBox>
                    <RiErrorWarningFill fontSize={20} />
                    <ErrText>이메일 형식에 맞는지 확인해주세요.</ErrText>
                  </ErrBox>
                )}
              </Wrapper>
              <Wrapper>
                <Input
                  placeholder="비밀번호"
                  type="password"
                  onChange={passwordHandler}
                />
                {passwordErr && (
                  <>
                    <ErrBox>
                      <RiErrorWarningFill fontSize={20} />
                      <ErrText>비밀번호를 확인하세요.</ErrText>
                    </ErrBox>
                    <ErrBox>
                      <AiFillCloseCircle />
                      <ErrText>최소 8자</ErrText>
                    </ErrBox>
                    <ErrBox>
                      <AiFillCloseCircle />
                      <ErrText>영문, 숫자가 모두 포함되어야 합니다.</ErrText>
                    </ErrBox>
                  </>
                )}
              </Wrapper>
              <Wrapper>
                <Text>
                  <Bold>동의 및 계속하기</Bold>
                  {` 버튼을 선택하면 에어비앤비 `}
                  <Underline>서비스약관, 결제서비스 약관</Underline>
                  {` 및 `}
                  <Underline>차별금지 정책</Underline>에 동의하며
                  <Underline>개인정보 처리방침</Underline>
                  정책을 이해하는 것입니다.
                </Text>
              </Wrapper>
              <CountinueBtn onClick={successSignup}>
                동의 및 계속하기
              </CountinueBtn>
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
  top: 500px;
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
  overflow: hidden;
  outline: 0;
  box-shadow: 2px 2px 10px #dddddd;

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

const Input = styled.input`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px 40px;
  border-radius: 10px;
  border: 1px solid gray;

  &: focus {
    outline-color: black;
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

const ErrBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: rgb(193, 53, 21);
  ${styledText}
`;

const ErrText = styled.div`
  padding-left: 5px;
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
