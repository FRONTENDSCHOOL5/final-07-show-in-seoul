import React, { useEffect } from 'react';
import { Token } from '../Atom/atom';
import { useRecoilValue } from 'recoil';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Tokencheck() {
  const tokenCheck = useRecoilValue(Token);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    if (tokenCheck) {
      navigate('/errorpage', { state: location });
    }
  }, [tokenCheck, navigate, location]);
  return <></>;
}
