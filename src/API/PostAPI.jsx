import { useRecoilValue } from 'recoil';
import { Token } from '../Atom/atom';
import { useState, useEffect } from 'react';
const URL = 'https://api.mandarin.weniv.co.kr';

const PostPostAPI = async post => {
  const getMyToken = useRecoilValue(Token);

  try {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getMyToken,
      },
      body: JSON.stringify({ ...post }),
    };

    const response = await fetch(URL + '/post', req);

    if (!response.ok) throw new Error('게시글 작성 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};
const GetUserPostAPI = accountname => {
  const URL = 'https://api.mandarin.weniv.co.kr';

  const [postData, setPostData] = useState([]);
  const getMyToken = useRecoilValue(Token);

  console.log(accountname);
  const getPostData = async () => {
    try {
      const response = await fetch(URL + '/post/' + accountname + '/userpost', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + getMyToken,
        },
      });
      const data = await response.json();
      setPostData(data.post);
      console.log(data.post);
      if (!response.ok) throw new Error('유저 게시글 정보 불러오기 에러');
      return data.post;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  // console.log(postData);
  return postData;
};

const GetPostDetailAPI = async postId => {
  const getMyToken = useRecoilValue(Token);

  try {
    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getMyToken,
      },
    };

    const response = await fetch(URL + '/post/:' + { postId }, req);

    if (!response.ok) throw new Error('게시글 상세 조회 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const EditPostAPI = async ({ newPost }, { postId }) => {
  const getMyToken = useRecoilValue(Token);

  try {
    const req = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getMyToken,
      },
      body: JSON.stringify({ ...newPost }),
    };

    const response = await fetch(URL + '/post/:' + { postId }, req);

    if (!response.ok) throw new Error('게시글 수정 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const DeletePostAPI = async postId => {
  const getMyToken = useRecoilValue(Token);

  try {
    const req = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getMyToken,
      },
    };

    const response = await fetch(URL + '/post/:' + { postId }, req);

    if (!response.ok) throw new Error('게시글 삭제 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const ReportPostAPI = async postId => {
  const getMyToken = useRecoilValue(Token);

  try {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getMyToken,
      },
    };

    const response = await fetch(URL + '/post/:' + { postId } + '/report', req);

    if (!response.ok) throw new Error('게시글 신고 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export { PostPostAPI, GetPostDetailAPI, GetUserPostAPI, DeletePostAPI, ReportPostAPI, EditPostAPI };
