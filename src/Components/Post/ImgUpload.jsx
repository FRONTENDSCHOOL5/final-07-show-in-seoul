import React, { useRef } from 'react';
import styled from 'styled-components';
import Upload from '../../Assets/Icon/upload-file.svg';
import testImg from '../../Assets/Img/포스터.jpeg';
import cancelButton from '../../Assets/Icon/x.svg';
import API from '../../';

const ImgUpload = ({ userData, imageData, setImageData, setOriginalImage, originalImage, type }) => {
  const uploadCounter = useRef(0);

  const registerImage = async e => {
    uploadCounter.current += 1;
    if (uploadCounter.current > 1) {
      alert('1개 이하의 파일을 업로드 하세요.');
      return;
    }

    const formData = new FormData();

    formData.append('image', e.target.files[0]);
    const response = await API.post('/image/uploadfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = await response.data;

    setImageData([...imageData, `https://api.mandarin.weniv.co.kr/${data.filename}`]);
  };

  const deleteImage = async e => {
    uploadCounter.current -= 1;
    const idx = e.target.closest('li').dataset.index;

    const copy = [...imageData];

    copy.splice(idx, 1);
    setImageData(copy);
  };
  const deleteOriginalImage = e => {
    const idx = e.target.closest('li').dataset.index;

    originalImage.splice(idx, 1);
    setOriginalImage([...originalImage]);
  };

  const refineImageUrl = file => {
    if (file.includes('https://api.mandarin.weniv.co.kr')) {
      return file;
    }
    return `https://api.mandarin.weniv.co.kr/${file}`;
  };

  return (
    <ImageUploadDiv>
      <ul>
        <li>
          <img src={testImg} alt=""></img>
          <button type="button"></button>
        </li>
      </ul>
      <label className="uploadLabel">
        <img className="uploadImg" src={Upload} alt="" />
        <input id="image" name="image" type="file" style={{ display: 'none' }} />
      </label>
    </ImageUploadDiv>
  );
};

export default ImgUpload;

const ImageUploadDiv = styled.div`
  height: 228px;
  ul {
    /* display: flex;
    gap: 20px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #dbdbdb;
      border-radius: 10px;
    } */
    li {
      position: relative;
      border-radius: 1rem;

      img {
        width: 100%;
        height: 228px;
        border-radius: 10px;
        object-fit: cover;
      }
      button {
        width: 22px;
        height: 22px;
        position: absolute;
        right: 3px;
        top: 3px;

        z-index: 10;
        background: url(${cancelButton}) no-repeat center;
      }
    }
  }
  .uploadLabel {
    .uploadImg {
      position: relative;
      margin-bottom: -70px;
      margin-left: 308px;
      cursor: pointer;
    }
    input {
    }
  }
`;
