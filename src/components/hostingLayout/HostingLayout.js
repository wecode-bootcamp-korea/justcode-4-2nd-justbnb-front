import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ProgressDiv,
  ProgressBar,
  Progress,
  Box,
  ProgressWrap,
  BtnDiv,
  OptionSelect,
  BtnRight,
  BtnLeft,
} from './HostingLayoutStyled';
import Hosting from '../../pages/Hosting/Hosting';
import Hosting5 from '../../pages/Hosting/Hosting5';

let currentStep = 1;

const ProgressBox = ({ progress }) => {
  console.log('aa :', progress);
  if (!progress) progress = 0;
  return (
    <ProgressDiv>
      <ProgressBar>
        <Progress width={progress} />
      </ProgressBar>
    </ProgressDiv>
  );
};

function GotoStep({ step, onChange, resultChoice }) {
  switch (step) {
    case 1:
      return <Hosting onChange={onChange} resultChoice={resultChoice} />;
      break;
    case 2:
      return <Hosting5 onChange={onChange} resultChoice={resultChoice} />;
      break;
    default:
      console.log('invalid number');
  }
}

function HostingLayout() {
  const [step, setStep] = useState(1);
  const [resultChoice, setResultChoice] = useState({});
  const [flag, setFlag] = useState(0);

  const onChange = e => {
    const { value, id } = e.target;
    setResultChoice({ ...resultChoice, [id]: value });
    setFlag(0);
  };

  useEffect(() => {
    setStep(1);
    setResultChoice({});
    currentStep = 1;
  }, []);

  const _next = () => {
    return (() => {
      setFlag(0);
      if (resultChoice[currentStep]) {
        currentStep = currentStep >= step ? step + 1 : currentStep + 1;
        setStep(currentStep);
      } else setFlag(1);
    })();
  };
  const NextButton = () => {
    if (currentStep < 10) {
      return (
        <BtnRight type="button" onClick={_next}>
          다음
        </BtnRight>
      );
    } else {
      return <BtnRight type="button">완료</BtnRight>;
    }
  };
  const _prev = () => {
    currentStep = currentStep <= 1 ? 0 : currentStep - 1;
    setStep(currentStep);
  };

  const PrevButton = () => {
    if (currentStep > 1) {
      return (
        <BtnLeft type="button" onClick={_prev}>
          이전
        </BtnLeft>
      );
    }
    return null;
  };
  console.log('step :', step);
  return (
    <div>
      <Box>
        <ProgressWrap>
          <ProgressBox progress={parseInt(((step - 1) / 10) * 100)} />
          <GotoStep
            step={step}
            onChange={onChange}
            resultChoice={resultChoice}
          />
          <BtnDiv>
            {flag ? (
              <OptionSelect>옵션을 선택하세요</OptionSelect>
            ) : (
              <OptionSelect> </OptionSelect>
            )}
            <PrevButton />
            <NextButton />
          </BtnDiv>
        </ProgressWrap>
      </Box>
    </div>
  );
}

export default HostingLayout;
