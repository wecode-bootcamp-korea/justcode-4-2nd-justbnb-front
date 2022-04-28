import { useState, useEffect, useRef } from 'react';
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
import Hosting2 from '../../pages/Hosting/Hosting2';
// import Hosting3 from '../../pages/Hosting/Hosting3';
import Hosting4 from '../../pages/Hosting/Hosting4';
import Hosting5 from '../../pages/Hosting/Hosting5';
import Hosting6 from '../../pages/Hosting/Hosting6';
import Hosting7 from '../../pages/Hosting/Hosting7';
import Hosting8 from '../../pages/Hosting/Hosting8';
import Hosting9 from '../../pages/Hosting/Hosting9';

let currentStep = 1;

const ProgressBox = ({ progress }) => {
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
    case 2:
      return <Hosting2 onChange={onChange} resultChoice={resultChoice} />;
    // case 3:
    //   return <Hosting3 onChange={onChange} resultChoice={resultChoice} />;
    //   break;
    case 3:
      return <Hosting4 onChange={onChange} resultChoice={resultChoice} />;
    case 4:
      return <Hosting5 onChange={onChange} resultChoice={resultChoice} />;
    case 5:
      return <Hosting6 onChange={onChange} resultChoice={resultChoice} />;
    case 6:
      return <Hosting7 onChange={onChange} resultChoice={resultChoice} />;
    case 7:
      return <Hosting8 onChange={onChange} resultChoice={resultChoice} />;
    case 8:
      return <Hosting9 onChange={onChange} resultChoice={resultChoice} />;
    default:
      console.log('invalid number');
  }
}

function HostingLayout() {
  const [step, setStep] = useState(1);
  const [resultChoice, setResultChoice] = useState({});
  const [flag, setFlag] = useState(0);
  const arr = useRef([]);

  const onChange = e => {
    const { value, id } = e.target;
    if (step === 4) {
      if (resultChoice.hasOwnProperty(5)) {
        if (resultChoice[5].includes(value)) {
          resultChoice[5] = resultChoice[5].filter(
            element => element !== value
          );
          arr.current = arr.current.filter(element => element !== value);
        } else {
          arr.current.push(value);
          setResultChoice({ ...resultChoice, [id]: arr.current });
        }
      } else {
        arr.current.push(value);
        setResultChoice({ ...resultChoice, [id]: arr.current });
      }
    } else {
      // console.log(e.target);
      // console.log(e.target.value);
      // console.log('why ?', id, value);
      setResultChoice({ ...resultChoice, [id]: value });
    }
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
          뒤로
        </BtnLeft>
      );
    }
    return null;
  };
  // console.log('step :', step);
  console.log('result :', resultChoice);
  // console.log(resultChoice);
  return (
    <div>
      <Box>
        <GotoStep step={step} onChange={onChange} resultChoice={resultChoice} />
        <ProgressWrap>
          <ProgressBox progress={parseInt(((step - 1) / 10) * 100)} />
          <BtnDiv>
            <PrevButton />
            {flag ? (
              <OptionSelect>옵션선택 해주세요.</OptionSelect>
            ) : (
              <OptionSelect> </OptionSelect>
            )}
            <NextButton />
          </BtnDiv>
        </ProgressWrap>
      </Box>
    </div>
  );
}

export default HostingLayout;
