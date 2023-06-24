import React from 'react';
import styled from 'styled-components';
import Tags from './CategoryTags';
import { AreaTags } from '../../Atom/atom';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { CategoryAreaTagCount } from '../../Atom/atom';

const AreaTag = () => {
  const setAreaTags = useSetRecoilState(AreaTags);
  const getAreaTags = useRecoilValue(AreaTags);
  const resetAreaTags = useResetRecoilState(AreaTags);
  const setAreaTagcount = useSetRecoilState(CategoryAreaTagCount);
  const getAreaTagCount = useRecoilValue(CategoryAreaTagCount);

  console.log('Area:  ', getAreaTagCount);
  return (
    <SArea>
      {getAreaTags.map(el => {
        return (
          <Tags
            status={el[1]}
            text={el[0]}
            setTags={setAreaTags}
            getTags={getAreaTags}
            resetTags={resetAreaTags}
            getCount={getAreaTagCount}
            setCount={setAreaTagcount}
          />
        );
      })}
    </SArea>
  );
};

export default AreaTag;

const SArea = styled.div`
  display: flex;
  column-gap: 11px;
  row-gap: 15px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
