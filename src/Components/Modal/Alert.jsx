import React from 'react';
import styled from 'styled-components';

const AlertModal = ({ children, onConfirm, onCancel, confirmText = '', cancelText = '취소' }) => (
  <SOverlay>
    <div className="modal">
      <p className="message">{children}</p>
      <div className="btn-container">
        <button className="cancel-btn" onClick={onCancel}>
          {cancelText}
        </button>
        <button className="confirm-btn" onClick={onConfirm}>
          {confirmText}
        </button>
      </div>
    </div>
  </SOverlay>
);

export default AlertModal;

const SOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    width: 252px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
  }

  .message {
    flex: 1;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding: 20px;
    margin: 0;
  }

  .btn-container {
    display: flex;
  }

  button {
    flex: 1;
    padding: 12px 0;
    border: none;
    border-top: 1px solid #d4d4d4;
    color: black;
    border-radius: 0 0 10px 0;
  }

  .confirm-btn {
    border-left: 1px solid #d4d4d4;
    border-radius: 0 0 10px 0;
    color: #961f1f;

    &:hover {
      background-color: #ddd;
    }
  }

  .cancel-btn {
    border-radius: 0 0 0 10px;

    &:hover {
      background-color: #ddd;
    }
  }
`;
