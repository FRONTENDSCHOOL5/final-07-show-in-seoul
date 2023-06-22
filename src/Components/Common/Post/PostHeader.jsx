import React from 'react';
import styled from 'styled-components';
import iconSmallMore from '../../../Assets/Icon/s-icon-more-vertical.svg';
import { useNavigate } from 'react-router-dom';

const PostHeader = ({ userName, accountName }) => {
  const navigate = useNavigate();
  const goToEditPosting = () => {
    navigate('/postingpage');
    
  };

  return (
    <>
      <SPostHeaderDiv>
        <a>
          <img src="./src/assets/basic-profile-img-.svg" alt="" />
          <div>
            <SPostUserName>{userName}</SPostUserName>
            <SPostUserId>{accountName}</SPostUserId>
          </div>
        </a>
        <button onClick={goToEditPosting}></button>
      </SPostHeaderDiv>
    </>
  );
};

export default PostHeader;

const SPostHeaderDiv = styled.div`
  display: flex;
  // 게시물 헤더 속, 게시물 작성자의 프로필사진/이름/아이디 감싸준거
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
    display: block;
    margin-left: 250px;
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
