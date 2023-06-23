import React from 'react';
import styled from 'styled-components';
import Tags from './Tags';
import { AreaTags } from '../../Atom/atom';
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';

const AreaTag = () => {
  const setAreaTags = useSetRecoilState(AreaTags);
  const getAreaTags = useRecoilValue(AreaTags);
  const resetAreaTags = useResetRecoilState(AreaTags);

  return (
    <SArea>
      {getAreaTags.map((el, idx) => {
        return (
          <Tags
            index={idx}
            status={el[1]}
            text={el[0]}
            setTags={setAreaTags}
            getTags={getAreaTags}
            resetTags={resetAreaTags}
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
