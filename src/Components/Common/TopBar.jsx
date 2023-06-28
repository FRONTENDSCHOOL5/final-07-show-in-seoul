import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import TopBarBtn from './TopBarBtn';
import SearchInput from '../Search/SearchInput';
import iconLogo from '../../Assets/Icon/logo-text.svg';
import iconArrow from '../../Assets/Icon/icon-arrow-left.svg';
import iconLogout from '../../Assets/Icon/icon-logout.svg';
import iconMore from '../../Assets/Icon/icon-more-vertical.svg';
import { useNavigate } from 'react-router-dom';

// 왼쪽 요소 : 미입력시 기본 값 쇼인서울 로고
const LeftEl = ({ leftEl, setKeyword }) => {
  // 뒤로가기 기능
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  if (leftEl === 'back') {
    return <TopBarBtn icon={iconArrow} altTxt={'뒤로가기'} onClick={handleClick} />;
  } else if (leftEl === 'search') {
    return <SearchInput setKeyword={setKeyword} />;
  } else {
    return <TopBarBtn cursor="unset" id="showLogo" icon={iconLogo} altTxt={'쇼!인서울 피드'} />;
  }
};

// 오른쪽 요소 : 미입력시 기본값 null
const RightEl = ({ rightEl }) => {
  if (rightEl === 'newPost') {
    return (
      <Button color="white" active="active">
        글쓰기
      </Button>
    );
  } else if (rightEl === 'save') {
    return <Button disabled>저장</Button>;
  } else if (rightEl === 'upload') {
    return <Button size="Small">업로드</Button>;
  } else if (rightEl === 'logout') {
    return <TopBarBtn icon={iconLogout} altTxt={'로그아웃'} />;
  } else if (rightEl === 'more') {
    return <TopBarBtn icon={iconMore} altTxt={'더보기'} />;
  } else {
    return null;
  }
};

// 최종 표시될 상단바
const TopBar = ({ leftEl, rightEl, setKeyword }) => {
  return (
    <>
      <SHeader>
        <LeftEl leftEl={leftEl} setKeyword={setKeyword} />
        <RightEl rightEl={rightEl} />
      </SHeader>
    </>
  );
};

export default TopBar;

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 48px;
  padding: 0 16px;
  border-bottom: solid 1px var(--gray);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  background-color: #fff;
  #showLogo {
    width: 103px;
  }
  form {
    width: 100%;
    /* padding: 0 0 0 15px; */
    input {
      width: calc(100% - 30px);
      height: 32px;
      background-color: #f2f2f2;
      border-radius: 30px;
      padding: 0 15px;
      &::placeholder {
        color: #c4c4c4;
      }
    }
  }
`;
