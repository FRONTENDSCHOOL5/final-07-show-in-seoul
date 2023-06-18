import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchContent = ({ data, keyword }) => {
  return (
    <SLink to="/ShowDetailPage">
      <img src={data.main_img} alt="포스터" />
      <div class="container">
        <h2>{data.title}</h2>
        <p>
          {data.place} / {data.guname}
        </p>
        <p>{data.date}</p>
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
    h2 {
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      margin-top: 5px;
      /* 여러줄 다 보이기 */
      overflow: hidden;
      white-space: normal;
      line-height: 1.2;
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
