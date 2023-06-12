import React from 'react';
import GlobalStyle from '../../../Styles/GlobalStyle';
import styled, { css } from 'styled-components';

const PostHeaderDiv = styled.div`
  display: flex;
`;

// 게시물 헤더 속, 게시물 작성자의 프로필사진/이름/아이디 감싸준거
// (클릭 했을 경우 작성자 프로필로 이동 시켜주기 위함)
const PostHeaderA = styled.a`
  display: flex;
  cursor: pointer;
`;

// 게시물 작성자 프로필 사진
const PostUserImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

// 게시물 작성자 이름과 아이디 감싼거
const PostUserDiv = styled.div`
  margin-left: 12px;
`;
// 게시물 작성자 이름
const PostUserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
`;

// 게시물 작성자 아이디
const PostUserId = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
  margin-top: 4px;
`;

// 게시물 수정/삭제 모달 띄워주는 버튼
const PostSettingBtn = styled.button`
  border: none;
  width: 18px;
  height: 18px;
  background-image: url('');
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 130px;
`;

export default function PostHeader() {
  return (
    <>
      <PostHeaderDiv>
        <PostHeaderA>
          <PostUserImg src="./src/assets/basic-profile-img-.png" alt="" />
          <PostUserDiv>
            <PostUserName>찰리 채플린의 초콜릿 공장</PostUserName>
            <PostUserId>@ char_chocolate</PostUserId>
          </PostUserDiv>
        </PostHeaderA>
        <PostSettingBtn></PostSettingBtn>
      </PostHeaderDiv>
    </>
  );
}
