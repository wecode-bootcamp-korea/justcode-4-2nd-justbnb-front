import styled from 'styled-components';

const WrapConv = styled.div`
  display: flex;
  @media only screen and (max-width: 744px) {
    margin-bottom: 20px;
  }
`;
const BlankDiv = styled.div`
  height: 15px;
`;
const Inner = styled.div`
  display: block;
  margin-left: 20px;
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 744px) {
    width: 100%;
  }
`;
const Text = styled.div`
  font-size: 1.2em;
  margin-top: 0.4em;
`;
const GrayText = styled.div`
  color: gray;
  font-size: 0.9em;
  margin-right: 10px;
  margin-top: 10px;
`;
const Wrap = styled.div`
  width: 98.5%;
  display: flex;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
  @media only screen and (max-width: 744px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Wrapping = styled.div`
  width: 98.5%;
  display: flex;
`;
const HeartWrap = styled.div`
  padding: 10px;
`;

export { WrapConv, BlankDiv, Inner, Text, GrayText, Wrap, Wrapping, HeartWrap };
