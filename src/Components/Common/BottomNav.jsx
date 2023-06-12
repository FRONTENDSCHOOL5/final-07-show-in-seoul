import React, { useState } from 'react';
import styled from 'styled-components';
import iconCategory from '../../Assets/icon-category.png';
import iconSearch from '../../Assets/icon-search.png';
import iconHome from '../../Assets/icon-home.png';
import iconPost from '../../Assets/icon-post.png';
import iconUser from '../../Assets/icon-user.png';
import iconCategoryFill from '../../Assets/icon-category-fill.png';
import iconSearchFill from '../../Assets/icon-search-fill.png';
import iconHomeFill from '../../Assets/icon-home-fill.png';
import iconPostFill from '../../Assets/icon-post-fill.png';
import iconUserFill from '../../Assets/icon-user-fill.png';

const NavList = styled.ul`
  display: flex;
  /* width: 전체 레이아웃 잡히면 지워도 될듯 합니다! */
  width: 390px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-top: solid 2px #dbdbdb;
`;

const NavLink = styled.a`
  text-decoration: none;
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

const NavName = styled.p`
  /* props로 받은 active true/false 값에 따라 폰트 색상 변경 */
  color: ${props => (props.isActive ? '#961F1F' : '#767676')};
  font-size: 10px;
  font-weight: 400;
`;

const BottomNav = () => {
  // 현재 선택된 a 태그 id 확인
  const [activeLink, setActiveLink] = useState(3);
  // navigation 아이콘 데이터
  const iconList = [
    { id: 1, title: '카테고리', off: iconCategory, on: iconCategoryFill },
    { id: 2, title: '검색', off: iconSearch, on: iconSearchFill },
    { id: 3, title: '홈', off: iconHome, on: iconHomeFill },
    { id: 4, title: '게시판', off: iconPost, on: iconPostFill },
    { id: 5, title: '프로필', off: iconUser, on: iconUserFill },
  ];
  // 클릭 시 해당 아이콘 id로 activeLink 변경되며 재렌더링
  const handleClick = id => {
    setActiveLink(id);
  };

  return (
    <>
      <NavList>
        {/* iconList 순회하며 렌더링 */}
        {iconList.map(icon => {
          return (
            <li key={icon.id}>
              {/* 링크 추후 추가 필요!! 클릭 이벤트가 발생하면 activeLink 값 변경*/}
              <NavLink href="#" onClick={() => handleClick(icon.id)}>
                {/* 현재 activeLink 번호와 id 가 일치하면 on 아이콘 표시 */}
                <NavIcon src={activeLink === icon.id ? icon.on : icon.off} alt={icon.title} />
                <NavName isActive={activeLink === icon.id}>{icon.title}</NavName>
              </NavLink>
            </li>
          );
        })}
      </NavList>
    </>
  );
};

export default BottomNav;
