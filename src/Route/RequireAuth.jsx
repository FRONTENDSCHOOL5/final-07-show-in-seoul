import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { IsLoginState } from '../Atom/atom';

const RequireAuth = ({ children, to }) => {
  const isAlreadyLogin = useRecoilValue(IsLoginState);

  if (to === '/mainpage' && isAlreadyLogin === 2) {
    return <Navigate to={to} />;
  } else if (to !== '/mainpage' && isAlreadyLogin === 0) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequireAuth;
