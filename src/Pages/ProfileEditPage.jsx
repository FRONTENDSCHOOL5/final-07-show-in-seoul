import React from 'react';
import { styled } from 'styled-components';
import InputBox from '../Components/Common/InputBox';
import InterestsTag from '../Components/Profile/InterestsTag';
import ProfileImageEdit from '../Components/Common/ProfileImageEdit';
import TopBar from '../Components/Common/TopBar';

const ProfileEditPage = () => {
  return (
    <>
      <TopBar leftEl="back" rightEl="save" />
      <SProfileSetting>
        <div className="profile-edit-header">
          <ProfileImageEdit />
        </div>
        <div className="profile-edit-info">
          <InputBox title="사용자 이름" placeholder="2~10자 이내여야 합니다." />
          <InputBox title="계정 ID" placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다." />
          <InputBox title="취향" disabled={true} placeholder="최대 4개까지 선택할 수 있습니다." />
          <InterestsTag etc={false} />
        </div>
      </SProfileSetting>
    </>
  );
};

export default ProfileEditPage;

const SProfileSetting = styled.div`
  width: 100%;
  padding: 0 22px;
  flex: 1;

  .profile-edit-header {
    padding: 30px 0 40px 0;
  }

  .profile-edit-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 325px;
    margin-bottom: 50px;
    gap: 15px;
  }
`;
