import { useState } from 'react';
import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function ImageModal(props) {
  const { imageUrlArray, imageModalHandler } = props;
  const [arrayIndex, setArrayIndex] = useState(0);

  return (
    <ModalBackground>
      <Wrapper>
        <ContentWrapper>
          <Header>
            <CloseBtn onClick={imageModalHandler}>
              <AiOutlineClose className="icons" />
              <span>닫기</span>
            </CloseBtn>
            <ContentNumber> {`${arrayIndex + 1} / 5`}</ContentNumber>
            <IconsWrapper></IconsWrapper>
          </Header>
          <Body>
            <PrevButton
              onClick={() => {
                setArrayIndex(arrayIndex - 1);
              }}
              disabled={arrayIndex === 0 ? 'disabled' : null}
            >
              <FaAngleLeft className="icons" />
            </PrevButton>
            <ImgWrapper>
              <img alt="home" src={imageUrlArray[arrayIndex]} />
            </ImgWrapper>
            <NextButton
              onClick={() => {
                setArrayIndex(arrayIndex + 1);
              }}
              disabled={arrayIndex === 4 ? 'disabled' : null}
            >
              <FaAngleRight className="icons" />
            </NextButton>
          </Body>
        </ContentWrapper>
      </Wrapper>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 999;
`;

const Wrapper = styled.section`
  height: 100%;
  color: white;
`;

const ContentWrapper = styled.div`
  height: 100%;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 50px;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .icons {
    margin-right: 5px;
  }
`;
const ContentNumber = styled.div``;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 50px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 80%;
  margin: 0 100px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const IconsWrapper = styled.div`
  .icons:first-child {
    margin-right: 15px;
  }
`;

const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  /* height: 45px; */
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  &:disabled {
    visibility: hidden;
  }
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
  &:disabled {
    visibility: hidden;
  }
`;

export default ImageModal;
