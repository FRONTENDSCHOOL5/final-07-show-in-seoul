import React from 'react';
import styled from 'styled-components';
import Tags from './Tags';
import { InterestTags } from '../../Atom/atom';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';

const InterestsTag = () => {
  const setInterestTags = useSetRecoilState(InterestTags);
  const getInterestTags = useRecoilValue(InterestTags);
  const resetInterestsTags = useResetRecoilState(InterestTags);

  return (
    <SInterests>
      {getInterestTags.map((el, idx) => {
        return (
          <Tags
            index={idx}
            status={el[1]}
            text={el[0]}
            getTags={getInterestTags}
            setTags={setInterestTags}
            resetTags={resetInterestsTags}
          />
        );
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
