import React from 'react';
import styled from 'styled-components';
import ProfileImageEdit from './ProfileImageEdit';
import InputBox from './InputBox';
import ProfileInterests from '../Profile/ProfileInterests';
import { useState } from 'react';

const ProfileInfoEdit = ({ profile, setProfile }) => {
  const [infoText, setInfoText] = useState('');
  const [infoWarning, setInfoWarning] = useState(false);

  return (
    <SProfileInfoEdit>
      <div className="profile-edit-header">
        <ProfileImageEdit />
      </div>
      <div className="profile-edit-info">
        <InputBox
          title="사용자 이름"
          id="userNamee"
          onChange={e => {
            console.log(profile);
            setProfile({ ...profile, username: e.target.value });
          }}
          placeholder="2~10자 이내여야 합니다."
        />
        <InputBox
          title="계정 ID"
          id="accountId"
          onChange={e => {
            setProfile({ ...profile, accountname: e.target.value });
          }}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
        <InputBox title="취향" id="interests" disabled={true} placeholder="최대 4개까지 선택할 수 있습니다." />
        <ProfileInterests setInfoWarning={setInfoWarning} setInfoText={setInfoText} />
      </div>
    </SProfileInfoEdit>
  );
};

export default ProfileInfoEdit;

const SProfileInfoEdit = styled.div`
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
