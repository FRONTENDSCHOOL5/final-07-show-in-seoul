import React from 'react';
import styled from 'styled-components';
import BottomNav from '../Components/Common/BottomNav';
import Button from '../Components/Common/Button';
import TopBar from '../Components/Common/TopBar';
import Tags from '../Components/Profile/Tags';

const ShowDetailPage = ({ props }) => {
  const showInfo = [
    { id: 1, title: '신청일자', data: '2023. 05. 18.' },
    { id: 2, title: '공연일자', data: '2023.7. 2. ~ 2023. 8. 17.' },
    { id: 3, title: '이용대상', data: '전체 연령 관람가' },
    { id: 4, title: '이용요금', data: '일반 10,000원 / 어린이 및 학생 8,000원 등' },
  ];

  return (
    <>
      {/* <TopBar leftEl={'backWhite'} rightEl={'share'} /> */}
      <SShowDetail>
        <h1 className="a11y-hidden">Show Dtail</h1>
        <div className="info">
          <div className="tags">
            <Tags text="전시/미술" />
            <Tags text="공연예정" />
          </div>
          <div class="info-txt">
            <h2>나루 큐브 프로젝트 [My Dear 피노키오展]</h2>
            <p class="place">광진구 | 나루아트센터 전시실</p>
            {showInfo.map(data => {
              return (
                <p>
                  <span>{data.title}</span>
                  {data.data}
                </p>
              );
            })}
          </div>
          <a>
            <Button size="Large">상세페이지 이동하기</Button>
          </a>
        </div>
      </SShowDetail>
      <BottomNav />
    </>
  );
};

export default ShowDetailPage;

const imgSrc = 'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=6a59720cd9c34bbfa056eb6b5031f809&thumb=Y';

const SShowDetail = styled.section`
  flex: 1;
  background: url(${imgSrc}) no-repeat center top / 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  .info {
    padding: 30px 34px 10px 34px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    .tags {
      display: flex;
      gap: 10px;
      margin-bottom: 10px;
      div {
        text-align: center;
        div {
          background-color: var(--main);
          color: white;
        }
      }
    }
    .info-txt {
      /* margin-bottom: 30px; */
      h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .place {
        border-bottom: 1px solid var(--gray);
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 10px;
        font-size: 12px;
        span {
          color: var(--deepgray);
          &::after {
            content: '|';
            color: var(--gray);
            margin: 0 15px;
          }
        }
      }
      &:nth-child(2) {
        margin-bottom: 30px;
      }
    }
  }
`;
