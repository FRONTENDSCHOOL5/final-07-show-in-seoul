import React from 'react';
import styled, { css } from 'styled-components';

const PostContentButtons = () => {
  return (
    <>
      <PostContentBtns>
        <button>
          <span>58</span>
        </button>
        <ContentCommentBtn>
          <span>12</span>
        </ContentCommentBtn>
      </PostContentBtns>
    </>
  );
};

export default PostContentButtons;

// 게시물 밑에 좋아요/댓글 버튼 감싼거
const PostContentBtns = styled.div`
  margin-top: 14px;
  // 게시물 밑, 좋아요 버튼과 댓글 버튼의 공통 css
  button {
    border: none;
    width: 15px;
    height: 15px;
    background-image: url('');
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    // 게시물 밑, 좋아요/댓글 버튼 옆에 숫자 표시
    span {
      margin-left: 17px;
      font-size: 12px;
      color: #767676;
    }
  }
`;

// 게시물 밑, 댓글 버튼에게만 줘야하는 css
const ContentCommentBtn = styled.button`
  margin-left: 40px;
`;
