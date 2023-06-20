import React from 'react';
import styled from 'styled-components';

const TextUpload = ({ userData, type }) => {
  const { post } = { ...userData };

  if (type === 'upload') {
    return <UploadTextArea equired rows="10" cols="33" placeholder="게시글 입력하기.."></UploadTextArea>;
  } else if ((type = 'edit')) {
    return (
      <UploadTextArea
        defaultValue={post.content}
        required
        rows="10"
        cols="33"
        placeholder="게시글 수정하기.."></UploadTextArea>
    );
  }
};

export default TextUpload;

const UploadTextArea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  margin-bottom: 16px;
  :focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;
