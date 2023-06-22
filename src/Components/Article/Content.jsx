import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { showDateForm } from '../../Utils/showDetailFunction';

const Content = ({ data }) => {
  return (
    <SLink to="/ShowDetailPage" state={data}>
      <div className="imgBox">
        <img src={data.MAIN_IMG} alt="포스터 이미지" />
      </div>
      <p>{data.GUNAME}</p>
      <h2>{data.TITLE} </h2>
      <p>{data.PLACE}</p>
      <p>{showDateForm(data.STRTDATE, data.END_DATE)}</p>
    </SLink>
  );
};

export default Content;

const SLink = styled(Link)`
  .imgBox {
    width: 160px;
    height: 190px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    font-size: 14px;
    font-weight: bold;
    margin-top: 5px;
    /* 여러줄 다 보이기 */
    overflow: hidden;
    white-space: normal;
    display: -webkit-box;
    line-height: 1.2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  p {
    font-size: 12px;
    margin-top: 5px;
    line-height: 1.2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    &:nth-child(2) {
      color: salmon;
    }
    &:nth-child(5) {
      color: grey;
    }
  }
`;
