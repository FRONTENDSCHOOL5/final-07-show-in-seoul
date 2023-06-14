import React from 'react';
import styled from 'styled-components';
import { constants } from './constants';
import Tags from './Tags';

const TagList = constants.area.map(el => {
  console.log(el);
  return <Tags text={el} />;
});

const AreaTag = () => {
  return (
    <SArea>
      <div className="area-tag-wrap">{TagList}</div>
    </SArea>
  );
};

export default AreaTag;

const SArea = styled.div`
  .area-tag-wrap {
    display: flex;
    column-gap: 15px;
    row-gap: 10px;
    flex-wrap: wrap;
    width: 350px;
    margin: 0 auto;
    justify-content: space-between;
  }
`;
