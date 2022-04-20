import styled from 'styled-components';
import { FaStar, FaAngleDown } from 'react-icons/fa';

function InfoSideBar() {
  return (
    <Wrapper>
      <div>
        <h2>
          요금을 확인하려면 날짜를 <br />
          입력하세요.
        </h2>
        <div>
          <div>
            <FaStar className="icons" color="#ff385c" />
          </div>
          <div>
            <span>4.61</span> · <span>후기 33개</span>
          </div>
        </div>
        <form className="inputWrapper">
          <div>
            <div>
              <div className="checkIn">
                <span>체크인</span>
                <input placeholder="날짜 추가" />
              </div>
              <div className="checkOut">
                <span>체크아웃</span>
                <input placeholder="날짜 추가" />
              </div>
            </div>
            <div className="guest">
              <div>
                <span>인원</span>
                <span>게스트 1명</span>
              </div>
              <FaAngleDown />
            </div>
          </div>
          <button>예약하기</button>
        </form>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 40%;
  padding-left: 10%;

  & > div {
    position: sticky;
    top: 0;
    padding: 20px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.05);
    h2 {
      font-size: 22px;

      margin-bottom: 8px;
    }
    & > div {
      display: flex;
      .icons {
        margin-right: 5px;
        font-size: 13px;
      }
      span {
        font-size: 14px;
        vertical-align: middle;
        font-weight: 500;
      }
    }
  }

  .inputWrapper {
    margin-top: 20px;

    & > div {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      & > div {
        display: flex;
        .checkIn {
          border-right: 1px solid rgba(0, 0, 0, 0.2);
        }
        .checkIn,
        .checkOut {
          display: flex;
          flex-direction: column;
          padding: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          width: 50%;
          span {
            font-size: 12px;
            font-weight: 500;
            margin-left: 2px;
          }
          input {
            outline: none;
            border: none;
            padding: 5px 0;
            &::placeholder {
              font-size: 14px;
              color: rgba(0, 0, 0, 0.5);
            }
          }
        }
      }
      .guest {
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        span:first-child {
          display: block;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 0;
        }
        span:last-child {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  button {
    width: 100%;
    border: none;
    padding: 15px 0;
    margin: 15px 0;
    border-radius: 10px;
    background-color: #e52454;
    color: white;
    font-size: 15px;
    font-weight: 500;
  }
`;

export default InfoSideBar;
