import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchContent = ({ data, keyword }) => {
  // 키워드 색상 변경을 위해 문자열로 변경
  const beforeStr = JSON.stringify(data.title);
  const chageStr = beforeStr.replace(new RegExp(keyword, 'g'), `<span>${keyword}</span>`);
  const afterStr = JSON.parse(chageStr);

  return (
    <SLink to="/ShowDetailPage">
      <img src={data.main_img} alt="포스터" />
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: afterStr }} />
        {/* <h2>{data.title}</h2> */}
        <p>
          {data.guname} | {data.place}
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
      font-weight: 900;
      margin-top: 5px;
      /* 여러줄 다 보이기 */
      overflow: hidden;
      white-space: normal;
      line-height: 1.2;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      span {
        color: var(--warning);
      }
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
