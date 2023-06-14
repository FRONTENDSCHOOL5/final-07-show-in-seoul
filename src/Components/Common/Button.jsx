import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${({ size }) => (size === 'Large' ? '322px' : size === 'Medium' ? '120px' : '90px')};
  height: ${({ size }) => (size === 'Large' ? '44px' : size === 'Medium' ? '34px' : '32px')};
  background: ${({ color }) => (color === 'gray' ? '#DBDBDB' : color === 'white' ? '#FFFFFF' : '#961F1F')};
  color: ${({ active }) => (active ? '#767676' : '#FFFFFF')};
  border: ${({ active }) => (active ? '1px solid #DBDBDB' : 'none')};
  border-radius: 44px;
  cursor: pointer;

  &:disabled {
    background-color: #dcb6b6;
    cursor: initial;
  }
`;

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
