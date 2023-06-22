import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ShowDeatailTopBar from '../Components/Article/ShowDeatailTopBar';
import ShowDetailInfo from '../Components/Article/ShowDetailInfo';
import BottomNav from '../Components/Common/BottomNav';

const ShowDetailPage = () => {
  const location = useLocation();
  const detailData = location.state;

  return (
    <>
      <SShowDetail>
        <div className="shadowStyle" />
        <ShowDeatailTopBar />
        <div class="posterImg">
          <img src={detailData.MAIN_IMG} alt="포스터" />
        </div>
        <ShowDetailInfo detailData={detailData} />
      </SShowDetail>
      <BottomNav />
    </>
  );
};

export default ShowDetailPage;

const SShowDetail = styled.div`
  position: relative;
  .shadowStyle {
    z-index: 10;
    width: 390px;
    height: 70vh;
    box-shadow: inset 0px 23px 35px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-top: -48px;
  }
  .posterImg {
    background-color: #000;
    height: 70vh;
    img {
      width: 390px;
      margin-top: -48px;
    }
  }
`;
