import { useEffect, useState } from 'react';
import { BsHeart, BsFillHeartFill } from 'react-icons/bs';
import BasicSlider from '../Slide/Slider';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../Modal/LoginModal';
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
  heart,
}) {
  const convention = [
    '수영장',
    '바비큐 그릴',
    '와이파이',
    'TV',
    '주차공간',
    '욕조',
  ];
  const [heartBtn, setHeartBtn] = useState(heart);

  //로그인 여부
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const loginModalHandler = () => {
    !isLoginModalOpen ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
  };

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

  let token = localStorage.getItem('token');

  const settingHeart = flag => {
    setHeartBtn(flag);
    fetch('http://localhost:8000/wish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessToken: token, accommodationsId: data.id }),
    }).then(res => res.json());
  };
  const deleteHeart = flag => {
    setHeartBtn(flag);
    fetch(`http://localhost:8000/wish?accommodationsId=${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        accessToken: token,
      },
    }).then(res => res.json());
  };
  return (
    <div onMouseOver={mouseUp} onMouseLeave={mouseLeave}>
      <Wrap>
        {isLoginModalOpen ? (
          <LoginModal loginModalHandler={loginModalHandler} />
        ) : null}
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
              {data.convenience_name
                ? data.convenience_name.map((conv, index) => (
                    <GrayText key={index}>{conv}</GrayText>
                  ))
                : null}
            </WrapConv>
          </Inner>
          <HeartWrap>
            {heartBtn === 'Y' ? (
              <BsFillHeartFill
                size="25"
                color="red"
                onClick={() => {
                  deleteHeart('N');
                }}
              />
            ) : (
              <BsHeart
                size="25"
                onClick={() => {
                  if (!localStorage.getItem('token')) {
                    setIsLoginModalOpen(true);
                  } else settingHeart('Y');
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
