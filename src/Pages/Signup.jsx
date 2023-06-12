import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  height: 850px;
  margin: 40px auto;
  border: 1px solid #c4c4c4;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #dbdbdb;
  padding: 5px 0 5px 0;
  outline: none;
  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }
`;
const EmailInput = styled(Input)`
  margin-bottom: 16px;
`;
const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 322px;
  height: 44px;
  background: rgba(150, 31, 31, 1);
  border: none;
  border-radius: 44px;
  font-size: 14px;
  color: white;
  cursor: pointer;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-size: 12px;
  color: #767676;
`;

function Signup() {
  return (
    <Container>
      <h1 className="title">회원가입</h1>
      <LoginForm className="login">
        <Label htmlFor="email" className="email-title">
          이메일
        </Label>
        <EmailInput type="email" id="email" required placeholder="이메일 주소를 입력해 주세요." />
        <Label htmlFor="pw" className="pw-title">
          비밀번호
        </Label>
        <Input type="password" id="pw" required placeholder="비밀번호를 설정해 주세요." />
        <Button className="btn">다음</Button>
      </LoginForm>
    </Container>
  );
}
export default Signup;
