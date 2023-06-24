import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ShowDeatailTopBar from '../Components/Article/ShowDeatailTopBar';
import ShowDetailInfo from '../Components/Article/ShowDetailInfo';
import BottomNav from '../Components/Common/BottomNav';
import { useNavigate } from 'react-router-dom';

const ShowDetailPage = () => {
  // useTokenCheck();
  const detailData = useLocation().state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!detailData) {
      navigate('/errorpage', { state: 'invalidAccess' });
    }
  }, [detailData, navigate]);

  return (
    <>
      <SShowDetail>
        <div className="shadowStyle" />
        <ShowDeatailTopBar />
        <div className="posterImg">{detailData && <img src={detailData.MAIN_IMG} alt="포스터" />}</div>
        {detailData && <ShowDetailInfo detailData={detailData} />}
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
