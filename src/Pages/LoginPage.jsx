import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Components/Common/Button';
import logoImage from '../Assets/Img/logo.svg';
import kakao from '../Assets/Img/kakao.svg';
import google from '../Assets/Img/google.svg';
import naver from '../Assets/Img/naver.svg';
import Login from '../Components/Login/Login';

const LoginPage = () => {
  return (
    <SContainer>
      <img src={logoImage} alt="로고 이미지" className="logo" />
      <section className="modal">
        <div className="login-form">
          <Login></Login>
        </div>
        <div className="signup-form">
          <Button size="Large" color="gray" className="join-btn" navigate="/signuppage">
            회원가입
          </Button>
          <div className="sns-login">
            <Link to="#">
              <img src={kakao} className="kakao" alt="카카오톡으로 로그인" />
            </Link>
            <Link to="#">
              <img src={google} className="google" alt="구글로 로그인" />
            </Link>
            <Link to="#">
              <img src={naver} className="naver" alt="네이버로 로그인" />
            </Link>
          </div>
        </div>
      </section>
    </SContainer>
  );
};

export default LoginPage;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -48px;
  background-color: var(--main);

  .logo {
    margin-top: 100px;
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    width: 100%;
    margin-top: 100px;
    border-radius: 20px 20px 0 0;
  }

  label {
    margin-top: 40px;
  }

  #email {
    margin-bottom: -20px;
  }

  #password {
    margin-bottom: 15px;
  }

  .input-content {
    margin-bottom: 10px;
    padding-top: 60px;
  }

  button {
    margin-top: 15px;
  }

  .kakao,
  .google,
  .naver {
    margin: 0 15px -80px 15px;
    cursor: pointer;
    width: 75px;
  }

  .failedText,
  .bothEmptyText {
    color: #fc6d6d;
    font-size: 14px;
  }
`;
