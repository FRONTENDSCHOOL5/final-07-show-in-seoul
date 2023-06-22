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
      const response = await fetch('https://api.mandarin.weniv.co.kr' + '/post/' + 'charlie' + '/userpost', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzZkOGRkYjJjYjIwNTY2MzJkMDE0ZiIsImV4cCI6MTY5MDY5NDUzMCwiaWF0IjoxNjg1NTEwNTMwfQ.IMMrE38HEj0wKkpBScEVd046lUSEYrluamzyMYxNu5k',
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
