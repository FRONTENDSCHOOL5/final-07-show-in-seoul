import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';

// 이미지
import iconSmallMore from '../../../Assets/Icon/s-icon-more-vertical.svg';
import basicProfileImg from '../../../Assets/Img/basic-profile-img.svg';

// recoil
import { Token, MyAccountName } from '../../../Atom/atom';

const PostHeader = ({ postsData }) => {
  // console.log(postsData);
  const accountname = postsData.author?.accountname;
  const username = postsData.author?.username;

  return (
    <>
      <SPostHeaderDiv>
        <Link className="wrapper" to="/profiledetailpage" state={postsData.author?.accountname}>
          {/* 프로필 이미지 api로 받아와서 수정해야함 */}
          <img src={basicProfileImg} alt="" />
          <div>
            <SPostUserName>{username}</SPostUserName>
            <SPostUserId>{accountname}</SPostUserId>
          </div>
        </Link>
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
  .wrapper {
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
      width: 250px;
    }
  }
  // 게시물 수정/삭제 모달 띄워주는 버튼
  button {
    border: none;
    width: 18px;
    height: 18px;
    background: url(${iconSmallMore}) no-repeat center;
    margin-left: 35px;
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
