import React, { useState } from 'react';
import SInputBox from '../Common/InputBox';
import Button from '../Common/Button';
import { IsValidEmailAPI, LoginAPI } from '../../API/User';
import { useNavigate } from 'react-router-dom';
import { Token } from '../../Atom/atom';
import { useSetRecoilState } from 'recoil';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FailedMessage, setFailedMessage] = useState('');
  const navigate = useNavigate();
  const setUserToken = useSetRecoilState(Token);

  // 비밀번호가 6자 이상인지 검사
  const validatePassword = password => {
    if (password.length < 6) {
      return false;
    }
    return true;
  };

  const LoginFunc = async e => {
    e.preventDefault();
    setFailedMessage(''); // 텍스트 초기화

    // 이메일 형식 확인
    const validResult = await IsValidEmailAPI(email);
    console.log(validResult);

    // 비밀번호 형식 확인
    if (!password || !validatePassword(password)) {
      setFailedMessage('*비밀번호는 6자 이상이어야 합니다.');
      return;
    }

    // 이메일과 비밀번호 조건 충족 시 로그인 시도
    try {
      const data = await LoginAPI({
        user: {
          email,
          password,
        },
      });

      if (data.status === 422) {
        setFailedMessage('*이메일 / 비밀번호를 확인해주세요.');
      } else if (data.user) {
        console.log('로그인 성공!');
        setUserToken(data.user.token);
        navigate('/mainpage'); // 로그인 성공 시 navigateTo 상태를 설정해줌
      } else {
        console.log('로그인 예외');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={LoginFunc}>
        <SInputBox title="이메일" id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <SInputBox
          title="비밀번호"
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {FailedMessage && <p className="failedText">{FailedMessage}</p>}
        <Button size="Large">로그인</Button>
      </form>
    </>
  );
}

export default Login;
