import { React, useState } from 'react';
import styled from 'styled-components';

// 아이콘 임포트
import { IoLocationOutline } from 'react-icons/io5';
import { VscKey } from 'react-icons/vsc';
import { BsBookmark } from 'react-icons/bs';

function InfoText() {
  return (
    <InfoTextWrapper>
      <InfoTitle>
        <Text>
          <h2>수지님이 호스팅하는 콘도의 개인실</h2>
          <span>최대 인원 1명 · 원룸침대 1개 · 욕실 1개</span>
        </Text>
        <ImgBox>
          <img alt="user" src="/images/thump/user.jpeg" />
        </ImgBox>
      </InfoTitle>
      <InfoPoint>
        <List>
          <IoLocationOutline className="icons" />
          <div>
            <div>훌륭한 숙소 위치</div>
            <span>
              최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.
            </span>
          </div>
        </List>
        <List>
          <VscKey className="icons" />
          <div>
            <div>순조로운 체크인 과정</div>
            <span>
              최근 숙박한 게스트 중 95%가 체크인 과정 별점 5점을 준 숙소입니다.
            </span>
          </div>
        </List>
        <List>
          <BsBookmark className="icons" />
          <div>
            <div>무선 인터넷 </div>
            <span>게스트가 자주 찾는 편의시설</span>
          </div>
        </List>
      </InfoPoint>
      <InfoDescription>
        명동역에서 5분거리에 위치한 게스트하우스입니다
      </InfoDescription>
    </InfoTextWrapper>
  );
}

const InfoTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Text = styled.div`
  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const ImgBox = styled.div`
  width: 56px;
  height: 56px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const InfoPoint = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const List = styled.div`
  display: flex;
  padding: 15px 0;
  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
  .icons {
    font-size: 25px;
    margin-right: 10px;
  }
`;

const InfoDescription = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export default InfoText;
