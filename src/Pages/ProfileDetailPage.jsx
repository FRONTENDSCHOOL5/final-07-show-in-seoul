import React from 'react';
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
      <Post />
      <BottomNav />
    </>
  );
};

export default ProfileDetailPage;
