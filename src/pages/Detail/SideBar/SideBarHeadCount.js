import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useRef, useEffect } from 'react';

function SideBarHeadCount(props) {
  const {
    open,
    close,
    handleHeadCount,
    handlePetCount,
    headCount,
    petCount,
    total_members,
    setCountModalOpen,
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
              <FaMinus className="icons" />
            </Button>
            <Num>{headCount}</Num>
            <Button
              onClick={() => {
                handleHeadCount(headCount + 1);
              }}
              type="button"
              disabled={headCount >= total_members ? 'disabled' : null}
            >
              <FaPlus className="icons" />
            </Button>
          </Count>
        </List>
        <List>
          <Text>반려동물</Text>
          <Count>
            <Button
              type="button"
              onClick={() => {
                handlePetCount(petCount - 1);
              }}
              disabled={petCount === 0 ? 'disabled' : null}
            >
              <FaMinus className="icons" />
            </Button>
            <Num>{petCount}</Num>
            <Button
              type="button"
              onClick={() => {
                handlePetCount(petCount + 1);
              }}
            >
              <FaPlus className="icons" />
            </Button>
          </Count>
        </List>
      </ListWrapper>
      <ButtonWrapper>
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
  padding: 20px 10px;
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
  justify-content: flex-end;
`;

const Close = styled.button`
  background-color: white;
  border: none;
  margin: 5px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;

export default SideBarHeadCount;
