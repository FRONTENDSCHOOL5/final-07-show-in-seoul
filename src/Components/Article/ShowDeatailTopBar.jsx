import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TopBarBtn from '../Common/TopBarBtn';
import iconArrowWhite from '../../Assets/Icon/icon-arrow-white.svg';
import iconShare from '../../Assets/Icon/icon-share.svg';

const ShowDeatailTopBar = ({ data, keyword }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!!keyword) {
      navigate(-1);
    } else {
      navigate('/mainpage', { state: null });
    }
  };

  return (
    <SShowDetailTopBar>
      <div className="topBtns">
        <TopBarBtn id="arrowWhite" icon={iconArrowWhite} altTxt={'뒤로가기'} onClick={handleClick} />
        <TopBarBtn icon={iconShare} altTxt={'뒤로가기'} />
      </div>
    </SShowDetailTopBar>
  );
};

export default ShowDeatailTopBar;

const SShowDetailTopBar = styled.header`
  z-index: 20;
  margin-top: -48px;
  position: fixed;
  .topBtns {
    width: 390px;
    padding: 5px 10px 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #arrowWhite {
      width: 35px;
      height: 35px;
    }
  }
`;
