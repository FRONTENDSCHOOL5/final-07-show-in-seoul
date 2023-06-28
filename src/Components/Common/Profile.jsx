import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { MyAccountName } from '../../Atom/atom';
// 공통 컴포넌트
import Button from './Button';
// Assets
import basicProfileLogo from '../../Assets/Img/basic-profile-img.svg';
// API
import { GetOtherProfileAPI } from '../../API/Profile';

const Profile = ({ accountname }) => {
  const profileData = GetOtherProfileAPI(accountname);
  const getMyAccountName = useRecoilValue(MyAccountName);
  // console.log(profileData);
  // console.log(profileData.intro?.split(','));
  let profileInterest;
  if (profileData.intro?.split(',')[0] !== '') {
    profileInterest = profileData.intro?.split(',');
  }
  // console.log(profileInterest);
  return (
    <>
      <SProfileSection>
        {/* 프로필 데이터에서 이미지가 기본 이미지라면 쇼인 기본 이미지로 바꿔준다 */}
        {profileData.image === 'https://api.mandarin.weniv.co.kr/1687375894455.png' ? (
          <img src={basicProfileLogo} alt=""></img>
        ) : (
          // 기본 이미지가 아니라면 유저가 설정한 프로필 이미지 넣어준다.
          <img src={profileData.image} alt=""></img>
        )}
        <SProfileName>{profileData.username}</SProfileName>
        <SProfileId>{profileData.accountname}</SProfileId>

        {/* api에서 들고오는 관심 리스트 묶어주는 div   */}
        <div>
          {profileInterest?.map(el => {
            return <div>{el}</div>;
          })}
        </div>
        {/* 내 프로필이면 수정버튼이 있고 다른 유저 프로필이면 수정 버튼 없애주기 */}
        {accountname === getMyAccountName ? (
          <Link to="/profileeditpage">
            <Button size="Medium" color="white" children="프로필 수정" active="active"></Button>
          </Link>
        ) : (
          <div className="a11y-hidden"></div>
        )}
      </SProfileSection>
    </>
  );
};

export default Profile;

// 프로필 컨테이너
const SProfileSection = styled.section`
  width: 390px;
  text-align: center;
  margin-bottom: 10px;
  // 프로필 이미지
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 30px auto 0;
    object-fit: cover;
  }
  // 프로필 관심 목록
  div {
    display: flex;
    gap: 5px;
    justify-content: center;
    div {
      font-size: 12px;
      border-radius: 20px;
      background-color: var(--main);
      color: #ffffff;
      height: 21px;
      line-height: 21px;
      padding: 0 10px;
      margin: 0 0 16px;
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
  margin-bottom: 16px;
`;
