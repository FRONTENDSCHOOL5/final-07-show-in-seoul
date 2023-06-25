import React from 'react';
import styled from 'styled-components';
import { InterestTags, AreaTags, CategoryInterestTagCount, CategoryAreaTagCount } from '../../Atom/atom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

const TotalCount = ({ page, data }) => {
  const resetInterestTags = useResetRecoilState(InterestTags);
  const resetAreaTags = useResetRecoilState(AreaTags);
  const setInterestTagCount = useSetRecoilState(CategoryInterestTagCount);
  const setAreaTagCount = useSetRecoilState(CategoryAreaTagCount);

  let totalTitle = '총';
  if (page === 'search') {
    totalTitle = '검색결과';
  }

  const resetTags = () => {
    resetInterestTags();
    resetAreaTags();
    setInterestTagCount(0);
    setAreaTagCount(0);
  };

  return (
    <STotalCount>
      <p className="totalCount">
        {totalTitle} <span>{data.length}</span>건
      </p>
      {page !== 'search' && (
        <button className="totalShowBtn" onClick={resetTags}>
          전체보기
        </button>
      )}
    </STotalCount>
  );
};

export default TotalCount;

const STotalCount = styled.div`
  width: 390px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  font-size: 12px;
  background-color: #fff;
  .totalCount {
    span {
      color: var(--warning);
      font-weight: 900;
    }
  }
  .totalShowBtn {
    font-size: 12px;
  }
`;
