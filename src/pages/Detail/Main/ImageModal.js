import styled from 'styled-components';

import { AiOutlineClose } from 'react-icons/ai';
// import { IoCloseSharp } from 'react-icons/io5';
import { FaRegHeart, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

function ImageModal() {
  return (
    <ModalBackground>
      <Wrapper>
        <Header>
          <CloseBtn>
            <AiOutlineClose className="icons" />
            <span>닫기</span>
          </CloseBtn>
          <ContentNumber>2/36</ContentNumber>
          <IconsWrapper>
            <FiShare className="icons" />
            <FaRegHeart className="icons" />
          </IconsWrapper>
        </Header>
        <Body>
          <ButtonWrapper>
            <PrevButton>
              <FaAngleLeft />
            </PrevButton>
          </ButtonWrapper>
          <ImgWrapper>
            <img alt="home" src="/images/thump/home1.jpg" />
          </ImgWrapper>
          <ButtonWrapper>
            <NextButton>
              <FaAngleRight />
            </NextButton>
          </ButtonWrapper>
        </Body>
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
  padding: 50px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .icons {
    margin-right: 5px;
  }
`;
const ContentNumber = styled.div``;

const IconsWrapper = styled.div`
  .icons:first-child {
    margin-right: 15px;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div``;

const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid white;
  color: white;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 80%;
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
  border: 1px solid white;
  color: white;
`;

export default ImageModal;
