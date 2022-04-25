import styled from 'styled-components';
import { Map } from 'react-kakao-maps-sdk';

function MapInfo(props) {
  const { city, sub_location, lat, long } = props;

  return (
    <Wrapper>
      <Title>호스팅 지역</Title>
      <Address>{`${sub_location}, ${city}`}</Address>
      <Map
        center={{ lat: lat, lng: long }}
        style={{ width: '1120px', height: '480px' }}
        level={3}
      ></Map>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  /* margin: 0 80px; */
  padding: 40px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 500;
`;
const Address = styled.div`
  margin-bottom: 20px;
`;

export default MapInfo;
