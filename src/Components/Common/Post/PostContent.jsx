import React from 'react';
import GlobalStyle from '../../../Styles/GlobalStyle';
import styled, { css } from 'styled-components';

// 게시물 텍스트
const PostContentTxt = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 7px;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 게시물 사진 여러개일 경우를 대비하기 위해 ul로 감싼거
const PostContentImgs = styled.ul`
  margin-top: 16px;
`;

// 게시물 사진
const PostContentImg = styled.li`
  height: 228px;
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function PostContent() {
  return (
    <>
      <PostContentTxt>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex commodi repellendus ratione optio nostrum maiores,
        eaque officiis quibusdam, fuga qui illo architecto adipisci, ducimus dicta reprehenderit quasi voluptatem amet
        dignissimos.
      </PostContentTxt>
      <PostContentImgs>
        <PostContentImg></PostContentImg>
      </PostContentImgs>
    </>
  );
}
