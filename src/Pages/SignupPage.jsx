import React from 'react';
import styled from 'styled-components';
import Button from '../Components/Common/Button';
import InputBox from '../Components/Common/InputBox';
import { IsValidEmailAPI } from '../API/User';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setpwValid] = useState(false);
  const [btnAble, setBtnAble] = useState(false);
  const [pwFailMsg, setPwFailMsg] = useState('');
  const [emailFailMsg, setEmailFailMsg] = useState('');

  const validEmailCheck = async () => {
    const response = await IsValidEmailAPI(email);
    console.log(response);
    if (response.message === '사용 가능한 이메일 입니다.') {
      setEmailValid(true);
      setEmailFailMsg('');
    } else {
      setEmailValid(false);
      setEmailFailMsg(response.message);
    }
  };

  const validPasswordCheck = () => {
    if (password.length >= 6) {
      setpwValid(true);
      setPwFailMsg('');
    } else {
      setpwValid(false);
      setPwFailMsg('비밀번호는 6자 이상으로 작성해주세요.');
    }
  };

  const signupHandle = e => {
    e.preventDefault();
    navigate('/profilesettingpage', { state: { email: email, password: password } });
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setBtnAble(true);
    } else {
      setBtnAble(false);
    }
  }, [emailValid, pwValid]);

  return (
    <SContainer>
      <h1 className="title">회원가입</h1>
      <form onSubmit={signupHandle} className="signup-form">
        <InputBox
          title="이메일"
          id="email"
          type="text"
          onChange={e => setEmail(e.target.value)}
          onBlur={validEmailCheck}
          placeholder="이메일 주소를 입력해 주세요."
          FailedMessage={emailFailMsg}></InputBox>
        <InputBox
          title="비밀번호"
          id="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          onBlur={validPasswordCheck}
          placeholder="비밀번호를 설정해 주세요."
          FailedMessage={pwFailMsg}></InputBox>
        <Button disabled={!btnAble} size="Large">
          다음
        </Button>
      </form>
      <Button size="Large" color="gray" navigate="/loginpage">
        돌아가기
      </Button>
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
    gap: 30px;
    margin-bottom: 20px;
  }
`;
