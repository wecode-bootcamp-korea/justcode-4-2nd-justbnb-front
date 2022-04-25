import styled from 'styled-components';
const SliderStep = styled.div`
  width: 100%;
`;
const SliderWrap = styled.div`
  width: 860px;
  justify-content: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 1308px) {
    width: 100%;
  }
`;
const Desc = styled.p`
  margin-top: 5px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export { SliderStep, SliderWrap, Desc };
