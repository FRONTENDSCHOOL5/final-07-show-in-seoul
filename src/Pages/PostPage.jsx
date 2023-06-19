import React from 'react';
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';
import styled from 'styled-components';

const PostPage = () => {
  return (
    <>
      <TopBar rightEl="newPost" />
      <SUl>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
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
`;
