import React from 'react';
import styled from 'styled-components';
import error from '../../Assets/Img/error.svg';

const Error = ({ text }) => {
  return (
    <div>
      <SError>
        {/* 에러 페이지 기본 이미지입니다*/}
        <img src={error} alt="에러화면 이미지입니다" className="error-img" />
        {/* 페이지에 맞는 에러 text를 작성해주세요*/}
        <p className="error-text">{text}</p>
      </SError>
    </div>
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
