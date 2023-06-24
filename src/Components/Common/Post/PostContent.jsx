import React from 'react';
import styled, { css } from 'styled-components';

const PostContent = ({ postsData }) => {
  // console.log(postsData);
  return (
    <>
      <SPostContentA>
        <p>{postsData.content}</p>
        <ul>
          <li>
            <img src={postsData.image} alt=""></img>
          </li>
        </ul>
      </SPostContentA>
    </>
  );
};

export default PostContent;

const SPostContentA = styled.a`
  display: block;
  // 게시물 텍스트
  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 7px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  // 게시물 사진 여러개일 경우를 대비하기 위해 ul로 감싼거
  ul {
    margin-top: 16px;
    // 게시물 사진
    li {
      height: 228px;
      background: url('') no-repeat / cover;
    }
    img {
      height: 228px;
      width: 100%;
      object-fit: cover;
    }
  }
`;
