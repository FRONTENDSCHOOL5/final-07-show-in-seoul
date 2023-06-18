import React from 'react';
import { styled } from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import ProfileInfoEdit from '../Components/Common/ProfileInfoEdit';

const ProfileEditPage = () => {
  return (
    <>
      <TopBar leftEl="back" rightEl="save" />
      <SProfileEdit>
        <ProfileInfoEdit />
      </SProfileEdit>
    </>
  );
};

export default ProfileEditPage;

const SProfileEdit = styled.div`
  width: 100%;
  padding: 0 22px;
  flex: 1;
`;
