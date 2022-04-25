import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// 컴포넌트 불러오기
import Main from './Main.js';
import InfoText from './Info/InfoText';
import InfoCalender from './Info/InfoCalendar.js';
import InfoConvenience from './Info/InfoConvenience';
import SideBar from './SideBar/SideBar.js';
import ReviewRating from './Review/ReviewRating.js';
import Review from './Review/Review.js';
import MapInfo from './Map.js';
import HostInfo from './HostInfo.js';
import Notice from './Notice.js';

function Detail() {
  const [reviewArray, setReviewArray] = useState([]);

  // Calendar
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [dateDeleted, setDateDeleted] = useState(false);
  const [dateDiff, setDateDiff] = useState(0);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateDeleted(true);
    handleDateDiff();
  };

  const deleteDate = () => {
    setStartDate(null);
    setEndDate(null);
    setDateDeleted(false);
  };

  const handleDateDiff = () => {
    if (startDate !== null && endDate !== null) {
      console.log(
        (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24
      );
    }
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
        // console.log('reviewArray', reviewArray);
      });
  }, []);

  return (
    <Wrapper>
      <Main />
      <InfoSection>
        <InfoWrapper>
          <InfoText />
          <InfoConvenience />
          <InfoCalender
            start={startDate}
            end={endDate}
            change={onChange}
            deleteDate={deleteDate}
          />
        </InfoWrapper>
        <SideBar
          start={startDate}
          end={endDate}
          change={onChange}
          deleteDate={deleteDate}
          dateDeleted={dateDeleted}
        />
      </InfoSection>
      <ReviewSection>
        <ReviewRating />
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
      <Notice />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
`;
const InfoSection = styled.section`
  margin: 50px 0px;
  display: flex;
`;

const InfoWrapper = styled.div`
  width: 60%;
`;

const ReviewSection = styled.div`
  margin: 0 0px;
`;

const ReviewWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export default Detail;
