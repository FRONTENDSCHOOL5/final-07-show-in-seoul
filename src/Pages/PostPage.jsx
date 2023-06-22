import React, { useEffect, useState } from 'react';
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';
import styled from 'styled-components';
import GetUserPostAPI from '../API/GetUserPostAPI';

const PostPage = () => {
  const postData = GetUserPostAPI();
  return (
    <>
      <TopBar rightEl="newPost" />
      <SUl>
        {postData.map(el => (
          <Post
            userName={`${el.author.username}`}
            accountName={`${el.author.accountname}`}
            postText={`${el.content}`}
            postImage={`${el.image}`}
          />
        ))}
      </SUl>
      <BottomNav />
    </>
  );
};

export default PostPage;

const SUl = styled.ul`
  height: calc(100vh - 108px);
  overflow-y: scroll;
  padding-top: 4px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
