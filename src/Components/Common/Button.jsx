import React from 'react';
import styled from 'styled-components';

const Button = ({ size, children, active, disabled, color }) => {
  return (
    <>
      <StyledButton size={size} active={active} disabled={disabled} color={color}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;

const StyledButton = styled.button`
  // 버튼 크기에 따른 사이즈 선택 (필수 요소)
  width: ${({ size }) => (size === 'Large' ? '322px' : size === 'Medium' ? '120px' : '90px')};
  height: ${({ size }) => (size === 'Large' ? '44px' : size === 'Medium' ? '34px' : '32px')};
  // 미지정 시 main color, gray는 회원가입과 돌아가기, white는 글쓰기와 프로필 수정 버튼 스타일
  background: ${({ color }) => (color === 'gray' ? '#DBDBDB' : color === 'white' ? '#FFFFFF' : '#961F1F')};
  // 미지정 시 기본 스타일
  // 글쓰기, 프로필 수정 버튼에서 활성화
  color: ${({ active }) => (active ? '#767676' : '#FFFFFF')};
  border: ${({ active }) => (active ? '1px solid #DBDBDB' : 'none')};

  border-radius: 44px;
  cursor: pointer;

  // disabled 일 때 기본값 설정(처음 화면 렌더링 될 때의 상태)
  &:disabled {
    background-color: #dcb6b6;
    cursor: initial;
  }
`;
