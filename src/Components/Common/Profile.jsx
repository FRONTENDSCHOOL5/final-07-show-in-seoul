import React from 'react';
import GlobalStyle from '../../Styles/GlobalStyle';
import styled, { css } from 'styled-components';

// 프로필 컨테이너
const ProfileSection = styled.section`
  width: 390px;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
`;

// 프로필 이미지
const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 30px auto 0;
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

// 프로필 관심 목록
const ProfileInterest = styled.ul`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-top: 10px;
`;
const ProfileInterestLi = styled.li`
  font-size: 12px;
  border-radius: 20px;
  background-color: #961f1f;
  color: #ffffff;
  padding: 4px 10px;
`;

// 프로필 수정 버튼
const ProfileBtn = styled.button`
  border: none;
  font-size: 14px;
  color: #767676;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  padding: 6px 26px;
  margin: 16px 0;
  background-color: #ffffff;
  cursor: pointer;
`;

export default function Profile() {
  return (
    <>
      <GlobalStyle />
      {/* 프로필 컨테이너 */}
      <ProfileSection>
        {/* 프로필 이미지,이름,아이디 */}
        <ProfileImg src="./src/assets/logo.png"></ProfileImg>
        <ProfileName>찰리 채플린의 초콜릿 공장</ProfileName>
        <ProfileId>@ char_chocolate</ProfileId>
        {/* 프로필 관심 리스트 표시 */}
        <ProfileInterest>
          <ProfileInterestLi>연극</ProfileInterestLi>
          <ProfileInterestLi>뮤지컬</ProfileInterestLi>
          <ProfileInterestLi>피아노 연주회</ProfileInterestLi>
        </ProfileInterest>
        {/* 프로필 수정 버튼 */}
        <ProfileBtn>프로필 수정</ProfileBtn>
      </ProfileSection>
    </>
  );
}
