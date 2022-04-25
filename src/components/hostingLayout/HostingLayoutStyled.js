import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
  position: relative;
`;

const ProgressWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  /* border: 3px solid orange; */
`;

const ProgressDiv = styled.div`
  display: flex;
  padding: 18px 0;
  /* /* margin: 0px auto; */
`;

const ProgressBar = styled.div`
  width: 100%;
  margin-left: 50%;
  height: 2px;
  background-color: rgba(155, 149, 167, 0.24);
`;

const Progress = styled.div`
  color: black;
  background-color: black;
  transition: width 800ms ease-in-out;
  transition-delay: 100ms;
  height: 100%;
  width: ${props => props.width + '%' || '0%'};
`;

const BtnDiv = styled.div`
  width: 50%;
  /* border: 1px solid blue; */
  margin-left: 50%;
  display: flex;
  justify-content: space-between;
`;
const OptionSelect = styled.div``;

const BtnRight = styled.button`
  font-size: 16px;
  font-weight: 400;
  color: white;
  padding: 13px 23px;
  margin-right: 6.5%;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid rgba(155, 149, 167, 0.1);
  background-color: black;
`;

const BtnLeft = styled.div`
  text-decoration: underline;
  font-size: 16x;
  font-weight: 500;
  margin-left: 6.5%;
  margin-top: 15px;
`;

export {
  ProgressDiv,
  ProgressBar,
  Progress,
  Box,
  ProgressWrap,
  BtnDiv,
  OptionSelect,
  BtnRight,
  BtnLeft,
};
