import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import SearchContent from '../Components/Article/SearchContent';
import BottomNav from '../Components/Common/BottomNav';
import showInfo from '../Assets/Data/서울시 문화행사 정보.json';

const SearchPage = () => {
  // 검색창 입력값 예시 : 추후 props로 받아올 것
  const keyword = '뮤지컬';
  // 예시로 타이틀에 뮤지컬이 포함되는 값만 가져왔습니다.
  const searchResult = showInfo.DATA.filter(obj => obj.title.includes(keyword));

  return (
    <>
      <TopBar leftEl={'search'} />
      <SSearch>
        <h1 class="a11y-hidden">행사 검색</h1>
        <p>
          검색결과 <span>{searchResult.length}</span>건
        </p>
        <ul class="searchResult">
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
  flex: 1;
  display: flex;
  flex-direction: column;
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
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
