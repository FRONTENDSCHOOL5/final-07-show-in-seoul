import React from 'react';
import styled from 'styled-components';
import error from '../../Assets/Img/error.svg';
import Button from './Button';

const Error = ({ text, buttonStyle }) => {
  let move = '/';
  let message = '';

  // 버튼스타일에 따른 렌더링값 설정
  if (buttonStyle === '404') {
    move = '-1';
    message = '이전 페이지';
  } else if (buttonStyle === 'invalidAccess') {
    move = '/mainpage';
    message = '메인 페이지';
  } else if (buttonStyle === 'tokenError') {
    move = '/loginpage';
    message = '로그인하기';
  } else if (buttonStyle === 'category') {
    move = '/categorypage';
    message = '다시 선택하기';
  }

  return (
    <SError>
      <img src={error} alt="에러화면 이미지입니다" className="error-img" />
      <p className="error-text">{text}</p>
      {buttonStyle && (
        <Button size="Medium" navigate={move}>
          {message}
        </Button>
      )}
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
  height: 100%;
  margin: 0 auto;
  .error-text {
    color: #767676;
    font-size: 14px;
  }
`;
