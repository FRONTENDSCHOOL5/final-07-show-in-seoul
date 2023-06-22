import React, { useEffect } from 'react';
import { Token } from '../Atom/atom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

export default function Tokencheck() {
  const tokenCheck = useRecoilValue(Token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenCheck) {
      navigate('/tokenerrorpage');
    }
  }, [tokenCheck, navigate]);
  return <></>;
}
