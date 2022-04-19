import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <footer>
        <StyledSection>
          <StyledDiv>
            에어비앤비 지원
            <li>도움말 센터</li>
            <li>안전 정보</li>
            <li>예약 취소 옵션</li>
            <li>에어비앤비의 코로나19 대응 방안</li>
            <li>장애인 지원</li>
            <li>이웃 민원 신고</li>
          </StyledDiv>
          <StyledDiv>
            커뮤니티
            <li>Airbnb.org: 재난 구호 숙소</li>
            <li>아프간 난민지원</li>
            <li>차별 철폐를 위한 노력</li>
          </StyledDiv>
          <StyledDiv>
            호스팅
            <li>호스팅 시작하기</li>
            <li>에어커버: 호스트를 위한 보호 프로그램</li>
            <li>호스팅 자료 둘러보기</li>
            <li>커뮤니티 포럼 방문하기</li>
            <li>책임감 있는 호스팅</li>
          </StyledDiv>
          <StyledDiv>
            소개
            <li>뉴스룸</li>
            <li>새로운 기능에 대해 알아보기</li>
            <li>에어비앤비 공동창업자의 메세지</li>
            <li>채용정보</li>
            <li>투자자 정보</li>
            <li>에어비앤비 Luxe</li>
          </StyledDiv>
        </StyledSection>
        <Icons>
          <li className="icons">f</li>
          <li className="icons">f</li>
          <li className="icons">f</li>
          <li className="icons">f</li>
          <li className="icons">f</li>
          <li className="icons">f</li>
        </Icons>
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
  padding: 10px 70px;
  display: flex;
`;

const StyledDiv = styled.div`
  padding: 50px;
`;

const Icons = styled.div`
  display: flex;
`;

export default Footer;
