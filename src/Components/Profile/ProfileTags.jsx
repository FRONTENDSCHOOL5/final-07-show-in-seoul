import React from 'react';
import styled from 'styled-components';
import { InfoWarning } from '../../Atom/atom';
import { useSetRecoilState } from 'recoil';

const ProfileTags = ({ text, status, getTags, setTags, setCount, getCount }) => {
  const setWarning = useSetRecoilState(InfoWarning);

  const toggle = e => {
    console.log(getCount);
    if (getCount === 4 && !e.target.classList.contains('active')) {
      setWarning(true);
      return;
    }
    setWarning(false);
    let count = 0;
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
      return newArr;
    });
    setCount(getCount + count);
  };
  if (status)
    return (
      <SProfileTags className="active" onClick={toggle}>
        {text}
      </SProfileTags>
    );
  return <SProfileTags onClick={toggle}>{text}</SProfileTags>;
};

export default ProfileTags;

const SProfileTags = styled.div`
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
