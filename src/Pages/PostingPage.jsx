import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import cancelButton from '../Assets/Icon/x.svg';
import Upload from '../Assets/Icon/upload-file.svg';
import { Token } from '../Atom/atom';
import EditPostAPI from '../API/EditPostAPI';

const PostingPage = () => {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const [type, setType] = useState('');
  const [imgURL, setImgURL] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');
  const textRef = useRef();
  const getMyToken = useRecoilValue(Token);

  // 게시글 수정
  // const EditPostAPI = async () => {
  //   try {
  //     const response = await fetch(URL + '/post/' + '64931eadb2cb2056635c819e', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization:
  //           'Bearer ' +
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzZkOGRkYjJjYjIwNTY2MzJkMDE0ZiIsImV4cCI6MTY5MDY5NDUzMCwiaWF0IjoxNjg1NTEwNTMwfQ.IMMrE38HEj0wKkpBScEVd046lUSEYrluamzyMYxNu5k',
  //       },
  //       body: JSON.stringify({
  //         post: {
  //           // content: '게시글 수정 테스트 2차 시도 중',
  //           content: textareaValue,
  //           image: imgURL,
  //         },
  //       }),
  //     });
  //     const data = await response.json();
  //     // console.log(data);
  //     return data;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // 사진 업로드 버튼 클릭 후, 사진 파일 클릭하면 api에 전달
  const handleImageInput = async e => {
    let formData = new FormData();
    let imageFile = e.target.files[0];
    formData.append('image', imageFile);

    try {
      const res = await fetch('https://api.mandarin.weniv.co.kr/image/uploadfile', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      setImgURL(URL + '/' + data.filename);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // x 버튼 클릭 시 사진 삭제
  const deleteImg = () => {
    document.querySelector('#imagePre').src = '';
  };

  // 업로드 버튼 클릭 시 실행, api에 게시글 등록
  const postSubmit = async () => {
    try {
      const response = await fetch('https://api.mandarin.weniv.co.kr' + '/post', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + { getMyToken },
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            // textarea에 타이핑 되는 내용들
            content: textareaValue,
            // 업로드한 사진
            image: imgURL,
          },
        }),
      });

      const res = await response.json();
      console.log(res);

      textRef.current.value = '';
      setTextareaValue('');
      setImgURL('');
      // document.querySelector('.uploadTextarea').value = '';
      document.querySelector('#imagePre').src = '';

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  // textarea에 타이핑 되는 내용들 가져 오는
  const handleInputChange = e => {
    setTextareaValue(e.target.value);
    console.log(textareaValue);
  };

  return (
    <>
      <TopBar leftEl="back" />
      {type === 'edit' ? (
        <form>
          <SPostingContent>
            <button type="button" disabled={!textareaValue} onClick={EditPostAPI} className="uploadBtn">
              수정하기
            </button>
            <UploadTextArea
              className="uploadTextarea"
              onChange={handleInputChange}
              ref={textRef}
              rows="10"
              cols="33"
              defaultValue={'수정할 내용'}
              placeholder="게시글 입력하기.."></UploadTextArea>{' '}
            <ImageUploadDiv>
              <ul>
                <li>
                  <img id="imagePre" src={imgURL} alt=""></img>
                  <button className="deleteBtn" onClick={deleteImg}></button>
                </li>
              </ul>
              <label htmlFor="imageInput" className="uploadLabel">
                <img className="uploadImg" src={Upload} alt="" />
                <input
                  onChange={handleImageInput}
                  id="imageInput"
                  name="imageIput"
                  type="file"
                  style={{ display: 'none' }}
                />
              </label>
            </ImageUploadDiv>
          </SPostingContent>
        </form>
      ) : (
        <form>
          <SPostingContent>
            <button type="button" disabled={!textareaValue} onClick={postSubmit} className="uploadBtn">
              업로드
            </button>
            <UploadTextArea
              className="uploadTextarea"
              onChange={handleInputChange}
              ref={textRef}
              rows="10"
              cols="33"
              placeholder="게시글 입력하기.."></UploadTextArea>{' '}
            <ImageUploadDiv>
              <ul>
                <li>
                  <img id="imagePre" src={imgURL} alt=""></img>
                  <button className="deleteBtn" onClick={deleteImg}></button>
                </li>
              </ul>
              <label htmlFor="imageInput" className="uploadLabel">
                <img className="uploadImg" src={Upload} alt="" />
                <input
                  onChange={handleImageInput}
                  id="imageInput"
                  name="imageIput"
                  type="file"
                  style={{ display: 'none' }}
                />
              </label>
            </ImageUploadDiv>
          </SPostingContent>
        </form>
      )}
      {/* <form>
        <SPostingContent>
          <button type="button" disabled={!textareaValue} onClick={postSubmit} className="uploadBtn">
            업로드
          </button>
          <UploadTextArea
            className="uploadTextarea"
            onChange={handleInputChange}
            ref={textRef}
            rows="10"
            cols="33"
            placeholder="게시글 입력하기.."></UploadTextArea>{' '}
          <ImageUploadDiv>
            <ul>
              <li>
                <img id="imagePre" src={imgURL} alt=""></img>
                <button className="deleteBtn" onClick={deleteImg}></button>
              </li>
            </ul>
            <label htmlFor="imageInput" className="uploadLabel">
              <img className="uploadImg" src={Upload} alt="" />
              <input
                onChange={handleImageInput}
                id="imageInput"
                name="imageIput"
                type="file"
                style={{ display: 'none' }}
              />
            </label>
          </ImageUploadDiv>
        </SPostingContent>
      </form> */}
    </>
  );
};

export default PostingPage;

const SPostingContent = styled.div`
  margin: 32px 16px;
  .uploadBtn {
    position: absolute;
    top: 8px;
    margin-left: 268px;
    background-color: var(--main);
    color: white;
    width: 90px;
    height: 32px;
    border-radius: 44px;
    font-size: 14px;
    font-weight: normal;
  }
`;

const ImageUploadDiv = styled.div`
  height: 228px;

  ul {
    li {
      position: relative;
      img {
        width: 100%;
        height: 228px;
        object-fit: cover;
        border: none;
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

const UploadTextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;
