import React from 'react';
import { styled } from 'styled-components';
import Button from '../Components/Common/Button';
import InputBox from '../Components/Common/InputBox';
import InterestsTag from '../Components/Profile/InterestsTag';
import { Link } from 'react-router-dom';

const ProfileSettingPage = () => {
  return (
    <SProfileSetting>
      <div className="profile-setting-header">
        <h1 className="profile-settig-title">프로필 설정</h1>
        <p className="profile-setting-description">나중에 언제든지 변경할 수 있습니다.</p>
        {/* <ProfileImageEdit /> */}
      </div>

      <div className="profile-setting-info">
        <InputBox title="사용자 이름" placeholder="2~10자 이내여야 합니다." />
        <InputBox title="계정 ID" placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다." />
        <InputBox title="취향dd" disabled={true} placeholder="최대 4개까지 선택할 수 있습니다." />
        <InterestsTag etc={false} />
      </div>
      <Link to="https://www.naver.com">눌러보세요~</Link>

      <Button size="Large">시작하기</Button>
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
    height: 325px;
    margin-bottom: 150px;
  }
`;
