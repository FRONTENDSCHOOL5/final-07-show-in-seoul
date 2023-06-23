import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Link, useNavigate } from 'react-router-dom';

// 이미지
import iconSmallMore from '../../../Assets/Icon/s-icon-more-vertical.svg';
import basicProfileImg from '../../../Assets/Img/basic-profile-img.svg';

// recoil
import { Token } from '../../../Atom/atom';

const PostHeader = ({ postsData }) => {
  // const getMyToken = useRecoilValue(Token);
  // const URL = 'https://api.mandarin.weniv.co.kr';
  // const postsData = { postsData };

  // const GetOtherProfileAPI = ({ postsData }) => {
  //   const accountName = postsData.author.accountname;
  //   const [otherProfile, setOtherProfile] = useState([]);
  //   const getOtherProfile = async ({}) => {
  //     try {
  //       const req = {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: 'Bearer ' + getMyToken,
  //         },
  //       };

  //       const response = await fetch(URL + '/profile/:' + { accountName }, req);
  //       const data = await response.json();
  //       setOtherProfile(data);
  //       if (!response.ok) throw new Error('다른 프로필 보기 에러');
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   useEffect(() => {
  //     getOtherProfile();
  //   }, []);
  //   return otherProfile.profile.image;
  // };

  // const otherProfileImg = GetOtherProfileAPI({ postsData });
  console.log(postsData);
  const navigate = useNavigate();
  const test = () => {
    navigate('/profiledetailpage', { state: postsData });
  };

  const accountname = postsData.author.accountname;
  const username = postsData.author.username;
  console.log(accountname);
  console.log(username);
  return (
    <>
      <SPostHeaderDiv>
        <a onClick={test}>
          {/* 프로필 이미지 데이터가 없다면 기본 이미지로 대체*/}
          {/* {postsData.image ? <img src={프로필 설정페이지에서 받아오는 이미지} alt="" /> : <img src={basicProfileImg} alt="" />} */}
          <img src={basicProfileImg} alt="" />
          <div>
            <SPostUserName>{username}</SPostUserName>
            <SPostUserId>{accountname}</SPostUserId>
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
