import React from 'react';
import styled from 'styled-components';

function MembersToggle() {
  return (
    <Wrapper>
      <div>
        <div>인원수</div>
        <button>+</button>1<button>-</button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  width: 15rem;
  margin-top: 10px;
  margin-left: 55rem;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 0.8rem;
`;
export default MembersToggle;
