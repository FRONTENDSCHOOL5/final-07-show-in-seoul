import React from 'react';
import styled from 'styled-components';
import iconCategory from '../../Assets/Icon/icon-category.svg';
import iconSearch from '../../Assets/Icon/icon-search.svg';
import iconHome from '../../Assets/Icon/icon-home.svg';
import iconPost from '../../Assets/Icon/icon-post.svg';
import iconUser from '../../Assets/Icon/icon-user.svg';
import iconCategoryFill from '../../Assets/Icon/icon-category-fill.svg';
import iconSearchFill from '../../Assets/Icon/icon-search-fill.svg';
import iconHomeFill from '../../Assets/Icon/icon-home-fill.svg';
import iconPostFill from '../../Assets/Icon/icon-post-fill.svg';
import iconUserFill from '../../Assets/Icon/icon-user-fill.svg';
import { Link, useLocation } from 'react-router-dom';

import { atom } from 'recoil';
import { MyAccountName } from '../../Atom/atom';

const BottomNav = () => {
  const GetMyAccountName = atom(MyAccountName);
  // navigation 아이콘 데이터
  const iconList = [
    {
      id: 1,
      title: '카테고리',
      off: iconCategory,
      on: iconCategoryFill,
      link: ['/categorypage', { state: GetMyAccountName }],
    },
    { id: 2, title: '검색', off: iconSearch, on: iconSearchFill, link: ['/searchpage'] },
    { id: 3, title: '홈', off: iconHome, on: iconHomeFill, link: ['/mainpage'] },
    { id: 4, title: '게시판', off: iconPost, on: iconPostFill, link: ['/postpage'] },
    { id: 5, title: '프로필', off: iconUser, on: iconUserFill, link: ['/profiledetailpage'] },
  ];

  // 현재 페이지 경로 확인
  const location = useLocation();
  const path = location.pathname;
  // 현재 페이지 경로가 포함되는 id 추출, 없으면 기본값 3(home)
  let activeIcon = iconList.find(item => item.link.includes(path));
  if (activeIcon !== undefined) {
    activeIcon = activeIcon.id;
  } else {
    activeIcon = 3;
  }

  return (
    <>
      <NavList>
        {iconList.map(icon => {
          return (
            <li key={icon.id}>
              <Link to={icon.link[0]}>
                {/* 현재 activeIcon 번호와 id 가 일치하면 on 아이콘 표시 & p 색상 변경 */}
                <img src={activeIcon === icon.id ? icon.on : icon.off} alt={icon.title} />
                <Title color={activeIcon === icon.id ? '#961F1F' : '#767676'}>{icon.title}</Title>
              </Link>
            </li>
          );
        })}
      </NavList>
    </>
  );
};

export default BottomNav;

const NavList = styled.ul`
  display: flex;
  width: 390px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-top: solid 1px var(--gray);
  position: fixed;
  bottom: 0;
  img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }
`;

const Title = styled.p`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: 400;
`;
