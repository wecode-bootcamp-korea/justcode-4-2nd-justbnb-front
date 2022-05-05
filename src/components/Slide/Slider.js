import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import { useNavigate } from 'react-router-dom';
import {
  SliderStep,
  Img,
  SliderWrap,
  OverlayImg,
  LittleImg,
  LittleSliderWrap,
} from './SliderStyled';
import React from 'react';

function BasicSlider({ data, flag }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: '10px',
        }}
      >
        <ul
          style={{
            width: '100%', //setWidth(flag),
            margin: '0px',
            position: 'absolute',
            top: '-50px',
            //left: '50%',
            zIndex: '10',
            alignContent: 'center',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return flag !== 'little' ? (
    <SliderWrap>
      <Slider {...settings}>
        {data.image_url.map((img, index) => {
          return (
            <SliderStep key={index}>
              <SelectImg data={data} img={img} flag={flag} />
            </SliderStep>
          );
        })}
      </Slider>
    </SliderWrap>
  ) : (
    <LittleSliderWrap>
      <Slider {...settings}>
        {data.image_url.map((img, index) => {
          return (
            <SliderStep key={index}>
              <SelectImg data={data} img={img} flag={flag} />
            </SliderStep>
          );
        })}
      </Slider>
    </LittleSliderWrap>
  );
}

function SelectImg({ data, img, flag }) {
  const navigate = useNavigate();
  const gotoDetail = id => {
    navigate('/detail', { state: id });
  };
  if (flag === 'overlay') {
    return (
      <OverlayImg
        src={img}
        alt="accommodation"
        onClick={() => {
          gotoDetail(data.id);
        }}
      />
    );
  } else if (flag === 'little') {
    return (
      <LittleImg
        src={img}
        alt="accommodation"
        onClick={() => {
          gotoDetail(data.id);
        }}
      />
    );
  } else {
    return (
      <Img
        src={img}
        alt="accommodation"
        onClick={() => {
          gotoDetail(data.id);
        }}
      />
    );
  }
}

export default React.memo(BasicSlider);
