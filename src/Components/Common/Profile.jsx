import React from 'react';
import styled, { css } from 'styled-components';

const Profile = () => {
  return (
    <>
      {/* 프로필 컨테이너 */}
      <ProfileSection>
        {/* 프로필 이미지,이름,아이디 */}
        <img src="./src/assets/logo.png"></img>
        <ProfileName>찰리 채플린의 초콜릿 공장</ProfileName>
        <ProfileId>@ char_chocolate</ProfileId>
        {/* 프로필 관심 리스트 표시 */}
        <ul>
          <li>연극</li>
          <li>뮤지컬</li>
          <li>피아노 연주회</li>
        </ul>
        {/* 프로필 수정 버튼 */}
        <button>프로필 수정</button>
      </ProfileSection>
    </>
  );
};

export default Profile;

// 프로필 컨테이너
const ProfileSection = styled.section`
  width: 390px;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  // 프로필 이미지
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 30px auto 0;
  }
  // 프로필 관심 목록
  ul {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
    li {
      font-size: 12px;
      border-radius: 20px;
      background-color: #961f1f;
      color: #ffffff;
      padding: 4px 10px;
    }
  }
  // 프로필 수정 버튼
  button {
    border: none;
    font-size: 14px;
    color: #767676;
    border: 1px solid #dbdbdb;
    border-radius: 20px;
    padding: 6px 26px;
    margin: 16px 0;
    background-color: #ffffff;
    cursor: pointer;
  }
`;

// 프로필 이름
const ProfileName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
`;

// 프로필 아이디
const ProfileId = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
  margin-top: 6px;
`;
