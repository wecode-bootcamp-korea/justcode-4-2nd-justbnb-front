import { useState } from 'react';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import BasicSlider from '../Slide/Slider';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  WrapConv,
  BlankDiv,
  Inner,
  Text,
  GrayText,
  Wrap,
  Wrapping,
  HeartWrap,
} from './AccommodationStyled';

const Accommodation = React.memo(function Accommodation({
  data,
  localName,
  setlatlng,
}) {
  const convention = [
    '수영장',
    '바비큐 그릴',
    '와이파이',
    'TV',
    '주차공간',
    '욕조',
  ];
  const [heart, setHeart] = useState(false);
  const navigate = useNavigate();
  const gotoDetail = id => {
    navigate('/detail', { state: id });
  };
  if (data === []) return null;
  const mouseUp = () => {
    setlatlng({ lat: data.lat, lng: data.long });
  };
  const mouseLeave = () => {
    setlatlng({ lat: 0, lng: 0 });
  };
  return (
    <div onMouseOver={mouseUp} onMouseLeave={mouseLeave}>
      <Wrap>
        <BasicSlider data={data} flag="list" />
        {/* <Img src={data.image} alt="accommodataion" /> */}

        <Wrapping>
          <Inner
            onClick={() => {
              gotoDetail(data.id);
            }}
          >
            <GrayText>
              {localName}의 {data.build_type}
            </GrayText>
            <Text>{data.name}</Text>
            <BlankDiv />

            <hr width="30px" align="left" size="1" styles="color:gray" />
            <GrayText>최대인원 {data.total_members}명</GrayText>
            <WrapConv>
              {data.convenience_name.map((conv, index) => (
                <GrayText key={index}>{conv}</GrayText>
              ))}
            </WrapConv>
          </Inner>
          <HeartWrap>
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
          </HeartWrap>
        </Wrapping>
      </Wrap>
    </div>
  );
});

export default Accommodation;
