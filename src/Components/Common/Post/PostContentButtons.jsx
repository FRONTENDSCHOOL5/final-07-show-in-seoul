import React from 'react';
import styled, { css } from 'styled-components';
import iconHeart from '../../../Assets/Icon/icon-heart.png';
import iconHeartPink from '../../../Assets/Icon/icon-heart-fill-pink.png';
import iconComment from '../../../Assets/Icon/icon-message-circle.png';

const PostContentButtons = () => {
  return (
    <>
      <PostContentBtns>
        <ContentHeartBtn>
          <span>58</span>
        </ContentHeartBtn>
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
    width: 20px;
    height: 20px;
    span {
      margin-left: 17px;
      font-size: 12px;
      color: #767676;
    }
  }
`;

// 게시물 밑, 하트 버튼에게만 줘야하는 css
const ContentHeartBtn = styled.button`
  background: url(${iconHeart}) no-repeat center;
  &:hover {
    background-image: url(${iconHeartPink});
  }
`;

// 게시물 밑, 댓글 버튼에게만 줘야하는 css
const ContentCommentBtn = styled.button`
  margin-left: 40px;
  background: url(${iconComment}) no-repeat center;
`;
