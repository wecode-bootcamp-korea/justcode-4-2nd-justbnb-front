import styled, { keyframes, css } from 'styled-components';

const boxMove = keyframes`
  0% {
    left:0px;
    
  }
  100% {
    left:-1000px;
  }
`;
const boxShow = keyframes`
  0% {
    left:-1000px;
    
  }
  100% {
    left:0px;
  }
`;

const ListContainer = styled.div`
  width: 50%;
  margin: 0px auto;
  z-index: 1;
  padding-left: 15px;
  background-color: white;
  position: absolute;
  animation-duration: 1s;
  box-shadow: 5px 0px 10px grey;
  animation: ${props => {
      if (props.active === 'true') {
        return css`
          ${boxMove} 1s 0s ease alternate forwards;
        `;
      } else {
        return css`
          ${boxShow} 1s 0s ease alternate forwards;
        `;
      }
    }}
    @media only screen and (max-width: 1308px) {
    width: 100%;
    padding-left: 0px;
    padding: 5px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 200px;
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
  left: ${props => props.left || '3%'};
  top: 2%;
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
  width: ${props => (props.active === 'true' ? '100%' : '50%')};
  position: sticky;
  left: 50%;
  height: ${props => props.height || '1250px'};
`;

const TextArea = styled.div`
  @media only screen and (max-width: 744px) {
    margin: 0px auto;
    width: 90%;
    object-fit: cover;
  }
`;

const MapBox = styled.div`
  height: 860px;
  width: 100%;
  position: ${props => (props.changeMap === 'false' ? 'sticky' : 'absolute')};
  top: ${props => (props.changeMap === 'false' ? '105px' : 'none')};
  animation-duration: 1s;
  z-index: -10;
  transition: all 4s ease-in;
  animation: ${props => {
    if (props.changeMap === 'false') {
      return css`
        ${reveal} 1s 0s ease alternate;
      `;
    }
  }};
`;
const reveal = keyframes`
  from {
    right:0%;
    clip-path: inset(0 100% 0 0);
  }
  to {
    right:100%;
    clip-path: inset(0 0 0 0);
  }
`;
const hide = keyframes`
  from {
    right:0%;
    clip-path: inset(0 0 0 0);
  }
  to {
    right:100%;
    clip-path: inset(0 0 0 100%);
  }
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
  TextArea,
  MapBox,
};
