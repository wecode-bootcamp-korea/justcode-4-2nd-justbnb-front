import styled from 'styled-components';

function Map() {
  return (
    <Wrapper>
      <Title>호스팅 지역</Title>
      <Address>은평구, 서울, 한국</Address>
      <MapAPI></MapAPI>
    </Wrapper>
  );
}

const Wrapper = styled.section``;
const Title = styled.h2``;
const Address = styled.div``;
const MapAPI = styled.section`
  width: 500px;
  height: 400px;
`;

export default Map;
