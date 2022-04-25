import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

function ReviewRating() {
  return (
    <Wrapper>
      <Header>
        <div>
          <FaStar className="icons" color="#ff385c" />
        </div>
        <span>4.61 · 후기 33개</span>
      </Header>
      <RatingsWrapper>
        <Rating>
          <div>청결도</div>
          <RatingBox>
            <RatingBar>
              <RatingBarContent></RatingBarContent>
            </RatingBar>
            <Text>4.5</Text>
          </RatingBox>
        </Rating>
        <Rating>
          <div>정확성</div>
          <RatingBox>
            <RatingBar>
              <RatingBarContent></RatingBarContent>
            </RatingBar>
            <Text>4.5</Text>
          </RatingBox>
        </Rating>
        <Rating>
          <div>의사소통</div>
          <RatingBox>
            <RatingBar>
              <RatingBarContent></RatingBarContent>
            </RatingBar>
            <Text>4.5</Text>
          </RatingBox>
        </Rating>
        <Rating>
          <div>위치</div>
          <RatingBox>
            <RatingBar>
              <RatingBarContent></RatingBarContent>
            </RatingBar>
            <Text>4.5</Text>
          </RatingBox>
        </Rating>
        <Rating>
          <div>체크인</div>
          <RatingBox>
            <RatingBar>
              <RatingBarContent></RatingBarContent>
            </RatingBar>
            <Text>4.5</Text>
          </RatingBox>
        </Rating>
        <Rating>
          <div>가격 대비 만족도</div>
          <RatingBox>
            <RatingBar>
              <RatingBarContent></RatingBarContent>
            </RatingBar>
            <Text>4.5</Text>
          </RatingBox>
        </Rating>
      </RatingsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const Header = styled.div`
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
`;

const RatingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px 0;
  width: 100%;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 10px 40px 10px 10px;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;
const RatingBar = styled.div`
  width: 100px;
  height: 5px;
  background-color: black;
`;
const RatingBarContent = styled.div``;
const Text = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;
export default ReviewRating;
