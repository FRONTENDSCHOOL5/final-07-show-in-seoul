import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import Profile from '../Components/Common/Profile';
import PostLayoutButtons from '../Components/Common/Post/PostLayoutButtons';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';

const ProfileDetailPage = () => {
  return (
    <>
      <TopBar leftEl="back" rightEl="logout" />
      <Profile />
      <PostLayoutButtons />
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

export default ProfileDetailPage;

const SUl = styled.ul`
  height: calc(100% - 401.5px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
