import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <StyledSection>
          <StyledDiv>
            <Title>저스트비앤비 지원</Title>
            <List>도움말 센터</List>
            <List>안전 정보</List>
            <List>예약 취소 옵션</List>
            <List>저스트비앤비의 코로나19 대응 방안</List>
            <List>장애인 지원</List>
            <List>이웃 민원 신고</List>
          </StyledDiv>
          <StyledDiv>
            <Title>커뮤니티</Title>
            <List>Justbnb.org: 재난 구호 숙소</List>
            <List>아프간 난민지원</List>
            <List>차별 철폐를 위한 노력</List>
          </StyledDiv>
          <StyledDiv>
            <Title>호스팅</Title>
            <List>호스팅 시작하기</List>
            <List>저스트커버: 호스트를 위한 보호 프로그램</List>
            <List>호스팅 자료 둘러보기</List>
            <List>커뮤니티 포럼 방문하기</List>
            <List>책임감 있는 호스팅</List>
          </StyledDiv>
          <StyledDiv>
            <Title>소개</Title>
            <List>뉴스룸</List>
            <List>새로운 기능에 대해 알아보기</List>
            <List>저스트비앤비 공동창업자의 메세지</List>
            <List>채용정보</List>
            <List>투자자 정보</List>
            <List>저스트비앤비 Luxe</List>
          </StyledDiv>
        </StyledSection>
        <IconContainer>
          <Icons
            onClick={() =>
              window.open('https://xxziiko.tistory.com/', '_blank')
            }
          >
            <AiFillGithub />
          </Icons>
          <Icons
            onClick={() =>
              window.open('https://velog.io/@minzyaaaaaa', '_blank')
            }
          >
            <AiFillGithub />
          </Icons>
          <Icons
            onClick={() => window.open('https://velog.io/@sseul22', '_blank')}
          >
            <AiFillGithub />
          </Icons>
          <Icons
            onClick={() => window.open('https://velog.io/@shw779', '_blank')}
          >
            <AiFillGithub />
          </Icons>
          <Icons
            onClick={() => window.open('https://velog.io/@jml22', '_blank')}
          >
            <AiFillGithub />
          </Icons>
          <Icons
            onClick={() => window.open('https://velog.io/@wlsun', '_blank')}
          >
            <AiFillGithub />
          </Icons>
        </IconContainer>
      </footer>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: #f7f7f7;
  list-style: none;
`;

const StyledSection = styled.section`
  padding: 20px 70px 50px 70px;
  display: flex;
  border-bottom: 1px solid rgb(221, 221, 221);
  font-size: 11px;
`;

const StyledDiv = styled.div`
  padding-top: 30px;
  padding-right: 170px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 30px;
`;

const List = styled.li`
  padding-bottom: 14px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Title = styled.div`
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
`;

const Icons = styled.button`
  padding-left: 15px;
  font-size: 23px;
  border: none;
  background: #f7f7f7;
  cursor: pointer;
`;

export default Footer;
