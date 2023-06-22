import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchContent = ({ data, keyword }) => {
  // 키워드 색상 변경을 위해 문자열로 변경 후 replace
  const beforeStr = JSON.stringify(data.TITLE);
  const chageStr = beforeStr.replace(new RegExp(keyword, 'g'), `<span>${keyword}</span>`);
  const afterStr = JSON.parse(chageStr);

  return (
    <SLink to="/ShowDetailPage" state={data}>
      <img src={data.MAIN_IMG} alt="포스터" />
      <div className="container">
        {/* 문자열을 html로 렌더링 해주는 속성 */}
        <h2 dangerouslySetInnerHTML={{ __html: afterStr }} />
        <p>
          {data.GUNAME} | {data.PLACE}
        </p>
        <p>{data.DATE}</p>
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
