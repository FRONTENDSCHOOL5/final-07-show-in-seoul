import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Profile = () => {
  return (
    <>
      {/* 프로필 컨테이너 */}
      <SProfileSection>
        {/* 프로필 이미지,이름,아이디 */}
        <img src="./src/assets/logo.png"></img>
        <SProfileName>찰리 채플린의 초콜릿 공장</SProfileName>
        <SProfileId>@ char_chocolate</SProfileId>
        {/* 프로필 관심 리스트 표시 */}

        {/* api에서 들고오는 관심 리스트 묶어주는 div   */}
        <div></div>

        <Button size="Medium" color="white" children="프로필 수정" active="active"></Button>
      </SProfileSection>
    </>
  );
};

export default Profile;

// 프로필 컨테이너
const SProfileSection = styled.section`
  width: 390px;
  text-align: center;
  padding-bottom: 16px;
  // 프로필 이미지
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 30px auto 0;
  }
  // 프로필 관심 목록
  div {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin: 10px 0 16px;

    div {
      font-size: 12px;
      border-radius: 20px;
      background-color: #961f1f;
      color: #ffffff;
      height: 21px;
      line-height: 21px;
      padding: 0 10px;
    }
  }
`;

// 프로필 이름
const SProfileName = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-top: 16px;
`;

// 프로필 아이디
const SProfileId = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
  margin-top: 6px;
`;
