import React from 'react';
import styled from 'styled-components';
import SError from '../Components/Common/Error';

const ErrorPage = () => {
  return (
    <SContainer>
      <SError text="페이지를 찾을 수 없습니다. :(" buttonStyle="404"></SError>
    </SContainer>
  );
};

export default ErrorPage;

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
