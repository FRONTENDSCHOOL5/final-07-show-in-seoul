import React from 'react';
// 게시글 수정
const EditPostAPI = async () => {
  try {
    const response = await fetch(URL + '/post/' + '64931eadb2cb2056635c819e', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzZkOGRkYjJjYjIwNTY2MzJkMDE0ZiIsImV4cCI6MTY5MDY5NDUzMCwiaWF0IjoxNjg1NTEwNTMwfQ.IMMrE38HEj0wKkpBScEVd046lUSEYrluamzyMYxNu5k',
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
