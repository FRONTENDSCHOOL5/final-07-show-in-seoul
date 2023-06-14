import React, { useState } from 'react';
import styled from 'styled-components';
import iconCategory from '../../Assets/Icon/icon-category.png';
import iconSearch from '../../Assets/Icon/icon-search.png';
import iconHome from '../../Assets/Icon/icon-home.png';
import iconPost from '../../Assets/Icon/icon-post.png';
import iconUser from '../../Assets/Icon/icon-user.png';
import iconCategoryFill from '../../Assets/Icon/icon-category-fill.png';
import iconSearchFill from '../../Assets/Icon/icon-search-fill.png';
import iconHomeFill from '../../Assets/Icon/icon-home-fill.png';
import iconPostFill from '../../Assets/Icon/icon-post-fill.png';
import iconUserFill from '../../Assets/Icon/icon-user-fill.png';

const BottomNav = props => {
  console.log(props);
  // 현재 선택된 a 태그 id 확인
  const [activeIcon, setActiveIcon] = useState(3);

  // navigation 아이콘 데이터
  const iconList = [
    { id: 1, title: '카테고리', off: iconCategory, on: iconCategoryFill },
    { id: 2, title: '검색', off: iconSearch, on: iconSearchFill },
    { id: 3, title: '홈', off: iconHome, on: iconHomeFill },
    { id: 4, title: '게시판', off: iconPost, on: iconPostFill },
    { id: 5, title: '프로필', off: iconUser, on: iconUserFill },
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
              <a href="#" onClick={() => handleClick(icon.id)}>
                {/* 현재 activeIcon 번호와 id 가 일치하면 on 아이콘 표시 & p 색상 변경 */}
                <img src={activeIcon === icon.id ? icon.on : icon.off} alt={icon.title} />
                <Title color={activeIcon === icon.id ? '#961F1F' : '#767676'}>{icon.title}</Title>
              </a>
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
  border-top: solid 2px #dbdbdb;
  a {
    text-decoration: none;
    img {
      width: 24px;
      height: 24px;
      margin-bottom: 4px;
    }
  }
`;

const Title = styled.p`
  color: ${props => props.color};
  font-size: 10px;
  font-weight: 400;
`;
