import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import styled from 'styled-components';
import { SliderStep } from './SliderStyled';
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
  let Img = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 5%;
    @media only screen and (max-width: 744px) {
      margin: 0px auto;
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  `;
  let SliderWrap = styled.div`
    width: 300px;
    @media only screen and (max-width: 744px) {
      width: 100%;
    }
  `;
  if (flag === 'overlay') {
    Img = styled.img`
      width: 250px;
      border-top-left-radius: 5%;
      border-top-right-radius: 5%;
      height: 180px;
    `;
  } else if (flag === 'little') {
    Img = styled.img`
      width: 100%;
      border-radius: 5%;
      height: 150px;
      @media only screen and (max-width: 1854px) {
        height: 250px;
      }
    `;
    SliderWrap = styled.div`
      width: 240px;
      @media only screen and (max-width: 1854px) {
        width: 95%;
      }
    `;
  }
  return (
    <SliderWrap>
      <Slider {...settings}>
        {data.image_url.map((img, index) => {
          return (
            <SliderStep key={index}>
              <Img src={img} alt="accommodataion" />
            </SliderStep>
          );
        })}
      </Slider>
    </SliderWrap>
  );
}

export default React.memo(BasicSlider);
