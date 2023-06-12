import React from 'react';
import styled, { css } from 'styled-components';

// 게시물 밑에 좋아요/댓글 버튼 감싼거
const PostContentBtns = styled.div`
  margin-top: 14px;
`;

// 게시물 밑, 좋아요 버튼
const ContentHeartBtn = styled.button`
  border: none;
  width: 15px;
  height: 15px;
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

// 게시물 밑, 댓글 버튼
const ContentCommentBtn = styled.button`
  border: none;
  width: 15px;
  height: 15px;
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 40px;
  cursor: pointer;
`;

// 게시물 밑, 좋아요/댓글 버튼 옆에 숫자 표시
const ContentBtnNumber = styled.span`
  margin-left: 17px;
  font-size: 12px;
  color: #767676;
`;

export default function ProfileContentBtns() {
  return (
    <>
      <PostContentBtns>
        <ContentHeartBtn>
          <ContentBtnNumber>58</ContentBtnNumber>
        </ContentHeartBtn>
        <ContentCommentBtn>
          <ContentBtnNumber>12</ContentBtnNumber>
        </ContentCommentBtn>
      </PostContentBtns>
    </>
  );
}
