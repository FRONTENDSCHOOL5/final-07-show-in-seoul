import React from 'react';
import styled from 'styled-components';
import { UserInterestTags, UserInterestTagCount } from '../../Atom/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ProfileTags from './ProfileTags';
import { useEffect } from 'react';

const ProfileInterests = ({ profile, introGenerator }) => {
  const setUserInterestTags = useSetRecoilState(UserInterestTags);
  const getUserInterestTags = useRecoilValue(UserInterestTags);
  const setUserInterestTagCount = useSetRecoilState(UserInterestTagCount);
  const getUserInterestTagCount = useRecoilValue(UserInterestTagCount);

  const updateCurrentTags = () => {
    let count = 0;
    setUserInterestTags(() => {
      const newArr = [];
      getUserInterestTags.forEach((el, idx) => {
        newArr.push(el.slice());
        if (profile.intro.indexOf(el[0]) !== -1) {
          count++;
          newArr[idx].pop();
          newArr[idx].push(true);
        }
      });
      console.log(newArr);
      return newArr;
    });
    setUserInterestTagCount(count);
  };

  useEffect(() => {
    if (getUserInterestTagCount !== 0) introGenerator();
  }, [getUserInterestTagCount]);

  useEffect(() => {
    updateCurrentTags();
  }, [profile]);

  return (
    <SProfileInterests>
      {getUserInterestTags.map(el => {
        return (
          <ProfileTags
            status={el[1]}
            text={el[0]}
            getTags={getUserInterestTags}
            setTags={setUserInterestTags}
            getCount={getUserInterestTagCount}
            setCount={setUserInterestTagCount}
          />
        );
      })}
    </SProfileInterests>
  );
};

export default ProfileInterests;

const SProfileInterests = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-content: center;
  margin-top: -10px;
`;
