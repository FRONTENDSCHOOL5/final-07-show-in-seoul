import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import SearchContent from '../Components/Search/SearchContent';
import BottomNav from '../Components/Common/BottomNav';
import { Show } from '../Atom/atom';
import { useRecoilValue } from 'recoil';
import TotalCount from '../Components/Article/TotalCount';

const SearchPage = () => {
  const showInfo = [...useRecoilValue(Show)];
  // 검색키워드 상태관리 할 변수
  const [keyword, setKeyword] = useState(null);
  // 키워드에 값이 없으면 빈 배열 반환, 있으면 해당 키워드 검색
  const searchResult = keyword ? showInfo.filter(obj => obj.TITLE.includes(keyword)) : [];

  return (
    <>
      {/* 상단바 input에서 값을 활용할 수 있도록 props로 setKeyword 전달*/}
      <TopBar leftEl={'search'} setKeyword={setKeyword} />
      <SSearch>
        <h1 className="a11y-hidden">행사 검색</h1>
        <TotalCount page={'search'} data={searchResult} />
        <ul className="searchResult">
          {searchResult.map((data, i) => {
            return (
              <li key={i}>
                <SearchContent data={data} keyword={keyword} />
              </li>
            );
          })}
        </ul>
      </SSearch>
      <BottomNav />
    </>
  );
};

export default SearchPage;

const SSearch = styled.section`
  height: calc(100vh - 108px);
  overflow-y: scroll;
  padding: 0 20px;
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  div {
    width: 350px;
    padding: 10px 5px;
  }
  .searchResult {
    flex: 1;
    overflow: scroll;
    margin-top: 32px;
    li:not(:last-child) {
      margin-bottom: 10px;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
