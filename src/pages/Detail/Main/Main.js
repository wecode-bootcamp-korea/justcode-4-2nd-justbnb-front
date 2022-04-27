import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaStar, FaRegHeart } from 'react-icons/fa';

function Main(props) {
  const [imageUrlArray, setImageUrlArray] = useState([]);
  const { name, location } = props;

  useEffect(() => {
    fetch('/data/minji/accommodationsImages.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setImageUrlArray(result.accommodationsImages[0].image_url);
      });
  }, []);

  useEffect(() => {
    setImageUrlArray(imageUrlArray);
  }, [imageUrlArray]);

  return (
    <Wrapper>
      <div>
        <MainTitle>{name}</MainTitle>
        <InfoWrapper>
          <BnbInfo>
            <div>
              <FaStar className="faStar" color="#ff385c" />
            </div>
            <span>4.61</span>·<span>후기 33개</span>·<span>{location}</span>
          </BnbInfo>
          <div>
            <FaRegHeart className="icons" />
            <span>저장</span>
          </div>
        </InfoWrapper>
        <ImgWrapper>
          <MainImgBox>
            <img alt="main" src={imageUrlArray[0]} />
          </MainImgBox>
          <div>
            <MainImgBox>
              <img alt="main" src={imageUrlArray[1]} />
            </MainImgBox>
            <MainImgBox>
              <img alt="main" src={imageUrlArray[2]} />
            </MainImgBox>
          </div>
          <div>
            <MainImgBox>
              <img alt="main" src={imageUrlArray[3]} />
            </MainImgBox>
            <MainImgBox>
              <img alt="main" src={imageUrlArray[4]} />
            </MainImgBox>
          </div>
        </ImgWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  /* margin: 0 80px; */
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

const ImgWrapper = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-left: 5px;
    & > div:first-child {
      margin-bottom: 5px;
    }
    &:first-of-type {
      width: 50%;
      margin: 0px;
    }
  }
`;

const MainImgBox = styled.div`
  width: 100%;
  border-radius: 12px;

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
