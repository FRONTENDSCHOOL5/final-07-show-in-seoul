import React from 'react';
import styled from 'styled-components';
import error from '../../Assets/Img/error.svg';
import Button from './Button';

const Error = ({ text, buttonStyle }) => {
  return (
    <SError>
      {/* 에러 페이지 기본 이미지입니다*/}
      <img src={error} alt="에러화면 이미지입니다" className="error-img" />

      {/* 페이지에 맞는 에러 text를 작성해주세요*/}
      <p className="error-text">{text}</p>

      {/* buttonStyle을 404, category 두가지로 나누었습니다. */}
      {buttonStyle === '404' && <Button size="Medium">이전 페이지</Button>}
      {buttonStyle === 'category' && <Button size="Medium">돌아가기</Button>}
    </SError>
  );
};

export default Error;

const SError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .error-text {
    color: #767676;
    font-size: 14px;
  }
`;
