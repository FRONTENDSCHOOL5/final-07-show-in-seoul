import React from 'react';
import styled from 'styled-components';

const TotalCount = ({ page, data }) => {
  let totalTitle = '총';
  if (page === 'search') {
    totalTitle = '검색결과';
  }

  return (
    <STotalCount>
      <p className="totalCount">
        {totalTitle} <span>{data.length}</span>건
      </p>
      {page !== 'search' && <button className="totalShowBtn">전체보기</button>}
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
