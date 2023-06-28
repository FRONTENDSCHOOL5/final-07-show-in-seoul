import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import TotalCount from '../Components/Article/TotalCount';
import FeedContents from '../Components/Article/FeedContents';
import Error from '../Components/Common/Error';
import BottomNav from '../Components/Common/BottomNav';
import Skeleton from '../Components/Common/Skeleton';
import TopBtn from '../Components/Common/TopBtn';
import useScrollToTop from '../Hook/useScrollToTop';
import GetShowAPI from '../API/GetShowAPI';
import { Show, IsLoginState, CategoryInterestTagCount, CategoryAreaTagCount } from '../Atom/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import useDataFiltering from '../Hook/useDataFiltering';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
  const [getShow, setShow] = useRecoilState(Show);
  const [isLoginState, setIsLoginState] = useRecoilState(IsLoginState);
  const interestTagCount = useRecoilValue(CategoryInterestTagCount);
  const areaTagCount = useRecoilValue(CategoryAreaTagCount);

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [showData, setShowData] = useState([]);

  const location = useLocation();

  // scroll to top
  const scrollController = useScrollToTop();

  useMemo(() => {
    // 로그인 이후 최초 접속 시 API 통신
    // if (isLoginState === 1) {
    const fetchData = async () => {
      try {
        await GetShowAPI(setShow);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log('useMemo 데이터 가져오기 실행...');
    setIsLoginState(2);
    // }
  }, [isLoginState]);

  // 첫번째 렌더링에 skeleton 보여주기 위한 조건
  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useDataFiltering(getShow, setShowData, interestTagCount, areaTagCount);

  return (
    <>
      <TopBar />

      <TotalCount data={showData} totalData={getShow} setData={setShowData} location={location} />
      {isFirstRender ? (
        <Skeleton />
      ) : showData.length !== 0 ? (
        <SectionLayout ref={scrollController.sectionLayoutRef} onScroll={scrollController.handleScroll}>
          <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
          {getShow && <FeedContents showInfo={showData} location={location.state} />}
          <TopBtn
            scrollPosition={scrollController.scrollPosition}
            sectionLayoutRef={scrollController.sectionLayoutRef}
          />
        </SectionLayout>
      ) : location.state === 'filtering' ? (
        <Error text={'원하시는 필터링 결과가 없습니다 :('} buttonStyle={'category'} />
      ) : (
        <Skeleton />
      )}
      <BottomNav />
    </>
  );
};

export default MainPage;

const SectionLayout = styled.section`
  height: calc(100vh - 108px);
  overflow-y: scroll;
  scroll-behavior: smooth;
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    margin-top: 25px;
  }
`;
