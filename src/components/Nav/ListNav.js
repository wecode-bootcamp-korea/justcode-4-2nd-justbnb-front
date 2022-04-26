import styled from 'styled-components';
import UserNav from './UserNav';
import { useState } from 'react';
import SearchBar from './SearchBar';
import React from 'react';
import { Link } from 'react-router-dom';

function ListNav() {
  return (
    <Wrap>
      <Container color="#ffffff">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img
            alt="main-logo"
            src={`${process.env.PUBLIC_URL}/images/로고핑크.png`}
            width="150"
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <UserNav />
      </Container>
      <SearchBar scrollPosition={0} flag="list" />
    </Wrap>
  );
}

export default React.memo(ListNav);

const Button = styled.div`
  position: fixed;
  height: 120px;
  background-color: white;
  top: 0px;
  width: 100%;
  z-index: 40;
`;

const Wrap = styled.div`
  position: fixed;
  height: 120px;
  height: ${props => (props.height === 'false' ? '120px' : '200px')};
  background-color: white;
  top: 0px;
  width: 100%;
  z-index: 40;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  background-color: ${props => props.color};
`;
