import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import BottomNav from '../Components/Common/BottomNav';
import showInfo from '../Assets/Data/서울시 문화행사 정보.json';

const MainContent = ({ data }) => {
  return (
    <a>
      <img src={data.main_img} alt="포스터" />
      <p>{data.guname}</p>
      <h3>{data.title} </h3>
      <p>{data.place}</p>
      <p>{data.date}</p>
    </a>
  );
};

const MainFeed = () => {
  return (
    <section>
      <h2 className="a11y-hidden">서울시 문화행사 정보</h2>
      <ul>
        {showInfo.DATA.map((data, i) => {
          return (
            <li key={i}>
              <MainContent data={data} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const MainPage = () => {
  return (
    <MainLayout>
      <TopBar />
      <MainFeed />
      <BottomNav />
    </MainLayout>
  );
};

export default MainPage;

const MainLayout = styled.main`
  border: solid 1px #dbdbdb;
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
  section {
    flex: 1;
    overflow: scroll;
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 15px 10px;
      li {
        width: 160px;
        margin: 10px auto;
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
        img {
          width: 160px;
          height: 190px;
          border-radius: 10px;
          object-fit: cover;
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
      }
    }
  }
`;
