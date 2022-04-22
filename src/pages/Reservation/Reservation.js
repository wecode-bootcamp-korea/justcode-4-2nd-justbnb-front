import styled from 'styled-components';

function Reservation() {
  return (
    <Body>
      <Travel>여행</Travel>
      <Line />
      <NoReservation>
        <Text1>아직 예약된 여행이 없습니다!</Text1>
        <Text2>
          여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
        </Text2>
        <Text3>숙소 검색하기</Text3>
      </NoReservation>
      <Line />
      <Text4>예약 내역을 찾으실 수 없나요?&nbsp;</Text4>
      <Text5>도움말 센터 방문하기</Text5>
    </Body>
  );
}

export default Reservation;

const Body = styled.div`
  margin: 70px 120px;
`;

const Travel = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin: 40px 0;
`;

const NoReservation = styled.div`
  margin: 10px 0;
`;

const Text1 = styled.div`
  font-size: 29px;
  font-weight: bolder;
`;

const Text2 = styled.div`
  font-size: 20px;
  margin: 25px 0;
`;

const Text3 = styled.div`
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  width: fit-content;
  padding: 20px 30px;
  margin: 10px 0 70px 0px;
`;

const Text4 = styled.span`
  font-size: 20px;
  margin: 25px 0;
`;

const Text5 = styled.span`
  text-decoration: underline;
  font-size: 20px;
  font-weight: bold;
`;
