import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
// 컴포넌트 불러오기
import Main from './Main/Main.js';
import InfoText from './Info/InfoText';
import InfoCalender from './Info/InfoCalendar.js';
import InfoConvenience from './Info/InfoConvenience';
import SideBar from './SideBar/SideBar.js';
import ReviewRating from './Review/ReviewRating.js';
import Review from './Review/Review.js';
import MapInfo from './Map.js';
import HostInfo from './HostInfo.js';
import Notice from './Notice.js';
import Header from '../../components/Nav/PageNav';
import Footer from '../../components/Footer.js';

function Detail() {
  const [accommodation, setAccommodation] = useState({});
  const [reviewArray, setReviewArray] = useState([]);

  // Calendar
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selected, setSelected] = useState(null);

  const [dateDeleted, setDateDeleted] = useState(false);
  const [dateDiff, setDateDiff] = useState(0);

  useEffect(() => {
    setSelected(startDate);
  }, [startDate]);
  useEffect(() => {
    setSelected(endDate);
  }, [endDate]);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateDeleted(true);
  };

  const deleteDate = () => {
    setStartDate(null);
    setEndDate(null);
    setDateDeleted(false);
  };

  useEffect(() => {
    if (endDate !== null) {
      setDateDiff(
        Math.ceil(
          (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24
        )
      );
    }
  }, [endDate]);

  const location = useLocation();
  // 숙소 데이터 받아오기
  useEffect(() => {
    fetch(`http://localhost:8000/accommodations/${location.state}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setAccommodation(result.accommodations[0]);
      });
  }, []);

  useEffect(() => {
    setAccommodation(accommodation);
  }, [accommodation]);

  // 리뷰 데이터 받아오기
  useEffect(() => {
    fetch('/data/minji/review.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setReviewArray(result);
      });
  }, []);

  // 로그인 유무 확인하기
  const [login, setLogin] = useState(false);
  const token = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : '';

  useEffect(() => {
    token.length > 1 ? setLogin(true) : setLogin(false);
  }, [token]);

  return (
    <div>
      {/* <Header /> */}
      <Wrapper>
        <Main
          location={location}
          key={accommodation.id}
          name={accommodation.accommodations_name}
          district={accommodation.district}
          neighborhood={accommodation.neighborhood}
          login={login}
          token={token}
        />
        <InfoSection>
          <InfoWrapper>
            <InfoText
              name={accommodation.host_name}
              build_type={accommodation.build_type}
              room_type={accommodation.room_type}
              description={accommodation.description}
              total_members={accommodation.total_members}
            />
            <InfoConvenience location={location} />
            <InfoCalender
              selected={selected}
              start={startDate}
              end={endDate}
              change={onChange}
              deleteDate={deleteDate}
              dateDiff={dateDiff}
              district={accommodation.district}
            />
          </InfoWrapper>
          <SideBar
            login={login}
            token={token}
            location={location}
            selected={selected}
            start={startDate}
            end={endDate}
            change={onChange}
            deleteDate={deleteDate}
            dateDiff={dateDiff}
            dateDeleted={dateDeleted}
            charge={accommodation.charge}
            total_members={accommodation.total_members}
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
        <MapInfo
          city={accommodation.city}
          district={accommodation.district}
          neighborhood={accommodation.neighborhood}
          lat={accommodation.lat}
          long={accommodation.long}
        />
        <HostInfo host_name={accommodation.host_name} />
        <Notice />
      </Wrapper>
      <Footer />
    </div>
  );
}

const Wrapper = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding-top: 100px;
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
