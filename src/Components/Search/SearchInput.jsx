import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SearchInput = ({ setKeyword }) => {
  const [prevKeyword, setPrevKeyword] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (newKeyword !== prevKeyword) {
      setKeyword(newKeyword);
      setPrevKeyword(newKeyword);
    }
  }, [newKeyword]);

  const submitButtonHandler = e => {
    e.preventDefault();
    setNewKeyword(inputValue);
  };

  return (
    <SSearchInput>
      <input placeholder="행사 검색" onChange={e => setInputValue(e.target.value)} />
      <button type="submit" onClick={submitButtonHandler}>
        검색
      </button>
    </SSearchInput>
  );
};

export default SearchInput;

const SSearchInput = styled.form`
  width: 100%;
  /* padding: 0 0 0 15px; */
  input {
    width: calc(100% - 30px);
    height: 32px;
    background-color: #f2f2f2;
    border-radius: 30px;
    padding: 0 15px;
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;
