import React from 'react';
import TopBar from '../Components/Common/TopBar';

const PostingPage = () => {
  return (
    <>
      <TopBar leftEl="back" rightEl="upload" />
      <textarea required rows="10" cols="33" placeholder="게시글 입력하기.."></textarea>
      <div>
        <img></img>
      </div>
      <label>
        <img />
        <input type="file" style={{ display: 'none' }} />
      </label>
    </>
  );
};

export default PostingPage;
