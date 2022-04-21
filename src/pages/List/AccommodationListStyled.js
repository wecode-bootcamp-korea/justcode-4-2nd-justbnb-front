import styled from 'styled-components';

const ListContainer = styled.div`
  width: 45%;
`;

const Container = styled.div`
  border: 1px solid #e5e5e5;
  width: 100%;
  height: 100%;
  margin-left: 20px;
  display: flex;
`;
const Text = styled.div`
  width: 80%;
  font-size: 0.9em;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
  margin-left: 20px;
`;
const Text2 = styled.div`
  width: 80%;
  font-size: 0.9em;
`;
const IconTextWrap = styled.div`
  display: flex;
  margin-bottom: 1.5em;
  margin-left: 20px;
`;
const Icon = styled.div`
  margin-right: 10px;
`;

export { ListContainer, Container, Text, Text2, IconTextWrap, Icon };
