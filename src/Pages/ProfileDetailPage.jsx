import React, { useEffect, useState } from 'react';
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

// API
import { GetUserPostAPI } from '../API/PostAPI';

const ProfileDetailPage = () => {
  // 리코일에 저장된, 지금 로그인 한 계정 이름
  const getMyAccountName = useRecoilValue(MyAccountName);
  console.log(getMyAccountName);

  // 게시글 헤더를 눌렀을 때, 그 게시글 작성자의 계정 이름
  const otherAccountName = useLocation().state;
  console.log(otherAccountName);
  const [isLoding, setIsLoding] = useState(false);
  const [postsData, setPostsData] = useState([]);

  // const loading = async () => {
  //   const PpostsData = await GetUserPostAPI(otherAccountName);
  //   // setPostsData(PpostsData);
  //   // setIsLoding(true);
  //   console.log(PpostsData);
  // };
  // useEffect(() => {
  //   loading();
  // }, []);
  if (isLoding === true) {
    const PpostsData = GetUserPostAPI(otherAccountName);
    setPostsData(PpostsData);
    setIsLoding(true);
  }

  // const postsData = GetUserPostAPI(otherAccountName);

  return (
    // getMyAcoountName과 accountname이 같을 경우,
    // 내 프로필이라는 의미니 탑바에 로그아웃 버튼이 있어야 한다
    // 다를 경우, 다른 유저 프로필이니 로그아웃 버튼을 없앤다
    <>
      {getMyAccountName === otherAccountName ? <TopBar leftEl="back" rightEl="logout" /> : <TopBar leftEl="back" />}
      <Profile accountname={otherAccountName} />
      <PostLayoutButtons />
      <SUl>{isLoding ? <Post postsData={postsData} /> : <div></div>}</SUl>
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
