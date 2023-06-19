import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

// import { useRecoilState } from 'recoil';
// import { bottomNavIndex } from '../../Atom/atom';

const BottomNav = props => {
  // 현재 선택된 a 태그 id 확인
  const [activeIcon, setActiveIcon] = useState(3);
  // const [bottomNavIndexAtom, setbottomNavIndex] = useRecoilState(bottomNavIndex);

  // navigation 아이콘 데이터
  const iconList = [
    { id: 1, title: '카테고리', off: iconCategory, on: iconCategoryFill, link: '/categorypage' },
    { id: 2, title: '검색', off: iconSearch, on: iconSearchFill, link: '/searchpage' },
    { id: 3, title: '홈', off: iconHome, on: iconHomeFill, link: '/mainpage' },
    { id: 4, title: '게시판', off: iconPost, on: iconPostFill, link: '/postpage' },
    { id: 5, title: '프로필', off: iconUser, on: iconUserFill, link: '/profiledetailpage' },
  ];

  // 클릭 시 해당 아이콘 id로 activeIcon 변경되며 재렌더링
  const handleClick = id => {
    setActiveIcon(id);
  };

  return (
    <>
      <NavList>
        {iconList.map(icon => {
          return (
            <li key={icon.id}>
              <Link to={icon.link} onClick={() => handleClick(icon.id)}>
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
