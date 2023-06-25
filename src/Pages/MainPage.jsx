import React, { useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import TotalCount from '../Components/Article/TotalCount';
import FeedContents from '../Components/Article/FeedContents';
import BottomNav from '../Components/Common/BottomNav';
import GetShowAPI from '../API/GetShowAPI';
import {
  Show,
  IsLoginState,
  CategoryInterestTagCount,
  CategoryAreaTagCount,
  InterestTags,
  AreaTags,
} from '../Atom/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const MainPage = () => {
  const [getShow, setShow] = useRecoilState(Show);
  const [isLoginState, setIsLoginState] = useRecoilState(IsLoginState);
  const interestTagCount = useRecoilValue(CategoryInterestTagCount);
  const areaTagCount = useRecoilValue(CategoryAreaTagCount);
  const interastTags = useRecoilValue(InterestTags);
  const areaTags = useRecoilValue(AreaTags);
  const [showData, setShowData] = useState([]);

  console.log(`tags count : ${interestTagCount} / ${areaTagCount}`);

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

  useEffect(() => {
    let resultData = [...getShow];
    if (interestTagCount || areaTagCount) {
      let trueList = [];
      if (interestTagCount) {
        trueList = interastTags.filter(el => el[1] === true).map(tag => tag[0]);
        resultData = [
          ...getShow.filter(data => {
            return trueList.some(tag => tag === data.CODENAME);
          }),
        ];
      }
      if (areaTagCount) {
        trueList = areaTags.filter(el => el[1] === true).map(tag => tag[0]);
        resultData = [
          ...getShow.filter(data => {
            return trueList.some(tag => tag === data.GUNAME);
          }),
        ];
      }
    }
    setShowData(resultData);
  }, []);

  console.log('메인피드 렌더링...', showData);

  return (
    <>
      <TopBar />
      <SectionLayout>
        <h1 className="a11y-hidden">서울시 문화행사 정보</h1>
        <TotalCount data={showData} totalData={getShow} setData={setShowData} />
        {getShow && <FeedContents showInfo={showData} />}
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
  ul {
    margin-top: 25px;
  }
`;
