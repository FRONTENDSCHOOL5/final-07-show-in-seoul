import React from 'react';
import styled from 'styled-components';

const Skeleton = () => {
  return (
    <SSkeleton>
      <p>Skeleton</p>
      <p>Skeleton</p>
      <p>Skeleton</p>
      <p>Skeleton</p>
      <p>Skeleton</p>
      <p>Skeleton</p>
      <p>테스트</p>
      <p>테스트</p>
      <p>테스트</p>
      <p>테스트</p>
      <p>테스트</p>
    </SSkeleton>
  );
};

export default Skeleton;

const SSkeleton = styled.div`
  text-align: center;
`;
