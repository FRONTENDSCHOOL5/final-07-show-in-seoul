import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { IsLoginState } from '../Atom/atom';

const RequireAuth = ({ children, to }) => {
  const isAlreadyLogin = useRecoilValue(IsLoginState);

  // 0: 로그아웃상태, 1: 로그인은 했지만 데이터 안받은 상태, 2: 데이터까지 받은 상태
  if (to !== '/' && isAlreadyLogin === 2) {
    return <Navigate to={to} />;
  } else if (to === '/' && isAlreadyLogin === 0) {
    return <Navigate to={to} />;
  }
  return children;
};

export default RequireAuth;
