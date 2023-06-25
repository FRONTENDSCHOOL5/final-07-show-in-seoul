import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Components/Common/Button';
import ProfileInfoEdit from '../Components/Common/ProfileInfoEdit';
import { useLocation, useNavigate } from 'react-router-dom';
import { SignUpAPI, LoginAPI } from '../API/User';
import { Token, MyAccountName, UserInterestTags } from '../Atom/atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { FollowAPI } from '../API/Follow';

const ProfileSettingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setToken = useSetRecoilState(Token);
  const setMyAccountName = useSetRecoilState(MyAccountName);
  const getUserInterestTags = useRecoilValue(UserInterestTags);
  const [btnAble, setBtnAble] = useState(false);
  const [isValidInputs, setIsValidInputs] = useState(false);
  const [profile, setProfile] = useState({
    username: '',
    email: location.state && location.state.email,
    password: location.state && location.state.password,
    accountname: '',
    intro: '',
    image: 'https://api.mandarin.weniv.co.kr/1687375894455.png',
  });

  const introGenerator = () => {
    let introText = '';
    let count = 0;
    getUserInterestTags.forEach(tag => {
      if (tag[1]) {
        introText += ',' + tag[0];
        count++;
      }
    });
    setProfile({ ...profile, intro: count ? introText.slice(1) : '두루두루' });
  };

  // const ConnectAdmin = async () => {
  //   const response = await FollowAPI(profile.accountname);
  //   console.log(response);
  //   if (false) {
  //     console.log('Admin 팔로우 에러');
  //   }
  // };

  const signUpHandler = async e => {
    e.preventDefault();
    introGenerator();
    const signUpResponse = await SignUpAPI({ user: profile });
    if (signUpResponse.hasOwnProperty('user')) {
      const loginResponse = await LoginAPI({ user: { email: profile.email, password: profile.password } });
      if (loginResponse.hasOwnProperty('user')) {
        setToken(loginResponse.user.token);
        setMyAccountName(loginResponse.user.accountname);
        const followResponse = await FollowAPI(profile.accountname);
        if (followResponse.hasOwnProperty('user')) {
          navigate('/mainpage');
        } else {
          console.log('Admin 팔로우 에러');
          navigate('/errorpage');
        }
      } else {
        console.log('회원가입 후 로그인 실패');
        navigate('/errorpage');
      }
    } else {
      console.log('회원가입 실패');
      navigate('/errorpage');
    }
  };

  useEffect(() => {
    if (isValidInputs && profile.email && profile.password) {
      setBtnAble(true);
    }
  }, [isValidInputs]);

  useEffect(() => {
    if (location.state === null && !profile.email) {
      navigate('/signuppage');
    }
  }, []);

  return (
    <SProfileSetting onSubmit={signUpHandler}>
      <div className="profile-setting-header">
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
      </div>
      <ProfileInfoEdit
        profile={profile}
        setProfile={setProfile}
        setIsValidInputs={setIsValidInputs}
        introGenerator={introGenerator}
      />
      <Button disabled={!btnAble} navi="mainpage" size="Large">
        시작하기
      </Button>
    </SProfileSetting>
  );
};

export default ProfileSettingPage;

const SProfileSetting = styled.form`
  width: 100%;
  padding: 0 22px;
  text-align: center;

  .profile-setting-header {
    text-align: center;
    h1 {
      font-size: 24px;
      margin-bottom: 15px;
    }
    p {
      color: var(--deepgray);
      font-size: 14px;
    }
  }
`;
