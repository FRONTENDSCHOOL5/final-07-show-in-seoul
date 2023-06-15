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
      <div>
        <div>
          <div></div>
        </div>
      </div>
      <div className="interest-tag-wrap">{TagList}</div>
    </SInterests>
  );
};

export default InterestsTag;

const SInterests = styled.div`
  .interest-tag-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 390px;
    margin: 0 auto;
    justify-content: flex-start;
  }

  .interest-tag-wrap .tags {
    padding: 5px 18px;
    width: auto;
  }
`;
