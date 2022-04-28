import styled from 'styled-components';
import {
  IoMdClose,
  IoMdRadioButtonOff,
  IoMdAdd,
  IoMdRemove,
} from 'react-icons/io';
import { useRef, useEffect } from 'react';

function SideBarHeadCount(props) {
  const {
    open,
    close,
    handleHeadCount,
    headCount,
    total_members,
    setCountModalOpen,
    petCount,
    setPetCount,
  } = props;

  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setCountModalOpen(false);
    } else {
      setCountModalOpen(true);
    }
  };
  return (
    <Wrapper ref={wrapperRef} style={{ display: open ? 'block' : 'none' }}>
      <ListWrapper>
        <List>
          <Text>인원</Text>
          <Count>
            <Button
              onClick={() => {
                handleHeadCount(headCount - 1);
              }}
              type="button"
              disabled={headCount === 1 ? 'disabled' : null}
            >
              <IoMdRemove className="icons" />
            </Button>
            <Num>{headCount}</Num>
            <Button
              onClick={() => {
                handleHeadCount(headCount + 1);
              }}
              type="button"
              disabled={headCount >= total_members ? 'disabled' : null}
            >
              <IoMdAdd className="icons" />
            </Button>
          </Count>
        </List>
        <List>
          <Text>반려동물</Text>
          <Count>
            <Button
              type="button"
              onClick={() => {
                setPetCount(true);
              }}
              style={{ opacity: petCount ? null : '0.3' }}
            >
              <IoMdRadioButtonOff className="icons" />
            </Button>
            <Num></Num>
            <Button
              type="button"
              onClick={() => {
                setPetCount(false);
              }}
              style={{ opacity: petCount ? '0.3' : null }}
            >
              <IoMdClose className="icons" />
            </Button>
          </Count>
        </List>
      </ListWrapper>
      <ButtonWrapper>
        <p>
          반려동물을 3마리 이상 동반하는 경우, <br />
          반드시 호스트에게 알려주세요.
        </p>
        <Close
          type="button"
          onClick={() => {
            close();
          }}
        >
          닫기
        </Close>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 87%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const ListWrapper = styled.div`
  width: 100%;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
  padding: 20px 0px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Text = styled.div``;

const Count = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
  &:disabled {
    opacity: 0.2;
  }
  .icons {
    vertical-align: middle;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Num = styled.div`
  width: 10px;
  display: flex;
  align-items: center;
  margin: 0 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  p {
    margin-left: 10px;
    font-size: 13px;
  }
`;

const Close = styled.button`
  padding: 10px;
  background-color: white;
  border: none;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

export default SideBarHeadCount;
