import React from 'react';
import styled, { keyframes } from 'styled-components';

const Modal = ({ children, onCancel }) => {
  return (
    <SModal>
      <div className="background" onClick={onCancel}></div>
      <div className="modal">{children}</div>
    </SModal>
  );
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  .background {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .modal {
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
  }
`;
