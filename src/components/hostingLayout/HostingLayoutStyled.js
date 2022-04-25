import styled from 'styled-components';

const ProgressDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0px auto;
  margin-top: 400px;
  width: 1000px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 28px;
  background-color: #a2a9b3;
  border: 1px solid red;
`;

const Progress = styled.div`
  color: #fff;
  background-color: #02bcc3;
  border-radius: 28px;
  transition: width 800ms ease-in-out;
  transition-delay: 100ms;
  height: 100%;
  width: ${props => props.width + '%' || '0%'};
`;

const Box = styled.div`
  margin-top: 500px;
  width: 90%;
  border: 1px solid red;
`;
const ProgressWrap = styled.div`
  width: 100%;
`;
const BtnDiv = styled.div`
  width: 50%;
  border: 1px solid blue;
  margin-left: 50%;
  display: flex;
  justify-content: space-between;
`;
const OptionSelect = styled.div``;
const BtnRight = styled.button`
  color: white;
  border: 0px;
  border-radius: 10%;
  font-size: 1.2rem;
  width: 120px;
  padding: 15px;
  background-color: #02bcc3;
`;

const BtnLeft = styled.button`
  color: #02bcc3;
  border-radius: 10%;
  font-size: 1.2rem;
  width: 120px;
  padding: 15px;
  border: 1px solid #e1e1e1;
  background-color: white;
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
