import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileImageEdit from './ProfileImageEdit';
import InputBox from './InputBox';
import ProfileInterests from '../Profile/ProfileInterests';
import { InfoWarning } from '../../Atom/atom';
import { useRecoilValue } from 'recoil';
import { IsValidAccountAPI } from '../../API/User';

const ProfileInfoEdit = ({ introGenerator, setIsValidInputs, profile, setProfile }) => {
  const [validAccountName, setValidAccountName] = useState(false);
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFailedMsg, setUserNameFailedMsg] = useState('');
  const [AccountnameFailedMsg, setAccountnameFailedMsg] = useState('');
  const warning = useRecoilValue(InfoWarning);

  const isValidAccountName = async () => {
    const regExp = /^[a-zA-Z0-9_\.]*$/;
    if (!regExp.test(profile.accountname)) {
      setValidAccountName(false);
      setAccountnameFailedMsg('영문, 숫자, 특수문자(_),(.)만 사용 가능합니다.');
      return;
    }
    const response = await IsValidAccountAPI(profile.accountname);
    console.log(response);
    if (response.message === '사용 가능한 계정ID 입니다.') {
      setValidAccountName(true);
      setAccountnameFailedMsg('');
    } else {
      setValidAccountName(false);
      setAccountnameFailedMsg(response.message);
    }
  };

  const isValidUserName = () => {
    if (profile.username.length >= 2 && profile.username.length <= 10) {
      setValidUserName(true);
      setUserNameFailedMsg('');
    } else {
      setValidUserName(false);
      setUserNameFailedMsg('사용자 이름은 2~10자 이내여야 합니다.');
    }
  };

  useEffect(() => {
    if (validAccountName && validUserName) {
      setIsValidInputs(true);
    }
  }, [validAccountName, validUserName]);

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
          FailedMessage={userNameFailedMsg}
          onBlur={isValidUserName}
        />
        <InputBox
          title="계정 ID"
          id="accountId"
          onChange={e => {
            setProfile({ ...profile, accountname: e.target.value });
          }}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          FailedMessage={AccountnameFailedMsg}
          onBlur={isValidAccountName}
        />
        <InputBox
          warning={warning}
          title="취향"
          id="interests"
          disabled={true}
          placeholder="최대 4개까지 선택할 수 있습니다."
        />
        <ProfileInterests introGenerator={introGenerator} />
      </div>
    </SProfileInfoEdit>
  );
};

export default ProfileInfoEdit;

const SProfileInfoEdit = styled.div`
  .profile-edit-header {
    padding: 20px 0 20px 0;
  }

  .profile-edit-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 325px;
    margin-bottom: 50px;
    gap: 30px;
  }
`;
