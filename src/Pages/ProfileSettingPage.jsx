import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Common/Button';
import ProfileInfoEdit from '../Components/Common/ProfileInfoEdit';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { SignUpAPI } from '../API/User';
import { LoginAPI } from '../API/User';
import { Token } from '../Atom/atom';
import { MyAccountName } from '../Atom/atom';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const ProfileSettingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setToken = useSetRecoilState(Token);
  const setMyAccountName = useSetRecoilState(MyAccountName);
  const [profile, setProfile] = useState({
    username: '',
    email: location.state.email,
    password: location.state.password,
    accountname: '',
    intro: '',
    image: 'https://api.mandarin.weniv.co.kr/1687375894455.png',
  });

  const checkInterests = () => {
    //취향 체크 (태그 선택된 것 string으로 바꿔주기)
    setProfile({ ...profile, intro: '임시 문장입니다.' });
  };

  const isValidProfile = () => {
    //유효성 검사
    return true;
  };

  const signUp = async profile => {
    console.log({ user: profile });
    const signUpResponse = await SignUpAPI({ user: profile });
    if (signUpResponse.hasOwnProperty('user')) {
      const loginResponse = await LoginAPI({ user: { email: profile.email, password: profile.password } });
      if (loginResponse.hasOwnProperty('user')) {
        setToken(loginResponse.user.token);
        setMyAccountName(loginResponse.user.accountname);
        navigate('/mainpage');
      } else {
        console.log('회원가입 후 로그인 실패');
      }
    } else {
      console.log('회원가입 실패');
    }
  };

  const signUpHandler = () => {
    checkInterests();
    if (isValidProfile()) {
      signUp(profile);
    }
  };

  return (
    <SProfileSetting>
      <div className="profile-setting-header">
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
      </div>
      <ProfileInfoEdit profile={profile} setProfile={setProfile} />
      <div onClick={signUpHandler}>
        <Button navi="mainpage" size="Large">
          시작하기
        </Button>
      </div>
    </SProfileSetting>
  );
};

export default ProfileSettingPage;

const SProfileSetting = styled.form`
  width: 100%;
  padding: 0 22px;

  .profile-setting-header {
    padding: 30px 0 0 0;
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
