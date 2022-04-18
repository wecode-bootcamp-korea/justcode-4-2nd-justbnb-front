import styled from 'styled-components';

const WrapConv = styled.div`
  display: flex;
`;
const BlankDiv = styled.div`
  height: 15px;
`;
const Inner = styled.div`
  display: block;
  margin-left: 20px;
  width: 70%;
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
  padding: 20px;
  width: 90%;
  display: flex;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #e5e5e5;
`;
const Img = styled.img`
  width: 300px;
  border-radius: 5%;
`;

export { WrapConv, BlankDiv, Inner, Text, GrayText, Wrap, Img };
