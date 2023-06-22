import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import Profile from '../Components/Common/Profile';
import PostLayoutButtons from '../Components/Common/Post/PostLayoutButtons';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';
import GetUserPostAPI from '../API/GetUserPostAPI';

const ProfileDetailPage = () => {
  const postData = GetUserPostAPI();
  return (
    <>
      <TopBar leftEl="back" rightEl="logout" />
      <Profile />
      <PostLayoutButtons />
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

export default ProfileDetailPage;

const SUl = styled.ul`
  height: calc(100vh - 401.5px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
