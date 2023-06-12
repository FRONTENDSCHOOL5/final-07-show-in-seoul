import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 850px;
  margin: 40px auto;
  border: 1px solid #c4c4c4;
`;

const ProfileEditWrap = styled.div`
  position: relative;
`;

const BasicProfile = styled.img`
  margin: 30px 0 30px 0;
  width: 110px;
  height: 110px;
`;

const ProfileUploadBtn = styled.button`
  position: absolute;
  top: 40px;
  left: 40px;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;
`;
const ProfileEdit = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledInput = styled.input`
  width: 322px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 5px 0 5px 0;
  outline: none;
`;
const EditNameInput = styled(StyledInput)`
  margin-bottom: 16px;
`;
const EditIdInput = styled(StyledInput)`
  margin-bottom: 16px;
`;
const EditIntroInput = styled(StyledInput)``;
const StartButton = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 322px;
  height: 44px;
  background: rgba(150, 31, 31, 1);
  border: none;
  border-radius: 44px;
  font-size: 14px;
  color: white;
  cursor: pointer;
`;

function Profile() {
  return (
    <Container>
      <h1 className="title">프로필 설정</h1>
      <p className="title-des">나중에 언제든지 변경할 수 있습니다.</p>
      <ProfileEditWrap>
        <BasicProfile
          src={require('../Assets/img/basic-profile.svg').default}
          className="basic-profile"
          alt="기본 프로필 사진입니다."
        />
        <ProfileUploadBtn type="button" className="profile-upload-btn">
          <img src={require('../Assets/img/upload-btn.svg').default} alt="프로필 이미지 업로드 버튼입니다." />
        </ProfileUploadBtn>
      </ProfileEditWrap>
      <ProfileEdit>
        <label htmlFor="editName" className="edit-name-title">
          사용자 이름
        </label>
        <EditNameInput
          type="text"
          minLength="2"
          maxLength="10"
          id="editName"
          required
          placeholder="2~10자 이내여야 합니다."
        />
        <label htmlFor="editId" className="edit-id-title">
          계정 ID
        </label>
        <EditIdInput type="text" id="editId" required placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다." />
        <label htmlFor="editIntro" className="edit-intro-title">
          취향
        </label>
        <EditIntroInput type="text" id="editIntro" required placeholder="최대 4개까지 선택할 수 있습니다." />
        <StartButton>시작하기</StartButton>
      </ProfileEdit>
    </Container>
  );
}
export default Profile;
