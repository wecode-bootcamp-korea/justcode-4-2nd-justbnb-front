import React, { useEffect, useState } from 'react';
import DatePickerRangeController from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Review from './Review.js';
import InfoSideBar from './InfoSideBar.js';
import MapInfo from './Map.js';
import HostInfo from './HostInfo.js';
import Rules from './Rules.js';

import { IoLocationOutline } from 'react-icons/io5';
import { VscKey } from 'react-icons/vsc';
import { BsBookmark } from 'react-icons/bs';
import { GiBarbecue } from 'react-icons/gi';
import {
  FaStar,
  FaSwimmingPool,
  FaWifi,
  FaTv,
  FaCar,
  FaBath,
  FaRegHeart,
} from 'react-icons/fa';
import {
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
} from './DetailStyled.js';

function Detail() {
  const [reviewArray, setReviewArray] = useState([]);

  // Date 라이브러리
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // 숙소 데이터 받아오기
  useEffect(() => {
    fetch('/data/minji/detail.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
      });
  }, []);

  // 리뷰 데이터 받아오기
  useEffect(() => {
    fetch('/data/minji/review.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setReviewArray(result);
        console.log('reviewArray', reviewArray);
      });
  }, []);

  return (
    <div>
      <MainSection>
        <div>
          <MainTitle>*명동역 도보5분* 123 Guesthouse Single room</MainTitle>
          <InfoWrapper>
            <BnbInfo>
              <div>
                <FaStar className="faStar" color="#ff385c" />
              </div>
              <span>4.61</span>·<span>후기 33개</span>·
              <span>중구, 서울, 한국</span>
            </BnbInfo>
            <div>
              <FaRegHeart className="icons" />
              <span>저장</span>
            </div>
          </InfoWrapper>
          <ImgWrapper>
            <MainImgBox>
              <img alt="main" src="/images/thump/home1.jpg" />
            </MainImgBox>
            <div>
              <MainImgBox>
                <img alt="main" src="./images/thump/home1.jpg" />
              </MainImgBox>
              <MainImgBox>
                <img alt="main" src="./images/thump/home1.jpg" />
              </MainImgBox>
            </div>
            <div>
              <MainImgBox>
                <img alt="main" src="/images/thump/home1.jpg" />
              </MainImgBox>
              <MainImgBox>
                <img alt="main" src="/images/thump/home1.jpg" />
              </MainImgBox>
            </div>
          </ImgWrapper>
        </div>
      </MainSection>
      <InfoSection>
        <InfoText>
          <InfoTitle>
            <div>
              <h2>수지님이 호스팅하는 콘도의 개인실</h2>
              <span>최대 인원 1명 · 원룸침대 1개 · 욕실 1개</span>
            </div>
            <div>
              <img alt="user" src="/images/thump/user.jpeg" />
            </div>
          </InfoTitle>
          <InfoPoint>
            <div>
              <IoLocationOutline className="icons" />
              <div>
                <div>훌륭한 숙소 위치</div>
                <span>
                  최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.
                </span>
              </div>
            </div>
            <div>
              <VscKey className="icons" />
              <div>
                <div>순조로운 체크인 과정</div>
                <span>
                  최근 숙박한 게스트 중 95%가 체크인 과정 별점 5점을 준
                  숙소입니다.
                </span>
              </div>
            </div>
            <div>
              <BsBookmark className="icons" />
              <div>
                <div>무선 인터넷 </div>
                <span>게스트가 자주 찾는 편의시설</span>
              </div>
            </div>
          </InfoPoint>
          <InfoDescription>
            명동역에서 5분거리에 위치한 게스트하우스입니다
          </InfoDescription>

          <InfoConvenience>
            <h2>숙소 편의시설</h2>
            <div>
              <div>
                <FaSwimmingPool className="icons" />
                <span>수영장</span>
              </div>
              <div>
                <GiBarbecue className="icons" />
                <span>바비큐 그릴</span>
              </div>
              <div>
                <FaWifi className="icons" />
                <span>와이파이</span>
              </div>
              <div>
                <FaTv className="icons" />
                <span>TV</span>
              </div>
              <div>
                <FaCar className="icons" />
                <span>주차공간</span>
              </div>
              <div>
                <FaBath className="icons" />
                <span>욕조</span>
              </div>
            </div>
          </InfoConvenience>
          <InfoCalender>
            <h2>체크인 날짜를 선택해주세요</h2>
            <span>여행 날짜를 입력하여 정확한 요금을 확인하세요.</span>
            <DatePickerRangeController
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              monthsShown={2}
              selectsRange
              inline
            />
            <button type="button">날짜 지우기</button>
          </InfoCalender>
        </InfoText>
        <InfoSideBar />
      </InfoSection>
      <ReviewSection>
        <header>
          <div>
            <FaStar className="icons" color="#ff385c" />
          </div>
          <span>4.61 · 후기 33개</span>
        </header>
        <div className="ratings">
          <div>
            <div>청결도</div>
            <div className="wrapper">
              <div className="ratingBar">
                <div className="content" />
              </div>
              <div>4.5</div>
            </div>
          </div>
          <div>
            <div>정확성</div>
            <div className="wrapper">
              <div className="ratingBar">
                <div className="rating" />
              </div>
              <div>4.5</div>
            </div>
          </div>
          <div>
            <div>의사소통</div>
            <div className="wrapper">
              <div className="ratingBar">
                <div className="rating" />
              </div>
              <div>4.5</div>
            </div>
          </div>
          <div>
            <div>위치</div>
            <div className="wrapper">
              <div className="ratingBar">
                <div className="rating" />
              </div>
              <div>4.5</div>
            </div>
          </div>
          <div>
            <div>체크인</div>
            <div className="wrapper" ㄴ>
              <div className="ratingBar">
                <div className="rating" />
              </div>
              <div>4.5</div>
            </div>
          </div>
          <div>
            <div>가격 대비 만족도</div>
            <div className="wrapper">
              <div className="ratingBar">
                <div className="rating" />
              </div>
              <div>4.5</div>
            </div>
          </div>
        </div>
        <ReviewWrapper>
          {reviewArray.map(el => {
            return (
              <Review
                id={el.id}
                date={el.date}
                imgUrl={el.imgUrl}
                name={el.name}
                content={el.content}
              />
            );
          })}
        </ReviewWrapper>
      </ReviewSection>
      <MapInfo />
      <HostInfo />
      <Rules />
    </div>
  );
}

export default Detail;
