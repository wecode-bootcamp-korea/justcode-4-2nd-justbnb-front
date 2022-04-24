import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderStep, SliderWrap, Desc } from './MultipleSliderStyled';
import BasicSlider from './Slider';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        position: 'absolute',
        top: '-30px',
        left: '96%',
        borderRadius: '100%',
        backgroundColor: 'gray',
        width: '20px',
        height: '20px',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        postion: 'absolute',
        top: '-30px',
        left: '92%', //'740px',
        borderRadius: '100%',
        backgroundColor: 'gray',
        width: '20px',
        height: '20px',
      }}
      onClick={onClick}
    />
  );
}
function MultipleSlider({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1127,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1258,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1854,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1854,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderWrap>
      <Slider {...settings}>
        {data.map((_data, index) => {
          return (
            <SliderStep key={index}>
              <BasicSlider data={_data} flag="little" />
              {_data.build_type} 전체 ·{_data.local}
              <Desc>{_data.name}</Desc>
            </SliderStep>
          );
        })}
      </Slider>
    </SliderWrap>
  );
}
export default MultipleSlider;
