import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import TotalCount from '../Components/Article/TotalCount';
import FeedContents from '../Components/Article/FeedContents';
import Error from '../Components/Common/Error';
import BottomNav from '../Components/Common/BottomNav';
import GetShowAPI from '../API/GetShowAPI';
import { Show, IsLoginState, CategoryInterestTagCount, CategoryAreaTagCount } from '../Atom/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import useDataFiltering from '../Hook/useDataFiltering';

const MainPage = () => {
  const [getShow, setShow] = useRecoilState(Show);
  const [isLoginState, setIsLoginState] = useRecoilState(IsLoginState);
  const interestTagCount = useRecoilValue(CategoryInterestTagCount);
  const areaTagCount = useRecoilValue(CategoryAreaTagCount);

  const [showData, setShowData] = useState([]);

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

  // 태그 선택값 확인 후 결과 값 showData에 담기
  useDataFiltering(getShow, setShowData, interestTagCount, areaTagCount);

  console.log('메인피드 렌더링...', showData);

  return (
    <>
      <TopBar />
      {showData.length !== 0 ? (
        <SectionLayout>
          <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
          <TotalCount data={showData} totalData={getShow} setData={setShowData} />
          {getShow && <FeedContents showInfo={showData} />}
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
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    margin-top: 25px;
  }
`;
