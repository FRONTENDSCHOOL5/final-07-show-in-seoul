import React from 'react';
import styled from 'styled-components';
import SError from '../Components/Common/Error';

const TokenErrorPage = () => {
  const prevPathname = window.history.state?.key || null;
  console.log(prevPathname);
  return (
    <SContainer>
      <SError text="잘못된 접근경로 입니다 :(" buttonStyle="tokenError"></SError>
    </SContainer>
  );
};

export default TokenErrorPage;

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
