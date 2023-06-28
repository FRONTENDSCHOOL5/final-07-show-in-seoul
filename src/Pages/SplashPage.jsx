import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoFace from '../Assets/Img/splash-face.svg';
import logoEye from '../Assets/Img/splash-eye.svg';
import logoLetter from '../Assets/Img/splash-letter.svg';

const SplashPage = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const navigateTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate('/loginpage');
      }, 1200); // 애니메이션 시간 대비
    }, 3200);

    return () => {
      clearTimeout(navigateTimeout);
    };
  }, [navigate]);

  return (
    <SplashWrapper className={fadeOut ? 'fade-out' : ''}>
      <div className="splash">
        <div className="logo">
          <img className="logo-face" src={logoFace} alt="스플래시 화면 로고 이미지입니다" />
          <img className="logo-eye" src={logoEye} alt="스플래시 화면 로고 이미지입니다" />
          <img className="logo-letter" src={logoLetter} alt="스플래시 화면 로고 이미지입니다" />
        </div>
      </div>
    </SplashWrapper>
  );
};

export default SplashPage;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const eyeMove = keyframes`
  0%, 70% {
    top: 130px;
  }
  100% {
    top: 70px;
  }
`;

const letterMove = keyframes`
  0%, 80% {
    left: -50px;
    opacity: 0;
  }
  82% {
    left: -50px;
    opacity: 1;
  }
  100% {
    left: 5px;
  }
`;

const SplashWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 100;

  &.fade-out {
    opacity: 0;
    animation: ${fadeOut} 1.2s linear forwards;
  }
  .splash {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .logo {
    position: relative;
    margin-top: -180px;
    margin-bottom: 440px;
  }

  .logo-face,
  .logo-eye,
  .logo-letter {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .logo-face {
    top: 0;
  }

  .logo-eye {
    z-index: 1;
    animation: ${eyeMove} 2s linear forwards;
  }

  .logo-letter {
    z-index: 1;
    top: 173px;
    animation: ${letterMove} 2.5s linear forwards;
  }
`;
