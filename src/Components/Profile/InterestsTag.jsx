import React from 'react';
import styled from 'styled-components';
import Tags from './CategoryTags';
import { InterestTags } from '../../Atom/atom';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { CategoryInterestTagCount } from '../../Atom/atom';

const InterestsTag = ({ etc }) => {
  const setInterestTags = useSetRecoilState(InterestTags);
  const getInterestTags = useRecoilValue(InterestTags);
  const resetInterestsTags = useResetRecoilState(InterestTags);
  const setInterestTagcount = useSetRecoilState(CategoryInterestTagCount);
  const getInterestTagCount = useRecoilValue(CategoryInterestTagCount);

  console.log('Interests: ', getInterestTagCount);
  return (
    <SInterests>
      {getInterestTags.map(el => {
        if (!etc && (el[0] === '전체' || el[0] === '기타')) {
          return <></>;
        } else {
          return (
            <Tags
              status={el[1]}
              text={el[0]}
              getTags={getInterestTags}
              setTags={setInterestTags}
              resetTags={resetInterestsTags}
              getCount={getInterestTagCount}
              setCount={setInterestTagcount}
            />
          );
        }
      })}
    </SInterests>
  );
};

export default InterestsTag;

const SInterests = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-content: center;
`;
