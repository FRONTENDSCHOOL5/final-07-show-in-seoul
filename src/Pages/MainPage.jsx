import React, { useMemo } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import FeedContents from '../Components/Article/FeedContents';
import BottomNav from '../Components/Common/BottomNav';
import { Show } from '../Atom/atom';
import { useRecoilState } from 'recoil';
import jsonData from '../Assets/Data/서울시 문화행사 정보.json';

const MainPage = () => {
  const [getShow, setShow] = useRecoilState(Show);

  useMemo(() => {
    if (getShow.length === 0) {
      setShow(jsonData.DATA);
      console.log('useMemo 데이터 얻어오기 실행...');
    }
  }, [getShow]);

  console.log('렌더링...');
  console.log(getShow);
  // const showInfo = [...getShow];

  return (
    <>
      <TopBar />
      <SectionLayout>
        <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
        {getShow && <FeedContents showInfo={getShow} />}
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
