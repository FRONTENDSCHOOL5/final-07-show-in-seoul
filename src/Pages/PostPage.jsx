import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

// 공통 컴포넌트
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';

// recoil
import { Token } from '../Atom/atom';

const PostPage = () => {
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
              // 원래 관리자 토큰을 넣어야함, 지금은 임시로 charlie 토큰 넣었음
              // charlie가 팔로우하는 유저들의 게시글이 불러와질 것이다.
              'Bearer ' +
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzZkOGRkYjJjYjIwNTY2MzJkMDE0ZiIsImV4cCI6MTY5MDY5NDUzMCwiaWF0IjoxNjg1NTEwNTMwfQ.IMMrE38HEj0wKkpBScEVd046lUSEYrluamzyMYxNu5k',
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
      <TopBar rightEl="newPost" />
      <SUl>
        {postsData.length > 0 ? (
          postsData.map(el => (
            <Post
              userName={`${el.author.username}`}
              accountName={`${el.author.accountname}`}
              postText={`${el.content}`}
              postImage={`${el.image}`}
              // 게시글 아이디 > 게시글 수정할 때 필요
              postId={`${el.id}`}
            />
          ))
        ) : (
          <li className="noContent">게시글이 존재하지 않습니다.</li>
        )}
      </SUl>
      <BottomNav />
    </>
  );
};

export default PostPage;

const SUl = styled.ul`
  height: calc(100% - 108px);
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
