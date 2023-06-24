import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TopBarBtn from '../Common/TopBarBtn';
import iconSearch from '../../Assets/Icon/icon-search.svg';

const SearchInput = ({ setKeyword }) => {
  const [prevKeyword, setPrevKeyword] = useState('');
  const [newKeyword, setNewKeyword] = useState('');

  // newKeyword 값이 변하고, 이전 키워드와 현재 키워드가 일치하지 않을 때에만 변경
  useEffect(() => {
    if (newKeyword !== prevKeyword) {
      setKeyword(newKeyword); // 새로운 키워드를 부모 컴포넌트로 전달하여 처리
      setPrevKeyword(newKeyword); // 이전 키워드를 갱신
    }
  }, [newKeyword]);

  const submitButtonHandler = (e, inputValue) => {
    // 버튼 클릭시 다른이벤트는 중지하고 입력값을 새로운 키워드로 설정
    e.preventDefault();
    setNewKeyword(inputValue);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      submitButtonHandler(e, e.target.value);
    }
  };

  return (
    <SSearchInput>
      {/* onChange 이벤트가 발생하면 inputValue 변경 */}
      <input placeholder="행사 검색" onKeyPress={handleKeyPress} />
      <TopBarBtn
        type="submit"
        onClick={e => submitButtonHandler(e, e.target.previousElementSibling.value)}
        icon={iconSearch}
        alt={'검색'}
      />
    </SSearchInput>
  );
};

export default SearchInput;

const SSearchInput = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  input {
    width: calc(100% - 30px);
    height: 32px;
    background-color: #f2f2f2;
    border-radius: 30px;
    padding: 0 15px;
    margin-right: 15px;
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;
