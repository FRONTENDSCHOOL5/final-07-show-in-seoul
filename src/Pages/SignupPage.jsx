import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Common/Button';
import InputBox from '../Components/Common/InputBox';

const SignupPage = () => {
  return (
    <SContainer>
      <h1 className="title">회원가입</h1>
      <form className="signup-form">
        <InputBox title="이메일" placeholder="이메일 주소를 입력해 주세요."></InputBox>
        <InputBox title="비밀번호" placeholder="비밀번호를 설정해 주세요."></InputBox>
        <Button size="Large">다음</Button>
        <Button size="Large" color="gray">
          돌아가기
        </Button>
      </form>
    </SContainer>
  );
};

export default SignupPage;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin: 30px 0 40px 0;
    font-size: 24px;
  }

  .signup-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
  }

  button {
    margin-bottom: -13px;
  }
`;
