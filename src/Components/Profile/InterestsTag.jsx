import React from 'react';
import styled from 'styled-components';
import { constants } from './constants';
import Tags from './Tags';

const TagList = constants.category.map(el => {
  console.log(el);
  return <Tags text={el} />;
});

const InterestsTag = () => {
  return (
    <SInterests>
      <div className="interest-tag-wrap">{TagList}</div>
    </SInterests>
  );
};

export default InterestsTag;

const SInterests = styled.div`
  .interest-tag-wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    width: 345px;
    margin: 0 auto;
    /* justify-content: space-between; */
  }
`;
