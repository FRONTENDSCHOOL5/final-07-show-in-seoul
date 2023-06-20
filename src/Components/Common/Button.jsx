import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = ({ size, children, active, disabled, color, navigate }) => {
  const navi = useNavigate();

  const handleClick = () => {
    if (navigate) {
      navi(navigate);
    }
  };

  return (
    <>
      <StyledButton size={size} active={active} disabled={disabled} color={color} onClick={handleClick}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;

const SizeValue = size => {
  const sizes = {
    Large: {
      width: '322px',
      height: '44px',
      fontSize: '16px',
      fontWeight: 'normal',
    },
    Medium: {
      width: '120px',
      height: '34px',
      fontSize: '14px',
      fontWeight: 'normal',
    },
    MediumS: {
      width: '90px',
      height: '32px',
      fontSize: '14px',
      fontWeight: 'normal',
    },
  };

  return sizes[size] || sizes.MediumS;
};

const StyledButton = styled.button`
  // 버튼 크기에 따른 사이즈 선택 (필수 요소)
  ${({ size }) => {
    const { width, height, fontSize, fontWeight } = SizeValue(size);
    return `
      width: ${width};
      height: ${height};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    `;
  }}
  // 미지정 시 main color, gray는 회원가입과 돌아가기, white는 글쓰기와 프로필 수정 버튼 스타일
  background: ${({ color }) => {
    if (color === 'gray') {
      return '#DBDBDB';
    } else if (color === 'white') {
      return '#FFFFFF';
    } else {
      return '#961F1F';
    }
  }};
  // 미지정 시 기본 스타일
  // 글쓰기, 프로필 수정 버튼에서 활성화
  color: ${({ active }) => {
    if (active) {
      return '#767676';
    } else {
      return '#FFFFFF';
    }
  }};

  border: ${({ active }) => {
    if (active) {
      return '1px solid #DBDBDB';
    } else {
      return 'none';
    }
  }};

  border-radius: 44px;
  cursor: pointer;

  // disabled 일 때 기본값 설정(처음 화면 렌더링 될 때의 상태)
  &:disabled {
    background-color: #dcb6b6;
    cursor: initial;
  }
`;
