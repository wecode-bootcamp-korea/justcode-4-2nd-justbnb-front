import styled from 'styled-components';

const MainSection = styled.section`
  padding-top: 80px;
  margin: 0 80px;
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

// InfoSection

const InfoSection = styled.section`
  display: flex;
  margin: 50px 80px;
`;

const InfoText = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  div:first-child {
    h2 {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
  div:last-child {
    width: 56px;
    height: 56px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`;

const InfoPoint = styled.div`
  padding: 15px 0;
  & > div {
    display: flex;
    padding: 15px 0;
    div:first-child {
      margin-bottom: 5px;
      font-size: 16px;
      font-weight: 500;
    }
    span {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .icons {
    font-size: 25px;
    margin-right: 10px;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const InfoDescription = styled.div`
  padding: 32px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const InfoConvenience = styled.div`
  padding: 50px 0;
  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    font-size: 17px;
    div {
      display: flex;
      align-items: center;
      width: 50%;
      margin-bottom: 10px;
      .icons {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const InfoCalender = styled.div`
  padding: 50px 0;
  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  span {
    display: block;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }
`;

const ReviewSection = styled.section`
  padding-top: 40px;
  padding-bottom: 10px;
  margin: 0 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  header {
    display: flex;
    font-size: 22px;
    div {
      .icons {
        margin-right: 5px;
        vertical-align: top;
      }
    }
    span {
      display: block;
      padding-top: 2px;
    }
  }

  .ratings {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 30px 0;
    width: 100%;

    & > div {
      display: flex;
      justify-content: space-between;
      width: 50%;
      padding: 10px 40px 10px 10px;
      .wrapper {
        display: flex;
        align-items: center;
        .ratingBar {
          width: 100px;
          height: 5px;
          background-color: black;
          & + div {
            margin-left: 10px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

const ReviewWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
export {
  MainSection,
  MainTitle,
  InfoWrapper,
  BnbInfo,
  ImgWrapper,
  MainImgBox,
  InfoSection,
  InfoText,
  InfoTitle,
  InfoPoint,
  InfoDescription,
  InfoConvenience,
  InfoCalender,
  ReviewSection,
  ReviewWrapper,
};
