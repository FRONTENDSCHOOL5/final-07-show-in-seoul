import React from 'react';
import styled from 'styled-components';

const Tags = ({ text, status, getTags, setTags, resetTags, setCount, getCount }) => {
  const toggle = e => {
    let count = 0;
    if (e.target.textContent === '전체') {
      resetTags();
      setCount(0);
    } else {
      setTags(() => {
        const newArr = [];
        getTags.forEach((el, i) => {
          newArr.push(el.slice());
          if (el[0] === e.target.textContent) {
            if (el[1]) {
              status = false;
              count = -1;
            } else {
              status = true;
              count = 1;
            }
            newArr[i].push(!newArr[i].pop());
          }
        });
        newArr[0].pop();
        newArr[0].push(false);
        return newArr;
      });
      setCount(getCount + count);
    }
    if (getCount + count === 0) {
      resetTags();
    }
  };

  if (status)
    return (
      <STags className="active" onClick={toggle}>
        {text}
      </STags>
    );
  return <STags onClick={toggle}>{text}</STags>;
};

export default Tags;

const STags = styled.div`
  padding: 6px 14px;
  background-color: #f1f0f0;
  color: #878787;
  font-size: 14px;
  border-radius: 30px;
  min-width: 60px;
  text-align: center;
  cursor: pointer;

  &.active {
    color: white;
    background-color: #961f1f;
  }
`;
