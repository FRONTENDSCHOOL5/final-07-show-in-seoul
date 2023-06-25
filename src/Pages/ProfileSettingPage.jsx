import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Components/Common/Button';
import ProfileInfoEdit from '../Components/Common/ProfileInfoEdit';
import useFollow from '../API/useFollow';
import { useLocation, useNavigate } from 'react-router-dom';
import { SignUpAPI, LoginAPI } from '../API/User';
import { Token, MyAccountName, UserInterestTags } from '../Atom/atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';

const ProfileSettingPage = () => {
  const { FollowAPI } = useFollow();
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

  const followingAdmin = async () => {
    const response = await FollowAPI(profile.accountname);
    console.log(response);
    if (response !== null) {
      console.log('팔로잉 성공');
    } else {
      console.log('Admin 팔로우 에러');
      navigate('/errorpage');
    }
  };

  const signUp = async () => {
    const signUpResponse = await SignUpAPI({ user: profile });
    if (signUpResponse.hasOwnProperty('user')) {
      console.log('회원가입 성공');
    } else {
      console.log('회원가입 실패');
      navigate('/errorpage');
    }
  };

  const autoLogin = async () => {
    const loginResponse = await LoginAPI({ user: { email: profile.email, password: profile.password } });
    if (loginResponse.hasOwnProperty('user')) {
      console.log('로그인 성공');
      setToken(loginResponse.user.token);
      setMyAccountName(loginResponse.user.accountname);
    } else {
      console.log('회원가입 후 로그인 실패');
      navigate('/errorpage');
    }
  };

  const signUpHandler = async e => {
    e.preventDefault();
    introGenerator();
    await signUp();
    await autoLogin();
    await followingAdmin();
    navigate('/mainpage');
  };

  useEffect(() => {
    if (isValidInputs && profile.email && profile.password) {
      setBtnAble(true);
    } else setBtnAble(false);
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
