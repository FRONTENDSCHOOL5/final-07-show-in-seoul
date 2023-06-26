import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import skeleton1 from '../../Assets/Icon/skeleton/skeleton-icon1.svg';
import skeleton2 from '../../Assets/Icon/skeleton/skeleton-icon2.svg';
import skeleton3 from '../../Assets/Icon/skeleton/skeleton-icon3.svg';
import skeleton4 from '../../Assets/Icon/skeleton/skeleton-icon4.svg';
import skeleton5 from '../../Assets/Icon/skeleton/skeleton-icon5.svg';
import skeleton6 from '../../Assets/Icon/skeleton/skeleton-icon6.svg';

const iconList = [skeleton1, skeleton2, skeleton3, skeleton4, skeleton5, skeleton6];

const Skeleton = () => {
  const [currentIcon, setCurrentIcon] = useState(randomIcon());

  function randomIcon() {
    const index = Math.floor(Math.random() * iconList.length);
    return iconList[index];
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIcon(randomIcon());
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <SSkeleton className="container">
      <img src={currentIcon} alt="랜덤 이미지" className="random-image" />
      <p className="messege">
        데이터를 받아오는 중입니다.
        <br />
        잠시만 기다려 주세요 :)
      </p>
    </SSkeleton>
  );
};

export default Skeleton;

const SSkeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: calc(100vh - 108px);
  .random-image {
    max-width: 100%;
    max-height: 100%;
  }
  .messege {
    text-align: center;
    color: #767676;
    font-size: 14px;
    line-height: 1.5;
  }
`;
