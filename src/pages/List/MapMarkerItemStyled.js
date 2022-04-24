import styled from 'styled-components';

const Wrap = styled.div`
  background-color: white;
  width: 250px;
  height: 270px;
  border-radius: 5%;
  position: absolute;
  top: -300px;
  left: -100px;
`;

const Img = styled.img`
  width: 100%;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  height: 180px;
`;
const TextBox = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;
const TextBox2 = styled.div`
  padding-top: 5px;
  padding-left: 20px;
`;
const P = styled.p`
  width: 82%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export { Wrap, Img, TextBox, TextBox2, P };
