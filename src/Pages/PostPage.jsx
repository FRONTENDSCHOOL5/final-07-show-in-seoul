import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// 공통 컴포넌트
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';
import Modal from '../Components/Modal/Modal';
import AlertModal from '../Components/Modal/Alert';

// recoil
import { AdminToken } from '../Atom/atom';

const PostPage = () => {
  const getAdminToken = useRecoilValue(AdminToken);
  // console.log(profileData.author.intro);

  // 내가 팔로한 유저들의 게시글 정보 불러오는 api
  // const getMyToken = useRecoilValue(Token);
  const URL = 'https://api.mandarin.weniv.co.kr';
  const GetPostFeed = () => {
    const [feedData, setFeedData] = useState([]);

    const getFeedData = async () => {
      try {
        const req = {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization:
              // 관리자 토큰
              'Bearer ' + getAdminToken,
          },
        };
        const response = await fetch(URL + '/post/feed', req);
        const data = await response.json();
        setFeedData(data.posts);
        if (!response.ok) throw new Error('내가 팔로우 하는 유저들 게시글 불러오기 에러');
      } catch (e) {
        console.error(e);
      }
    };
    useEffect(() => {
      getFeedData();
    }, []);
    return feedData;
  };

  const postsData = GetPostFeed();
  console.log(postsData);
  return (
    <>
      <TopBar />
      <SUl>
        {postsData.length > 0 ? (
          postsData.map(postsData => <Post postsData={postsData} />)
        ) : (
          <li style={{ display: 'none' }} className="noContent">
            게시글이 존재하지 않습니다.
          </li>
        )}
      </SUl>
      <BottomNav />
      {/* <Modal style={{ display: 'none' }} children="신고하기"></Modal> */}
      {/* <AlertModal confirmText="확인" children="게시글을 신고할까요?"></AlertModal> */}
    </>
  );
};

export default PostPage;

const SUl = styled.ul`
  height: calc(100vh - 77px);
  overflow-y: scroll;
  padding-top: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
  .noContent {
    color: #dbdbdb;
    font-size: 17px;
    text-align: center;
    margin-top: 300px;
  }
`;
