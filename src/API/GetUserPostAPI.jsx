import React, { useState, useEffect } from 'react';
import { Token } from '../Atom/atom';
import { useRecoilValue } from 'recoil';

const GetUserPostAPI = props => {
  const [postData, setPostData] = useState([]);
  const getMyToken = useRecoilValue(Token);

  // 내 계정 이름
  const accountname = '';

  const getPostData = async () => {
    try {
      const response = await fetch('https://api.mandarin.weniv.co.kr' + '/post/' + { accountname } + '/userpost', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + { getMyToken },
        },
      });

      const data = await response.json();
      // console.log(data.post);
      setPostData(data.post);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return postData;
};

export default GetUserPostAPI;
