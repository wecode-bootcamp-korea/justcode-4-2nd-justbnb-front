import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { IoShieldCheckmarkSharp, IoShieldHalfOutline } from 'react-icons/io5';

function HostInfo(props) {
  return (
    <Wrapper>
      <User>
        <Img>
          <img src="/images/thump/user.jpeg" alt="user" />
        </Img>
        <div>
          <Name>호스트 : {props.host_name}님</Name>
          <Date>회원 가입일 : 2020년 12월</Date>
        </div>
      </User>
      <Text1>
        <div>
          <FaStar className="icons" />
          <span>후기 51개</span>
        </div>
        <div>
          <IoShieldCheckmarkSharp className="icons" />
          <span>본인 인증 완료</span>
        </div>
      </Text1>
      <Text2>
        <div>응답률 : 100%</div>
        <div>응답 시간 : 1시간 이내 </div>
      </Text2>
      <Button>호스트에게 연락하기</Button>
      <Text3>
        <IoShieldHalfOutline className="icons" />
        <div>
          안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 <br />
          송금하거나 대화를 나누지 마세요.
        </div>
      </Text3>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  /* margin: 0 80px; */
  padding: 40px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Img = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 15px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Name = styled.h2`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 500;
`;

const Date = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

const Text1 = styled.div`
  display: flex;
  margin-bottom: 30px;
  div {
    margin-right: 30px;
  }
  .icons {
    margin-right: 10px;
    color: #ff385c;
  }
`;

const Text2 = styled.div`
  margin-bottom: 30px;
  div:first-child {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 30px;
  margin-bottom: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 17px;
`;

const Text3 = styled.div`
  display: flex;
  align-items: center;
  .icons {
    margin-right: 10px;
    font-size: 20px;
  }
  div {
    color: rgba(0, 0, 0, 0.8);
    font-size: 13px;
    line-height: 18px;
  }
`;

export default HostInfo;
