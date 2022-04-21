import { useState } from 'react';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import {
  WrapConv,
  BlankDiv,
  Inner,
  Text,
  GrayText,
  Wrap,
  Img,
} from './AccommodationStyled';
function Accommodation({ data, localName, setlatlng }) {
  const convention = [
    '수영장',
    '바비큐 그릴',
    '와이파이',
    'TV',
    '주차공간',
    '욕조',
  ];
  const [heart, setHeart] = useState(false);

  const mouseUp = () => {
    setlatlng({ lat: data.lat, lng: data.long });
  };
  const mouseLeave = () => {
    setlatlng({ lat: 0, lng: 0 });
  };
  return (
    <div onMouseOver={mouseUp} onMouseLeave={mouseLeave}>
      <Wrap>
        <div>
          <Img src={data.image} alt="accommodataion" />
        </div>
        <Inner>
          <GrayText>
            {localName}의 {data.build_type}
          </GrayText>
          <Text>{data.name}</Text>
          <BlankDiv />

          <hr width="30px" align="left" size="1" styles="color:gray" />
          <GrayText>최대인원 {data.members}명</GrayText>
          <WrapConv>
            {data.convenient_id.map((conv, index) => (
              <GrayText key={index}>{convention[Number(conv - 1)]}</GrayText>
            ))}
          </WrapConv>
        </Inner>
        {heart ? (
          <BsFillHeartFill
            size="25"
            color="red"
            onClick={() => {
              setHeart(false);
            }}
          />
        ) : (
          <BsHeart
            size="25"
            onClick={() => {
              setHeart(true);
            }}
          />
        )}
      </Wrap>
    </div>
  );
}

export default Accommodation;
