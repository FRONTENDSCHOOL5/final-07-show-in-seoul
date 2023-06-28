import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const FeedContents = ({ showInfo }) => {
  // console.log('메인피드 컨텐츠 다운로드 : ', showInfo);
  return (
    <SFeedContents>
      {/* json으로 받아온 데이터 map 함수 활용하여 표시 */}
      {showInfo.map((data, i) => {
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
