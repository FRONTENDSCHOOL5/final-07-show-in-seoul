import React from 'react';
import styled from 'styled-components';
import DefaultImg from '../../Assets/Img/basic-profile-img.svg';
import UploadBtn from '../../Assets/Img/upload-file.svg';

const ProfileImageEdit = () => {
  return (
    <SProfileImageEdit>
      <img src={DefaultImg} alt="기본 프로필 이미지" />
      <button className="img-upload-btn">
        <img src={UploadBtn} alt="이미지 업로드" />
      </button>
    </SProfileImageEdit>
  );
};

export default ProfileImageEdit;

const SProfileImageEdit = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  .img-upload-btn {
    position: absolute;
    top: 65%;
    left: 58%;
    cursor: pointer;
  }
`;
