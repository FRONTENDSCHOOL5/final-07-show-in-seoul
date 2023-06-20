import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import SearchContent from '../Components/Article/SearchContent';
import BottomNav from '../Components/Common/BottomNav';
import showInfo from '../Assets/Data/서울시 문화행사 정보.json';

const SearchPage = () => {
  const [keyword, setKeyword] = useState(null);

  const searchResult = keyword ? showInfo.DATA.filter(obj => obj.title.includes(keyword)) : [];
  console.log(searchResult);

  return (
    <>
      <TopBar leftEl={'search'} setKeyword={setKeyword} />
      <SSearch>
        <h1 className="a11y-hidden">행사 검색</h1>
        <p className="searchResultNumber">
          검색결과 <span>{searchResult.length}</span>건
        </p>
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
  .searchResultNumber {
    width: 350px;
    padding: 10px;
    position: fixed;
    font-size: 12px;
    background-color: #fff;
    span {
      color: var(--warning);
      font-weight: 900;
    }
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
