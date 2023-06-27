import React from 'react';
import styled from 'styled-components';
import UploadBtn from '../../Assets/Img/upload-file.svg';
import useImage from '../../API/Image';

const ProfileImageEdit = ({ profile, setProfile }) => {
  const { UploadImgAPI } = useImage();

  const uploadImg = async e => {
    let formData = new FormData();
    formData.append('image', e.target.files[0]);
    const imgRes = await UploadImgAPI(formData);
    const imgURL = 'https://api.mandarin.weniv.co.kr/' + imgRes.filename;
    setProfile({ ...profile, image: imgURL });
  };

  return (
    <SProfileImageEdit>
      <img src={profile.image} alt="기본 프로필 이미지" />
      <div className="img-upload-btn">
        <label className="upload-label" htmlFor="upload-file">
          <img src={UploadBtn} alt="이미지 업로드" />
        </label>
        <input id="upload-file" onChange={uploadImg} type="file" accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic" />
      </div>
    </SProfileImageEdit>
  );
};

export default ProfileImageEdit;

const SProfileImageEdit = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  img {
    width: 130px;
    height: 130px;
    object-fit: fill;
    border-radius: 50%;
  }

  .img-upload-btn {
    position: absolute;
    top: 92px;
    left: 200px;
    cursor: pointer;
    .upload-label {
      cursor: pointer;
      img {
        object-fit: fill;
        width: 40px;
        height: 40px;
      }
    }

    #upload-file {
      display: none;
    }
  }
`;
