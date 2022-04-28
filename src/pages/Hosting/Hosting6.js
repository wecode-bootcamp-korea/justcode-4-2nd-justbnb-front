import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlinePicture } from 'react-icons/ai';

export default function Hosting6({ onChange, resultChoice, Upload }) {
  const [files, setFiles] = useState([]);
  const [opac, setOpac] = useState(100);

  const Preview = e => {
    console.log(e);
    const files = Array.from(e.target.files);
    console.log(e.target.files);
    // const files = e.target.files;
    const newFiles = files.map(file => {
      return URL.createObjectURL(file);
    });
    setFiles(newFiles);
  };

  // const UploadCancel = e => {
  //   return setFiles(null);
  // };

  useEffect(() => {
    if (files.length !== 0) {
      setOpac(0);
    }
  }, [files]);

  // const upload = () => {
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

  const Text2 = styled.div`
    font-size: 1.7vw;
    font-weight: bold;
    opacity: ${opac};
  `;

  const Text3 = styled.div`
    font-size: 1.5vw;
    margin: 12px;
    opacity: ${opac};
    /* visibility: none; */
  `;
  const LabelDescription = styled.div`
    /* position: absolute; */
    margin: 1vw;
    font-weight: bold;
    opacity: ${opac};
    text-decoration: underline;
  `;

  const PictureIcon = styled.div`
    font-size: 5vw;
    opacity: ${opac};
  `;
  const Line = styled.div`
    /* border: 1px dashed rgb(176, 176, 176) !important; */
    /* outline: 1px dashed rgb(176, 176, 176) !important; */
    /* outline: 1px dashed black; */
    width: fit-content;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 350px 150px 0 150px; */
    padding: 12vw 5vw 1vw 5vw;
    margin: auto auto 7vw auto;
    overflow-y: auto;
    /* opacity: ${opac}; */
  `;
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          이제 숙소 사진을 올릴
          <br />
          차례입니다.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <HeaderButton className="help">도움말</HeaderButton>
          <HeaderButton>나가기</HeaderButton>
        </Header>
        <Body>
          {/* {console.log(files.length)} */}
          <Line>
            <PictureIcon>
              <AiOutlinePicture />
            </PictureIcon>
            <Text2>멋진 숙소 사진을 올려주세요!</Text2>
            <Text3>최대 5장까지 업로드하실 수 있습니다.</Text3>

            <Label>
              <LabelDescription>사진 올리기</LabelDescription>
              <UploadImage
                id="10"
                className="upload"
                onChange={e => {
                  Upload(e);
                  Preview(e);
                }}
                type="file"
                multiple="multiple"
              />
            </Label>
            <Pictures>
              {files.map((file, index) => {
                if (index < 5) {
                  // 5장을 넘기지 않게 하기 위해
                  return <Image key={null} src={file} />;
                }
              })}
            </Pictures>
          </Line>
          {/* <Line2> */}

          {/* <Empty onChange={UploadCancel}>사진 비우기</Empty> */}
          {/* </Line2> */}
          {/* -------------------------------------------------------------------- */}
          {/* <Line>
            <Pictures>
              {files.map((file, index) => {
                if (index < 5) {
                  // 5장을 넘기지 않게 하기 위해
                  return <Image key={null} src={file} />;
                }
              })}
            </Pictures>
            <PictureIcon>
              <AiOutlinePicture />
            </PictureIcon>
            <Text2>멋진 숙소 사진을 올려주세요!</Text2>
            <Text3>최대 5장까지 업로드하실 수 있습니다.</Text3>
            <UploadImage onChange={Upload} type="file" multiple="multiple" />
          </Line> */}
          {/* -------------------------------------------------------------------- */}
        </Body>
      </Container2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: rgb(217, 18, 100);
  background: linear-gradient(
    180deg,
    rgba(217, 18, 100, 0.9598214285714286) 0%,
    rgba(165, 4, 166, 1) 52%,
    rgba(55, 8, 159, 1) 100%
  );
  line-height: 3.5em;
  img {
    width: 80px;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 40px;
  }
`;

const Text1 = styled.div`
  width: 85%;
  color: white;
  font-weight: 530;
  font-size: 48.5px;
`;

const Container2 = styled.section`
  width: 50%;
  /* border: 5px solid green; */
  height: 80vh;
  position: relative;

  flex-wrap: wrap;
  flex-direction: column;
  z-index: 999;
`;

const Header = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  padding: 30px 40px;
  .help {
    margin-right: 15px;
    opacity: 0.3;
  }
`;
const HeaderButton = styled.button`
  padding: 7px 15px;
  background-color: rgba(155, 149, 167, 0.1);
  border: 1px solid rgba(155, 149, 167, 0);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Prev = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 30px;
`;

const Next = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: white;
  padding: 13px 23px;
  margin-right: 30px;
  border-radius: 8px;
  border: 1px solid rgba(155, 149, 167, 0.1);
  background-color: black;
`;

const Line2 = styled.div`
  /* outline: 1px dashed rgb(176, 176, 176) !important; */
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto 7vw auto;
  /* overflow-y: auto; */
`;

const UploadImage = styled.input`
  /* border: 1px solid red; */
  position: absolute;
  /* margin-top: 10px; */
  /* width: 50%; */
  /* pointer-events: none; */
  cursor: pointer;
  opacity: 0;
`;

const Label = styled.label`
  width: 40%;
  /* border: 1px black solid; */
  display: flex;
  justify-content: center;
  cursor: pointer;
  margin: 1vw 0 8vw 0;
`;

const Image = styled.img`
  object-fit: cover;
  width: 90%;
  height: 10vw;
  margin: 5px;
`;

const Pictures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
`;

const Empty = styled.button`
  font-size: 1vw;
`;
