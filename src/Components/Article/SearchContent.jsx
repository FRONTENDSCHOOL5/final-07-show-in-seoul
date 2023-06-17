import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imgTest from '../../Assets/Img/포스터.jpeg';

const SearchContent = () => {
  return (
    <SLink>
      <img src={imgTest} alt="포스터" />
      <div class="container">
        <h3>공연 제목 공연 제목 공연 제목 공연 제목 공연 제목 공연 제목</h3>
        <p>공연 장소 / 지역구</p>
        <p>공연 일정</p>
      </div>
    </SLink>
  );
};

export default SearchContent;

const SLink = styled(Link)`
  /* margin: 10px 20px; */
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 87px;
    height: 87px;
    border-radius: 10px;
    object-fit: cover;
  }
  .container {
    width: 260px;
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
      :nth-child(3) {
        color: grey;
      }
    }
  }
`;
