import React from 'react';
import { styled } from 'styled-components';

const InputBox = props => {
  return (
    <SInputBox>
      <label className="input-label" htmlFor="input-content">
        {props.title}
      </label>

      <input disabled id="input-content" type="text" placeholder={props.placeholder} />
    </SInputBox>
  );
};

export default InputBox;

const SInputBox = styled.form`
  #input-content {
    width: 390px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 0 5px 0;
    outline: none;
    background-color: white;
  }
  #input-content::placeholder {
    color: #dbdbdb;
  }
  .input-label {
    color: #767676;
  }
`;
