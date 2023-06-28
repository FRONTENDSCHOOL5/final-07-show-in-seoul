import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { showDateForm } from '../../Utils/showDetailFunction';

const SearchContent = ({ data, keyword }) => {
  const navigate = useNavigate();

  // 키워드 색상 변경을 위해 문자열로 변경 후 replace
  const beforeStr = JSON.stringify(data.TITLE);
  const chageStr = beforeStr.replace(new RegExp(keyword, 'g'), `<span>${keyword}</span>`);
  const afterStr = JSON.parse(chageStr);

  const goToShowDetailPage = () => {
    navigate('/showdetailpage', { state: [data, keyword] });
  };

  return (
    <SLink onClick={goToShowDetailPage}>
      <img src={data.MAIN_IMG} alt="포스터" />
      <div className="container">
        {/* 문자열을 html로 렌더링 해주는 속성 */}
        <h2 dangerouslySetInnerHTML={{ __html: afterStr }} />
        <p>
          {data.GUNAME} | {data.PLACE}
        </p>
        <p>{showDateForm(data.STRTDATE, data.END_DATE)}</p>
      </div>
    </SLink>
  );
};

export default SearchContent;

const SLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 87px;
    height: 87px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    object-fit: cover;
  }
  .container {
    width: 260px;
    h2 {
      display: inline-block;
      font-size: 14px;
      font-weight: 900;
      margin-top: 5px;
      line-height: 1.2;
      span {
        color: var(--warning);
      }
    }
    p {
      font-size: 12px;
      margin-top: 5px;
      line-height: 1.2;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      :nth-child(3) {
        color: grey;
      }
    }
  }
`;
