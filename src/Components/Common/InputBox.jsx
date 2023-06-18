import React from 'react';
import { styled } from 'styled-components';

const InputBox = props => {
  return (
    <SInputBox>
      <label className="input-label" htmlFor="input-content">
        {props.title}
      </label>
      <input disabled={props.disabled} id="input-content" type="text" placeholder={props.placeholder} />
    </SInputBox>
  );
};

export default InputBox;

const SInputBox = styled.form`
  width: 100%;
  position: relative;
  text-align: center;

  #input-content {
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 0 5px 0;
    text-align: left;
    margin-top: 10px;
    font-size: 14px;
  }
  #input-content:disabled {
    border: none;
  }
  #input-content::placeholder {
    color: var(--gray);
  }

  .input-label {
    color: var(--deepgray);
    font-size: 12px;
    position: absolute;
  }
`;
