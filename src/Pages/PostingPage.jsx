import React from 'react';
import styled, { css } from 'styled-components';
import Upload from '../Assets/Icon/upload-file.png';
import TopBar from '../Components/Common/TopBar';

const PostingPage = () => {
  return (
    <>
      <TopBar leftEl="back" rightEl="upload" />
      <SPostingContent>
        <textarea required rows="10" cols="33" placeholder="게시글 입력하기.."></textarea>
        <img src="" alt=""></img>
        <label>
          <img src={Upload} />
          <input type="file" style={{ display: 'none' }} />
        </label>
      </SPostingContent>
    </>
  );
};

export default PostingPage;

const SPostingContent = styled.div`
  margin: 32px 16px;
  textarea {
    width: 100%;
    resize: none;
    border: none;
    margin-bottom: 16px;
  }
  img {
    width: 100%;
    height: 228px;
    object-fit: cover;
  }
  label {
    width: 50px;
    height: 50px;
    display: inline-block;
    margin: 112px 0px 0px 308px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
