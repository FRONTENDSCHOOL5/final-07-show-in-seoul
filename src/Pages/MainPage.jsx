import React, { useEffect } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import FeedContents from '../Components/Article/FeedContents';
import BottomNav from '../Components/Common/BottomNav';
import GetShowAPI from '../API/GetShowAPI';
import { Show, TotalShow } from '../Atom/atom';
import { useRecoilState } from 'recoil';
import jsonData from '../Assets/Data/서울시 문화행사 정보.json';

const MainPage = () => {
  const showInfo = jsonData.DATA;
  console.log(showInfo);

  return (
    <>
      <TopBar />
      <SectionLayout>
        <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
        <FeedContents showInfo={showInfo} />
      </SectionLayout>
      <BottomNav />
    </>
  );
};

export default MainPage;

const SectionLayout = styled.section`
  height: calc(100vh - 108px);
  overflow-y: scroll;
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
