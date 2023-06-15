import React from 'react';
import styled from 'styled-components';
import showInfo from '../../Assets/Data/서울시 문화행사 정보.json';
import Content from './Content';

const FeedContents = () => {
  return (
    <SFeedContents>
      {showInfo.DATA.map((data, i) => {
        return (
          <li key={i}>
            <Content data={data} />
          </li>
        );
      })}
    </SFeedContents>
  );
};

export default FeedContents;

const SFeedContents = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 15px 10px;
  li {
    width: 160px;
    margin: 10px auto;
  }
`;
