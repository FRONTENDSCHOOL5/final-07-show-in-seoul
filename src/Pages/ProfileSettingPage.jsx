import React from 'react';
import { styled } from 'styled-components';
import Button from '../Components/Common/Button';
import ProfileInfoEdit from '../Components/Common/ProfileInfoEdit';

const ProfileSettingPage = () => {
  return (
    <SProfileSetting>
      <div className="profile-setting-header">
        <h1>프로필 설정</h1>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
      </div>
      <ProfileInfoEdit />
      <Button navi="mainpage" size="Large">
        시작하기
      </Button>
    </SProfileSetting>
  );
};

export default ProfileSettingPage;

const SProfileSetting = styled.div`
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
