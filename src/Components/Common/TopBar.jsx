import React from 'react';
import styled from 'styled-components';
import iconLogo from '../../Assets/Icon/logo-text.png';
import iconArrow from '../../Assets/Icon/icon-arrow-left.png';
import iconMore from '../../Assets/Icon/icon-more-vertical.png';
import iconLogout from '../../Assets/Icon/icon-logout.png';

// 더보기 아이콘
const MoreBtn = () => {
  return <TopIcon src={iconMore} alt="더보기" />;
};

// 로그아웃 아이콘
const LogoutBtn = () => {
  return <TopIcon src={iconLogout} alt="더보기" />;
};

// 검색 상단바
const SearchBar = () => {
  return (
    <>
      <TopInp placeholder="행사 검색" />
    </>
  );
};

// 최종 표시될 상단바
const TopBar = props => {
  return (
    <>
      <Header>
        {/* main 로고, 뒤로가기 아이콘 중 선택 */}
        <h1>
          {props.barType === 'Arrow' ? (
            <TopIcon src={iconArrow} alt="뒤로가기" />
          ) : (
            <img src={iconLogo} alt="쇼!인서울 피드" />
          )}
        </h1>
        <button></button>
      </Header>
    </>
  );
};

export default TopBar;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 390px;
  height: 48px;
  border-bottom: solid 2px #dbdbdb;
  h1 {
    margin: auto auto auto 16px;
  }
  button {
    all: unset;
  }
`;

const TopIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TopInp = styled.input`
  all: unset;
  width: 347px;
  height: 32px;
  background-color: #f2f2f2;
  border-radius: 30px;
  margin: auto;
  &::placeholder {
    color: #c4c4c4;
    padding: 10px 0 0 15px;
  }
`;
