import React from 'react';
import { styled } from 'styled-components';

const ProfileSettingPage = () => {
  return (
    <SProfileSetting>
      <div className="profile-setting-header">
        <h1 className="profile-settig-title">프로필 설정</h1>
        <p className="profile-setting-description">나중에 언제든지 변경할 수 있습니다.</p>
        {/* <ProfileImageEdit /> */}
      </div>
      <div className="profile-setting-info">
        {/* <InputBox name="사용자 이름" />
        <InputBox name="계정 ID" />
        <InputBox name="취향" disabled={true} />
        <InterestsTag etc={false} /> */}
      </div>
      {/* <Button size="Large">시작하기</Button> */}
    </SProfileSetting>
  );
};

export default ProfileSettingPage;

const SProfileSetting = styled.div`
  width: 390px;
  height: 844px;
  margin: 50px auto 0;
  padding: 34px 34px 90px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-setting-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
    h1 {
      font-size: 24px;
    }
    p {
      color: #767676;
    }
  }
  .profile-setting-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
