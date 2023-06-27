import React, { useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import TotalCount from '../Components/Article/TotalCount';
import FeedContents from '../Components/Article/FeedContents';
import Error from '../Components/Common/Error';
import BottomNav from '../Components/Common/BottomNav';
import GetShowAPI from '../API/GetShowAPI';
import topBtn from '../Assets/Img/topbtn.svg';
import { Show, IsLoginState, CategoryInterestTagCount, CategoryAreaTagCount } from '../Atom/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import useDataFiltering from '../Hook/useDataFiltering';

const MainPage = () => {
  const [getShow, setShow] = useRecoilState(Show);
  const [isLoginState, setIsLoginState] = useRecoilState(IsLoginState);
  const interestTagCount = useRecoilValue(CategoryInterestTagCount);
  const areaTagCount = useRecoilValue(CategoryAreaTagCount);

  const [showData, setShowData] = useState([]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useMemo(() => {
    if (isLoginState === 'false') {
      const fetchData = async () => {
        try {
          await GetShowAPI(setShow);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      console.log('useMemo 데이터 가져오기 실행...');
      setIsLoginState(true);
    }
  }, [getShow, showData]);

  useDataFiltering(getShow, setShowData, interestTagCount, areaTagCount);

  const handleScroll = event => {
    setScrollPosition(event.target.scrollTop);
  };

  const sectionLayoutRef = useRef(null);

  const handleScrollTop = () => {
    sectionLayoutRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    setScrollPosition(0);
  };

  console.log('메인피드 렌더링...', showData);

  return (
    <>
      <TopBar />
      {showData.length !== 0 ? (
        <SectionLayout ref={sectionLayoutRef} scrollPosition={scrollPosition} onScroll={handleScroll}>
          <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
          <TotalCount data={showData} totalData={getShow} setData={setShowData} />
          {getShow && <FeedContents showInfo={showData} />}
          <div className="top-btn" onClick={handleScrollTop}>
            <img src={topBtn} alt="Scroll to Top" />
          </div>
        </SectionLayout>
      ) : (
        <Error text={'원하시는 필터링 결과가 없습니다 :('} buttonStyle={'category'} />
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
