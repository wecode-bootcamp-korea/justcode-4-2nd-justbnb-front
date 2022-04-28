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
import Hosting3 from '../../pages/Hosting/Hosting3';
import Hosting4 from '../../pages/Hosting/Hosting4';
import Hosting5 from '../../pages/Hosting/Hosting5';
import Hosting6 from '../../pages/Hosting/Hosting6';
import Hosting7 from '../../pages/Hosting/Hosting7';
import Hosting8 from '../../pages/Hosting/Hosting8';
import Hosting9 from '../../pages/Hosting/Hosting9';

let currentStep = 1;

let imageURL = null;

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
const uploadImage = async event => {
  const formData = new FormData();
  const { files } = event.target;
  console.log(event.target.files);

  Array.from(files).forEach(file => {
    formData.append('images', file);
  });
  console.log(formData);

  await fetch('http://localhost:8000/aws-s3', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(result => {
      console.log('성공:', result);
      imageURL = result.filesLocation;
      console.log('imageurl ', imageURL);
      return result;

      // setResultChoice({ ...resultChoice, 10: result });

      // fetch('http://lo')
      //result + 숙소 정보 -> fetch() -> 백엔드
    });
};

// const gotoDB = async resultChoice => {
//   await fetch(
//     `http://localhost:8000/accommodations?city=${city}&buildType=${buildType}&roomType=${roomType}&animalYn=${haveAnimal}&totalMembers=${count}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   )
//     .then(res => res.json())
//     .then(data => {
//       let temp = [];
//       for (let i = 0; i < data.accommodationsList.length; i++) {
//         temp.push(data.accommodationsList[i]);
//       }
//       setData([...temp]);
//     });
// };

async function gotoDB(resultChoice) {
  await fetch('http://localhost:8000/accommodations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken: localStorage.getItem('token'),
      name: resultChoice[8],
      description: resultChoice[9],
      city: '서울시',
      location: resultChoice[11],
      lat: resultChoice[3].Ma,
      long: resultChoice[3].La,
      buildType: resultChoice[1],
      roomType: resultChoice[2],
      charge: Number(resultChoice[7]),
      animalYn: 'Y',
      totalMembers: 5,
      imageUrl: resultChoice[10],
      convenienceId: resultChoice[6],
    }),
  });
}

// name, description, city, location, lat, long, buildType, roomType, charge, animalYn,
//totalMembers, imageUrl, convenienceId

function GotoStep({ step, onChange, resultChoice }) {
  switch (step) {
    case 1:
      return <Hosting onChange={onChange} resultChoice={resultChoice} />;
    case 2:
      return <Hosting2 onChange={onChange} resultChoice={resultChoice} />;
    case 3:
      return <Hosting3 onChange={onChange} resultChoice={resultChoice} />;
    case 4:
      return <Hosting4 onChange={onChange} resultChoice={resultChoice} />;
    case 5:
      return <Hosting5 onChange={onChange} resultChoice={resultChoice} />;
    case 6:
      return <Hosting9 onChange={onChange} resultChoice={resultChoice} />;
    case 7:
      return <Hosting7 onChange={onChange} resultChoice={resultChoice} />;
    case 8:
      return <Hosting8 onChange={onChange} resultChoice={resultChoice} />;
    case 9:
      return (
        <Hosting6
          onChange={onChange}
          resultChoice={resultChoice}
          Upload={async e => {
            let temp = await uploadImage(e);
            console.log('ddd', imageURL);
            onChange(imageURL);
          }}
        />
      );

    default:
      console.log('invalid number');
  }
}

function HostingLayout() {
  const [step, setStep] = useState(1);
  const [resultChoice, setResultChoice] = useState({});
  const [flag, setFlag] = useState(0);
  const arr = useRef([]);

  // const uploadImage = () => {
  //   const formData = new FormData();
  //   const fileField = document.getElementsByClassName('upload');

  //   formData.append('image', fileField.files[0]);

  //   fetch('http://localhost:8000/aws-s3', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log('성공:', result);
  //       //result + 숙소 정보 -> fetch() -> 백엔드
  //     });
  // };

  const onChange = e => {
    if (step === 3) {
      setResultChoice({ ...resultChoice, 3: e[3], 11: e[11] });
    } else if (step === 5) {
      const { value, id } = e.target;
      if (resultChoice.hasOwnProperty(6)) {
        if (resultChoice[6].includes(value)) {
          resultChoice[6] = resultChoice[6].filter(
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
    } else if (step === 9) {
      setResultChoice({ ...resultChoice, 10: e });
    } else {
      const { value, id } = e.target;
      // console.log('aelse', e.target);
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
    if (currentStep < 9) {
      return (
        <BtnRight type="button" onClick={_next}>
          다음
        </BtnRight>
      );
    } else {
      return (
        <BtnRight
          onClick={() => {
            gotoDB(resultChoice);
          }}
          type="button"
        >
          완료
        </BtnRight>
      );
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
  console.log('step :', step);
  console.log('result :', resultChoice);
  console.log(resultChoice);
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
