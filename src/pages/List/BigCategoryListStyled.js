import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 1.5em;
  font-weight: 550;
  margin-bottom: 15px;
`;
const Line = styled.div`
  display: flex;
  margin-right: 30px;
  margin-top: ${props => props.marginTop || '40px;'}; ;
`;
const P = styled.p`
  width: 76%;
  font-size: 1em;
  font-weight: 600;
  text-align: right;
`;

const Wrap = styled.div``;

export { H2, Wrap, Line, P };
