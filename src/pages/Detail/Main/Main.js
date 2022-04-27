import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginModal from '../../../components/Modal/LoginModal';
import ImageModal from './ImageModal';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';

function Main(props) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [imageUrlArray, setImageUrlArray] = useState([]);
  const { name, district, neighborhood, login, token, location } = props;

  const loginModalHandler = () => {
    !isLoginModalOpen ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
  };

  // 숙소 이미지 받아오기
  useEffect(() => {
    fetch(
      `http://localhost:8000/accommodations/images?accommodationsId=${location.state}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(result => {
        setImageUrlArray(result.accommodationsImages[0].image_url);
      });
  }, []);

  useEffect(() => {
    setImageUrlArray(imageUrlArray);
  }, [imageUrlArray]);

  // wishList 받아오기
  useEffect(() => {
    fetch(`http://localhost:8000/wish?accommodationsId=${location.state}`, {
      method: 'GET',
      headers: { accessToken: token },
    })
      .then(res => res.json())
      .then(result => {
        result.wish[0].wish_yn === 'Y' ? setIsSaved(true) : setIsSaved(false);
      });
  }, []);

  // wishList 등록
  const postWishList = () => {
    fetch('http://localhost:8000/wish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken: token,
        accommodationsId: location.state,
      }),
    })
      .then(res => res.json())
      .then(result => {
        // console.log('token', token);
        console.log(result);
        setIsSaved(true);
      });
  };

  // wishList 삭제
  const deleteWishList = () => {
    fetch(`http://localhost:8000/wish?accommodationsId=${location.state}`, {
      method: 'DELETE',
      headers: { accessToken: token },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setIsSaved(false);
      });
  };

  return (
    <Wrapper>
      {/* <ImageModal /> */}
      {isLoginModalOpen && <LoginModal loginModalHandler={loginModalHandler} />}
      <div>
        <MainTitle>{name}</MainTitle>
        <InfoWrapper>
          <BnbInfo>
            <div>
              <FaStar className="faStar" color="#ff385c" />
            </div>
            <span>4.61</span>·<span>후기 33개</span>·
            <span>{`${district}, ${neighborhood}`}</span>
          </BnbInfo>
          <SaveBtn
            onClick={() => {
              if (!login) {
                loginModalHandler();
              } else {
                if (isSaved) {
                  deleteWishList();
                } else {
                  postWishList();
                }
              }
            }}
          >
            {isSaved ? (
              <FaHeart className="icons" style={{ color: 'red' }} />
            ) : (
              <FaRegHeart className="icons" />
            )}
            <span>{isSaved ? '저장 목록' : '저장'}</span>
          </SaveBtn>
        </InfoWrapper>
        <ImgWrapper>
          <FirstBox>
            <MainImgBox>
              <img alt="main" src={imageUrlArray[0]} />
            </MainImgBox>
          </FirstBox>
          <SecondBox>
            <div>
              <MainImgBox>
                <img alt="main" src={imageUrlArray[1]} />
              </MainImgBox>
            </div>
            <div>
              <MainImgBox>
                <img alt="main" src={imageUrlArray[2]} />
              </MainImgBox>
            </div>
            <div>
              <MainImgBox>
                <img alt="main" src={imageUrlArray[3]} />
              </MainImgBox>
            </div>
            <div>
              <MainImgBox>
                <img alt="main" src={imageUrlArray[4]} />
              </MainImgBox>
            </div>
          </SecondBox>
        </ImgWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
`;

const MainTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 15px;
  margin-bottom: 20px;

  & > div:last-child {
    display: flex;
    align-items: center;
    // border: 1px solid black;

    .icons {
      vertical-align: top;
      padding-bottom: 2px;
      // border: 1px solid black;
    }
    & > span {
      margin-left: 5px;
      vertical-align: bottom;
      // border: 1px solid black;
    }
  }
`;

const BnbInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0px 5px;
    vertical-align: bottom;
  }

  & > div {
    .faStar {
      color: #ff385c;
    }
  }
`;

const SaveBtn = styled.button`
  display: flex;
  padding: 8px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .icons {
    margin-right: 5px;
  }
  span {
    text-decoration: underline;
  }
`;
const ImgWrapper = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;
`;

const FirstBox = styled.div`
  width: 50%;
  margin-right: 5px;
`;

const SecondBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  & > div {
    width: 50%;
    height: 50%;
    &:nth-child(2) {
      margin-bottom: 5px;
    }
    &:first-child,
    &:nth-child(3) {
      padding-right: 5px;
    }
  }
`;

const MainImgBox = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    &:hover {
      opacity: 0.8;
      transition: all 0.5s;
      cursor: pointer;
    }
  }
`;

export default Main;
