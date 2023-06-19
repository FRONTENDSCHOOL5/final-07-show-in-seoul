import React from 'react';
import styled from 'styled-components';
import iconSmallMore from '../../../Assets/Icon/s-icon-more-vertical.svg';

const PostHeader = () => {
  return (
    <>
      <SPostHeaderDiv>
        <a>
          <img src="./src/assets/basic-profile-img-.svg" alt="" />
          <div>
            <SPostUserName>찰리 채플린의 초콜릿 공장</SPostUserName>
            <SPostUserId>@ char_chocolate</SPostUserId>
          </div>
        </a>
        <button></button>
      </SPostHeaderDiv>
    </>
  );
};

export default PostHeader;

const SPostHeaderDiv = styled.div`
  display: flex;
  // 게시물 헤더 속, 게시물 작성자의 프로필사진/이름/아이디 감싸준거
  // (클릭 했을 경우 작성자 프로필로 이동 시켜주기 위함)
  a {
    display: flex;
    cursor: pointer;
    // 게시물 작성자 프로필 사진
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    // 게시물 작성자 이름과 아이디 감싼거
    div {
      margin-left: 12px;
    }
  }
  // 게시물 수정/삭제 모달 띄워주는 버튼
  button {
    border: none;
    width: 18px;
    height: 18px;
    background: url(${iconSmallMore}) no-repeat center;
    margin-left: 130px;
  }
`;

// 게시물 작성자 이름
const SPostUserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
`;

// 게시물 작성자 아이디
const SPostUserId = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
  margin-top: 4px;
`;
