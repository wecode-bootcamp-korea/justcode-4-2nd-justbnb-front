import styled from 'styled-components';
import { MdAccessTimeFilled } from 'react-icons/md';
import { FaSmokingBan, FaSprayCan, FaQuestionCircle } from 'react-icons/fa';

function Notice() {
  return (
    <Wrapper>
      <MainTitle>알아두어야 할 사항</MainTitle>
      <TextWrapper>
        <Text>
          <Title>숙소 이용규칙</Title>
          <List>
            <MdAccessTimeFilled className="icons" />
            <div>체크인 : 오후 4:00 이후</div>
          </List>
          <List>
            <MdAccessTimeFilled className="icons" />
            <div>체크아웃 시간 : 오전 11:00</div>
          </List>
          <List>
            <FaSmokingBan className="icons" />
            <div>흡연 금지</div>
          </List>
          {/* <List>
            <FaPaw className="icons" />
            <div>반려동물 동반 가능</div>
          </List> */}
        </Text>
        <Text>
          <Title>건강과 안전</Title>
          <List>
            <FaSprayCan className="icons" />
            <div>
              저스트비앤비의 사회적 거리 두기 및 관련
              <br />
              가이드라인이 적용됩니다.
            </div>
          </List>
          <List>
            <FaQuestionCircle className="icons" />
            <div>일산화탄소 경보기 설치 여부 정보 없음</div>
          </List>
          <List>
            <FaQuestionCircle className="icons" />
            <div>화재경보기 설치 여부 정보 없음 </div>
          </List>
        </Text>
        <Text>
          <Title>환불 정책</Title>
          <List>
            이 숙박에 대한 취소 세부 내역을 확인하려면 여행 날짜를 입력하세요.
          </List>
        </Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 50px 0;
`;

const MainTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 500;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.ul`
  width: 33.333%;
  &:nth-child(2) {
    margin: 0 20px;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-weight: 500;
`;

const List = styled.li`
  display: flex;
  font-weight: 350;
  margin-bottom: 15px;
  .icons {
    margin-right: 13px;
  }
`;
export default Notice;
