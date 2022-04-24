import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.section`
  width: 50%;
  min-height: 100vh;
  background: rgb(217, 18, 100);
  background: linear-gradient(
    180deg,
    rgba(217, 18, 100, 0.9598214285714286) 0%,
    rgba(165, 4, 166, 1) 52%,
    rgba(55, 8, 159, 1) 100%
  );
  display: flex;
  align-items: center;
  line-height: 3.5em;
  position: relative;
  img {
    width: 80px;
    height: 70px;
    position: absolute;
    top: 0;
    margin-top: 30px;
    margin-left: 40px;
  }
`;

const Text1 = styled.div`
  color: white;
  font-weight: 530;
  font-size: 48.5px;
  margin-left: 55px;
`;

const Container2 = styled.section`
  width: 50%;
  min-height: 100vh;
  position: relative;
  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Header = styled.section`
  /* position: absolute;
  top: 0; */
  /* border: 1px solid red; */
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  z-index: 1;
  .help-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 20px;
    margin-right: 15px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: black;
    color: white;
  }
  .exit-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 20px;
    border-radius: 20px;
    margin-right: 30px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: black;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Body = styled.section`
  /* height: 80%; */
  width: 100%;
  /* border: 1px solid blue; */
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Map = styled.div``;

const ButtonTextWrapper = styled.button`
  z-index: 1;
  background-color: white;
  border-radius: 50px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  padding: 18px;
  width: 80%;
  margin-top: 65px;
  display: flex;
  align-items: center;
  /* color: grey; */
`;

const Icon = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  font-size: 25px;
  margin-top: 5px;
`;

const Text2 = styled.div`
  margin-left: 14px;
  color: grey;
`;

const Footer = styled.section`
  padding: 15px;
  width: 100%;
  /* border: 1px solid red; */
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-top: 2px solid rgba(155, 149, 167, 0.2);
  p {
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    margin-left: 30px;
  }
  .next-button {
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 13px 23px;
    margin-right: 30px;
    border-radius: 8px;
    border: 1px solid rgba(155, 149, 167, 0.1);
    background-color: black;
  }
`;

export {
  Container,
  Text1,
  Container2,
  Header,
  Body,
  Map,
  ButtonTextWrapper,
  Icon,
  Text2,
  Footer,
  Wrapper,
};
