import React from 'react';
import styled from 'styled-components';

const CategoryHeader = ({ title }) => {
  return (
    <SCategoryHedaer>
      <h1>{title}</h1>
    </SCategoryHedaer>
  );
};

export default CategoryHeader;

const SCategoryHedaer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--gray);
  margin-bottom: 16px;
  h1 {
    font-size: 20px;
    padding: 9px 15px;
    color: var(black);
  }
`;
