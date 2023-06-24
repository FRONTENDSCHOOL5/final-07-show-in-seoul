import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Common/Button';
// import Tags from '../Profile/InterestsTags';
import { showCodeName, showDataTrim } from '../../Utils/showDetailFunction';

const ShowDetailInfo = ({ detailData }) => {
  const detailDataArr = [
    { list: '신청일자', data: detailData.rgstdate },
    // { list: '공연일자', data: showDateForm(detailData.STRTDATE, detailData.END_DATE) },
    { list: '공연일자', data: detailData.date },
    { list: '이용대상', data: detailData.use_trgt },
    { list: '이용요금', data: detailData.use_fee },
  ];

  return (
    <SShowDtailInfo>
      <h1 className="a11y-hidden">Show Dtail</h1>
      <div className="tags">
        {/* 추후 수정 필요 - 공연종료 | 공연중 | 공연예정 */}
        <div>{showCodeName(detailData.codename)}</div>
        <div>공연상태</div>
      </div>
      <div className="info-txt">
        <h2>{detailData.title}</h2>
        <p className="place">
          {detailData.guname} | {detailData.place}
        </p>
        <ul>
          {detailDataArr.map((data, i) => {
            return (
              <li key={i}>
                <p className="list">{data.list}</p>
                <p>{showDataTrim(data.data)}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <Link to={detailData.org_link}>
        <Button size="Large">상세페이지 이동하기</Button>
      </Link>
    </SShowDtailInfo>
  );
};

export default ShowDetailInfo;

const SShowDtailInfo = styled.section`
  z-index: 30;
  width: 390px;
  padding: 25px 34px 10px 34px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 60px;
  .tags {
    display: flex;
    gap: 10px;
    margin-bottom: 7px;
    text-align: center;
    div {
      font-size: 14px;
      padding: 5px 10px;
      background-color: var(--main);
      color: white;
      border-radius: 30px;
    }
  }
  .info-txt {
    line-height: 1.3;
    h2 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .place {
      border-bottom: 1px solid var(--gray);
      padding-bottom: 15px;
      margin-bottom: 20px;
      font-size: 12px;
    }
    li {
      display: flex;
      margin-bottom: 10px;
      font-size: 12px;
      .list {
        flex: 0 0 76px;
        color: var(--deepgray);
        &::after {
          content: '|';
          color: var(--gray);
          margin: 0 15px;
        }
      }
    }
  }
  button {
    margin-top: 20px;
  }
`;
