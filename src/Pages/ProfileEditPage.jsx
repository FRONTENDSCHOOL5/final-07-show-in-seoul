import React from 'react';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import ProfileInfoEdit from '../Components/Common/ProfileInfoEdit';
import Button from '../Components/Common/Button';
import useProfile from '../API/useProfile';
import { useNavigate } from 'react-router-dom';
import { UserInterestTags, MyAccountName } from '../Atom/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const ProfileEditPage = () => {
  const navigate = useNavigate();
  const { EditProfileAPI, GetMyProfileAPI } = useProfile();
  const getUserInterestTags = useRecoilValue(UserInterestTags);
  const setMyAccountName = useSetRecoilState(MyAccountName);
  const [btnAble, setBtnAble] = useState(false);
  const [isValidInputs, setIsValidInputs] = useState(false);
  const [profile, setProfile] = useState({
    username: '',
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

  const profileEdit = async () => {
    const response = await EditProfileAPI({ user: profile });
    if (response.hasOwnProperty('user')) console.log('프로필 수정 성공');
    else {
      console.log('프로필 수정 실패');
      navigate('/errorpage');
    }
  };

  const profileEditHandler = async e => {
    e.preventDefault();
    await profileEdit();
    setMyAccountName(profile.accountname);
    navigate('/profiledetailpage', { state: profile.accountname });
  };

  const getProfile = async () => {
    const oldProfile = await GetMyProfileAPI();
    console.log(oldProfile);

    setProfile({ ...profile, username: oldProfile.user.username });
    setProfile({ ...profile, accountname: oldProfile.user.accountname });
    setProfile({ ...profile, intro: oldProfile.user.intro });
    setProfile({ ...profile, image: oldProfile.user.image });
  };

  useEffect(() => {
    if (isValidInputs) {
      setBtnAble(true);
    } else setBtnAble(false);
  }, [isValidInputs]);

  useEffect(() => {
    getProfile();
    console.log(profile);
  }, []);

  return (
    <>
      <TopBar leftEl="back" />
      <SProfileEdit onSubmit={profileEditHandler}>
        <Button disabled={!btnAble} size="SMedium">
          업로드
        </Button>
        <ProfileInfoEdit
          profile={profile}
          setProfile={setProfile}
          setIsValidInputs={setIsValidInputs}
          introGenerator={introGenerator}
        />
      </SProfileEdit>
    </>
  );
};

export default ProfileEditPage;

const SProfileEdit = styled.form`
  width: 100%;
  padding: 0 22px;
  text-align: center;
  position: relative;

  button {
    position: absolute;
    right: 15px;
    top: -40px;
  }
`;
