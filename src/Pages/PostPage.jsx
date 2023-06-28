import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// 공통 컴포넌트
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';
import TopBtn from '../Components/Common/TopBtn';

// recoil
import { AdminToken } from '../Atom/atom';

// hooks
import useScrollToTop from '../Hook/useScrollToTop';

const PostPage = () => {
  const getAdminToken = useRecoilValue(AdminToken);

  // scroll to top
  const scrollController = useScrollToTop();

  // 내가 팔로한 유저들의 게시글 정보 불러오는 api
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
        const response = await fetch(URL + '/post/feed/?limit=100', req);
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
  return (
    <>
      <TopBar />
      <SUl ref={scrollController.sectionLayoutRef} onScroll={scrollController.handleScroll}>
        {postsData.length > 0 ? (
          postsData.map(postsData => <Post postsData={postsData} />)
        ) : (
          <li style={{ display: 'none' }} className="noContent">
            게시글이 존재하지 않습니다.
          </li>
        )}
      </SUl>
      <TopBtn scrollPosition={scrollController.scrollPosition} sectionLayoutRef={scrollController.sectionLayoutRef} />
      <BottomNav />
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
