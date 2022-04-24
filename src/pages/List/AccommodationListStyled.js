import styled, { keyframes } from 'styled-components';

const ListContainer = styled.div`
  width: 88%;
  margin: 0px auto;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 360px;
  @media only screen and (max-width: 1308px) {
    width: 100%;
  }
`;
const Text = styled.div`
  width: 100%;
  font-size: 0.9em;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
`;
const Text2 = styled.div`
  width: 100%;
  font-size: 0.9em;
`;
const IconTextWrap = styled.div`
  display: flex;
  margin-bottom: 1.5em;
`;
const Icon = styled.div`
  margin-right: 10px;
`;

const H2 = styled.h2`
  font-size: 1.5em;
  font-weight: 550;
  margin-bottom: 20px;
`;
const Button = styled.div`
  width: ${props => props.width || '120px;'};

  z-index: 10px;
  background-color: white;
  position: absolute;
  left: ${props => props.left || '48%'};
  top: 42%;
  box-shadow: 0.5px 0.5px 0.5px 0.5px gray;
  border-radius: 8px;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  &:hover {
    background-color: #e5e5e5;
  }
`;
const WrapContainer = styled.div``;

const Map = styled.div``;

const Box = styled.div`
  width: 100%;
  height: 1250px;
`;

export {
  ListContainer,
  Container,
  Text,
  Text2,
  IconTextWrap,
  Icon,
  H2,
  Button,
  WrapContainer,
  Map,
  Box,
};
