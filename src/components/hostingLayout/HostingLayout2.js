import styled from 'styled-components';
import { useState } from 'react';
import Hosting5 from '../../pages/Hosting/Hosting5';
import Hosting6 from '../../pages/Hosting/Hosting6';
import Hosting7 from '../../pages/Hosting/Hosting7';
import Hosting8 from '../../pages/Hosting/Hosting8';
function MovetoStep({ step }) {
  switch (step) {
    case 5:
      return <Hosting5 />;
    case 6:
      return <Hosting6 />;
    case 7:
      return <Hosting7 />;
    case 8:
      return <Hosting8 />;
    default:
      return;
  }
}
function HostingLayout2() {
  const [step, setStep] = useState(5);

  // let currentStep = 5;

  function PrevButton() {
    return <LeftButton onClick={prev}>이전</LeftButton>;
  }

  function prev() {
    setStep(step - 1);
    MovetoStep(step);
  }

  function NextButton() {
    return <RightButton onClick={next}>다음</RightButton>;
  }

  function next() {
    setStep(step + 1);
    MovetoStep(step);
  }
  return (
    <Body>
      <Wrapper>
        <MovetoStep step={step} />
      </Wrapper>
      <Buttons>
        <Imsi>
          <PrevButton />
          <NextButton />
        </Imsi>
      </Buttons>
    </Body>
  );
}

export default HostingLayout2;

const Body = styled.div`
  /* height: fit-content; */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 0;
  /* right: 0px; */
  /* top: 100%; */
  /* margin-right: 0; */
  /* border: 10px solid red; */
  z-index: 999;
`;

const LeftButton = styled.button`
  z-index: 2;
  font-size: 10px;
  cursor: pointer;
`;

const RightButton = styled.button`
  z-index: 1;
  cursor: pointer;
  font-size: 10px;
`;

const Imsi = styled.div`
  width: 100%;
  border: 1px solid red;
  margin-right: 0;
  display: flex;
  justify-content: flex-end;
`;
