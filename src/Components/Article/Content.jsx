import React from 'react';
import styled from 'styled-components';

const Content = ({ data }) => {
  return (
    <SLink>
      <img src={data.main_img} alt="포스터" />
      <p>{data.guname}</p>
      <h3>{data.title} </h3>
      <p>{data.place}</p>
      <p>{data.date}</p>
    </SLink>
  );
};

export default Content;

const SLink = styled.a`
  img {
    width: 160px;
    height: 190px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  h3 {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
    /* 여러줄 다 보이기 */
    overflow: hidden;
    white-space: normal;
    /* 스타일 추가 */
    text-align: left;
    line-height: 1.2;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    font-size: 12px;
    margin-top: 5px;
    line-height: 1.2;
    /* overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap; */
    &:nth-child(2) {
      color: salmon;
    }
    &:nth-child(5) {
      color: grey;
    }
  }
`;
