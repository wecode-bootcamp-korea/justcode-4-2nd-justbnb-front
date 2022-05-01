import styled from 'styled-components';
const SliderStep = styled.div``;

const Img = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 5%;
  cursor: pointer;
  @media only screen and (max-width: 744px) {
    margin: 0px auto;
    width: 90%;
    height: 100%;
    object-fit: cover;
  }
`;

const LittleImg = styled.img`
  width: 100%;
  border-radius: 5%;
  height: 150px;
  cursor: pointer;
  @media only screen and (max-width: 1854px) {
    height: 250px;
  }
`;

const LittleSliderWrap = styled.div`
  width: 240px;
  @media only screen and (max-width: 1854px) {
    width: 95%;
  }
`;

const OverlayImg = styled.img`
  width: 250px;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  height: 180px;
  cursor: pointer;
`;

const SliderWrap = styled.div`
  width: 300px;
  @media only screen and (max-width: 744px) {
    width: 100%;
  }
`;

export { Img, LittleImg, SliderStep, SliderWrap, OverlayImg, LittleSliderWrap };
