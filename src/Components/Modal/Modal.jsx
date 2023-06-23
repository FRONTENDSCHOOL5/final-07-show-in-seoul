import React from 'react';
import styled, { keyframes } from 'styled-components';

const Modal = ({ children }) => {
  return <SModal>{children}</SModal>;
};

export default Modal;

const slideUp = keyframes`
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
`;

const SModal = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  padding: 20px;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
  animation: ${slideUp} 0.5s ease-out;

  &::before {
    content: '';
    position: absolute;
    width: 55px;
    height: 4px;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #dbdbdb;
    border-radius: 2px;
  }

  p {
    margin: 35px 10px 20px 8px;
    cursor: pointer;
  }
`;
