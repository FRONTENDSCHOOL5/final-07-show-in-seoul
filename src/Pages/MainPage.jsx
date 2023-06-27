import React, { useState, useMemo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import TotalCount from '../Components/Article/TotalCount';
import FeedContents from '../Components/Article/FeedContents';
import Error from '../Components/Common/Error';
import BottomNav from '../Components/Common/BottomNav';
import Skeleton from '../Components/Common/Skeleton';
import GetShowAPI from '../API/GetShowAPI';
import topBtn from '../Assets/Img/topbtn.svg';
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

  const [scrollPosition, setScrollPosition] = useState(0);

  useMemo(() => {
    // 로그인 이후 최초 접속 시 API 통신
    if (isLoginState === 1) {
      const fetchData = async () => {
        try {
          await GetShowAPI(getShow, setShow);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      console.log('useMemo 데이터 가져오기 실행...');
      setIsLoginState(2);
    }
  }, [isLoginState]);

  // 첫번째 렌더링에 skeleton 보여주기 위한 조건
  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  useDataFiltering(getShow, setShowData, interestTagCount, areaTagCount);

  const handleScroll = event => {
    setScrollPosition(event.target.scrollTop);
  };

  const sectionLayoutRef = useRef(null);

  const handleScrollTop = () => {
    sectionLayoutRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    setScrollPosition(0);
  };

  console.log('showData 메인피드 렌더링...', showData);

  return (
    <>
      <TopBar />

      <TotalCount data={showData} totalData={getShow} setData={setShowData} location={location} />
      {isFirstRender ? (
        <Skeleton />
      ) : showData.length !== 0 ? (
        <SectionLayout ref={sectionLayoutRef} scrollPosition={scrollPosition} onScroll={handleScroll}>
          <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
          {getShow && <FeedContents showInfo={showData} location={location.state} />}
          <div className="top-btn" onClick={handleScrollTop}>
            <img src={topBtn} alt="Scroll to Top" />
          </div>
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
  .top-btn {
    position: fixed;
    right: calc(50% - 195px);
    bottom: 55px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: ${props => (props.scrollPosition > 20 ? 1 : 0)};
    transition: opacity 0.3s;
  }

  img {
    width: 75%;
    height: 75%;
  }
`;
