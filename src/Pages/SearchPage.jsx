import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import SearchContent from '../Components/Article/SearchContent';
import BottomNav from '../Components/Common/BottomNav';

const SearchPage = () => {
  let count = 13;
  return (
    <>
      <h1 class="a11y-hidden">행사 검색</h1>
      <TopBar leftEl={'search'} />
      <SSearch>
        <h2 class="a11y-hidden">행사 검색 결과</h2>
        <p>
          검색결과 <span>{count}</span>건
        </p>
        <ul class="searchResult">
          <li>
            <SearchContent />
          </li>
          <li>
            <SearchContent />
          </li>
        </ul>
      </SSearch>
      <BottomNav />
    </>
  );
};

export default SearchPage;

const SSearch = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* height: 721px; */
  height: 80vh;
  padding: 0 20px;
  p {
    font-size: 12px;
    margin: 10px 0;
    span {
      color: var(--warning);
      font-weight: bold;
    }
  }
  .searchResult {
    flex: 1;
    overflow: scroll;
    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
