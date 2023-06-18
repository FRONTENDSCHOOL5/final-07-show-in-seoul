import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SInputBox from '../Components/Common/InputBox';
import Button from '../Components/Common/Button';
import logoImage from '../Assets/Img/logo.svg';
import kakao from '../Assets/Img/kakao.svg';
import google from '../Assets/Img/google.svg';
import naver from '../Assets/Img/naver.svg';

const LoginPage = () => {
  return (
    <SContainer>
      <img src={logoImage} alt="로고 이미지" className="logo" />
      <section className="modal">
        <div className="login-form">
          <SInputBox title="이메일" />
          <SInputBox title="비밀번호" />
          <Button size="Large">로그인</Button>
        </div>
        <div className="signup-form">
          <Button size="Large" color="gray" className="join-btn">
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
  background-color: var(--main);

  .logo {
    margin-top: 120px;
  }

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ffffff;
    width: 100%;
    margin-top: 60px;
    border-radius: 20px 20px 0 0;
  }

  .login-form,
  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: -38px;
    gap: 30px;
  }

  .kakao,
  .google,
  .naver {
    margin: 0 15px -50px 15px;
    cursor: pointer;
    width: 75px;
  }
`;
