import React from 'react';
import { Token } from '../Atom/atom';
import { useRecoilValue } from 'recoil';

// 게시글 수정
const EditPostAPI = async () => {
  const getMyToken = useRecoilValue(Token);
  try {
    const response = await fetch(URL + '/post/' + '64931eadb2cb2056635c819e', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + { getMyToken },
      },
      body: JSON.stringify({
        post: {
          // content: '게시글 수정 테스트 2차 시도 중',
          // content: textareaValue,
          // image: imgURL,
        },
      }),
    });
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
// EditPostAPI();

export default EditPostAPI;
