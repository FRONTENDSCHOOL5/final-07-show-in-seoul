import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// 공통 컴포넌트
import TopBar from '../Components/Common/TopBar';
import Profile from '../Components/Common/Profile';
import PostLayoutButtons from '../Components/Common/Post/PostLayoutButtons';
import Post from '../Components/Common/Post/Post';
import BottomNav from '../Components/Common/BottomNav';

// recoil
import { MyAccountName } from '../Atom/atom';
import { useRecoilValue } from 'recoil';

const ProfileDetailPage = () => {
  const getMyAcoountName = useRecoilValue(MyAccountName);
  console.log(getMyAcoountName);
  const accountname = useLocation().state.author.accountname;
  console.log(accountname);

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
