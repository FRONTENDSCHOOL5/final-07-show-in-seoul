import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import TopBarBtn from './TopBarBtn';
import iconLogo from '../../Assets/Icon/logo-text.svg';
import iconArrow from '../../Assets/Icon/icon-arrow-left.svg';
import iconLogout from '../../Assets/Icon/icon-logout.svg';
import iconMore from '../../Assets/Icon/icon-more-vertical.svg';

// 왼쪽 요소 : 미입력시 기본 값 쇼인서울 로고
const LeftEl = ({ leftEl }) => {
  if (leftEl === 'back') {
    return <TopBarBtn icon={iconArrow} altTxt={'뒤로가기'} />;
  } else if (leftEl === 'search') {
    return <input placeholder="행사 검색" />;
  } else {
    return <TopBarBtn id="showLogo" icon={iconLogo} altTxt={'쇼!인서울 피드'} />;
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
const TopBar = ({ leftEl, rightEl }) => {
  return (
    <>
      <SHeader>
        <LeftEl leftEl={leftEl} />
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
  #showLogo {
    width: 103px;
  }
  input {
    width: 100%;
    height: 32px;
    background-color: #f2f2f2;
    border-radius: 30px;
    &::placeholder {
      color: #c4c4c4;
      padding: 10px 0 0 15px;
    }
  }
`;
