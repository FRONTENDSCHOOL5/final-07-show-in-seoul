import React from 'react';
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';

const PostPage = () => {
  return (
    <>
      <TopBar rightEl="newPost" />
      <ul>
        <Post />
      </ul>
      <BottomNav />
    </>
  );
};

export default PostPage;
