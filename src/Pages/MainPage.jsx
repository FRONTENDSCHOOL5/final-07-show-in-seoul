import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import FeedContents from '../Components/Article/FeedContents';
import BottomNav from '../Components/Common/BottomNav';

const MainPage = () => {
  return (
    <>
      <TopBar />
      <SectionLayout>
        <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
        <FeedContents />
      </SectionLayout>
      <BottomNav />
    </>
  );
};

export default MainPage;

const SectionLayout = styled.section`
  flex: 1;
  overflow: scroll;
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;