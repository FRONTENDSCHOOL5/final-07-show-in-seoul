import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Common/Button';
import InputBox from '../Components/Common/InputBox';
import { IsValidEmailAPI } from '../API/User';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const testemail = 'hellohello123@naver.com';
  // const testpassword = 'hellohello';

  const signupHandle = async () => {
    //이메일 체크
    const response = await IsValidEmailAPI(email);
    if (response.message !== '사용 가능한 이메일 입니다.') {
      console.log('이메일 사용 불가능');
    } else {
      console.log('이메일 사용 가능');
    }
    //비밀번호 체크
    navigate('/profilesettingpage', { state: { email: email, password: password } });
  };

  return (
    <SContainer>
      <h1 className="title">회원가입</h1>
      <form className="signup-form">
        <InputBox
          title="이메일"
          id="email"
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="이메일 주소를 입력해 주세요."></InputBox>
        <InputBox
          title="비밀번호"
          id="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 설정해 주세요."></InputBox>
        <div onClick={signupHandle}>
          <Button size="Large">다음</Button>
        </div>
        <Button size="Large" color="gray" navigate="-1">
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
