import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import BottomNav from '../Components/Common/BottomNav';
import imgPoster from '../Assets/Img/포스터.jpeg';

const MainContent = () => {
  return (
    <section>
      <h2 className="a11y-hidden">서울시 문화행사 정보</h2>
      <div>
        <a>
          <img src={imgPoster} alt="포스터" />
          <p>마포구</p>
          <h3>여러줄이면 어떻게되나 봅시다 테스트1테스트2테스트3테스트4테스트5 </h3>
          <p>마포아트센터 아트홀맥</p>
          <p>2023. 12. 05.~2023. 12. 05.</p>
        </a>
        <a>
          <img src={imgPoster} />
          <p>마포구</p>
          <h3>M 아티스트 2023 김도현 피아노 리사이틀 II</h3>
          <p>마포아트센터 아트홀맥</p>
          <p>2023. 12. 05.~2023. 12. 05.</p>
        </a>
        <a>
          <img src={imgPoster} />
          <p>마포구</p>
          <h3>한줄은? </h3>
          <p>마포아트센터 아트홀맥</p>
          <p>2023. 12. 05.</p>
        </a>
        <a>
          <img src={imgPoster} />
          <p>마포구</p>
          <h3>M 아티스트 2023 김도현 피아노 리사이틀 II</h3>
          <p>마포아트센터 아트홀맥</p>
          <p>2023. 12. 05.~2023. 12. 05.</p>
        </a>
        <a>
          <img src={imgPoster} />
          <p>마포구</p>
          <h3>M 아티스트 2023 김도현 피아노 리사이틀 II</h3>
          <p>마포아트센터 아트홀맥</p>
          <p>2023. 12. 05.~2023. 12. 05.</p>
        </a>
        <a>
          <img src={imgPoster} />
          <p>마포구</p>
          <h3>M 아티스트 2023 김도현 피아노 리사이틀 II</h3>
          <p>마포아트센터 아트홀맥</p>
          <p>2023. 12. 05.~2023. 12. 05.</p>
        </a>
      </div>
    </section>
  );
};

const MainPage = () => {
  return (
    <MainLayout>
      <TopBar />
      <MainContent />
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
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 15px 10px;
      a {
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
