import React from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostContentButtons from './PostContentButtons';
import PostContent from './PostContent';

const Post = () => {
  return (
    <>
      {/* 게시물 전체 컨테이너  */}
      <SPostSection>
        {/* 게시물 헤더 */}
        <PostHeader />
        {/* 게시물 컨텐트 전체 Div */}
        <SPostContentDiv>
          {/* 게시물 내용물(텍스트와 사진) */}
          <PostContent />
          {/* 게시물 밑, 좋아요와 댓글 버튼 */}
          <PostContentButtons />
          {/* 게시물 맨 밑, 날짜 표시 */}
          <SPostContentDate>2020년 10월 21일</SPostContentDate>
        </SPostContentDiv>
      </SPostSection>
    </>
  );
};

export default Post;

// 게시물 컨테이너
const SPostSection = styled.section`
  width: 358px;
  margin: 16px 16px 30px;
  button {
    background-color: #ffffff;
  }
`;

// 게시물 내용물 감싼거
const SPostContentDiv = styled.div`
  margin-left: 54px;
`;

// 게시물 맨 밑, 날짜 표시
const SPostContentDate = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #767676;
  margin-top: 5px;
  cursor: pointer;
`;
