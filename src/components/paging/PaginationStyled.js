import styled from 'styled-components';
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
  z-index: 10;
`;

const Button = styled.button`
  border: none;
  border-radius: 100%;
  padding: 13px;
  margin: 4px;
  background: white;
  color: black;
  font-size: 0.8rem;

  &:hover {
    background: #f7f7f7;
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: black;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export { Nav, Button };
