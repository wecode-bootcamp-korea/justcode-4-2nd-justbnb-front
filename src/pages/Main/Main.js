import React from 'react';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import Nav from '../../components/Nav/Nav';

function Main() {
  return (
    <>
      <Nav />
      <Container />
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin: 700px;
  padding: 700px;
`;
export default Main;
