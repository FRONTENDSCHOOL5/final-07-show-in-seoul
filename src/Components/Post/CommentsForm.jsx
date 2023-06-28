import React, { useState, useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Token, MyAccountName } from '../../Atom/atom';
import { useNavigate } from 'react-router-dom';

const CommentsForm = ({ postsId, postsData }) => {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const getMyToken = useRecoilValue(Token);
  const getMyAccountName = useRecoilValue(MyAccountName);
  const [textareaValue, setTextareaValue] = useState('');
  const textRef = useRef();
  const navigate = useNavigate();
  const [pI, setPI] = useState('');
  const myProfileImg = async () => {
    try {
      const req = {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + getMyToken,
        },
      };
      const response = await fetch(URL + '/profile/' + getMyAccountName, req);
      const data = await response.json();
      // console.log(data.profile.image);
      setPI(data.profile.image);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  myProfileImg();
  // console.log(pI);

  const handleInputChange = e => {
    setTextareaValue(e.target.value);
    // console.log(textareaValue);
  };

  const postComment = async e => {
    try {
      const response = await fetch(URL + '/post/' + postsId + '/comments', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + getMyToken,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          comment: {
            content: textareaValue,
          },
        }),
      });
      const res = await response.json();
      // console.log(res);
      textRef.current.value = '';
      setTextareaValue('');
    } catch (error) {
      console.error(error);
    } finally {
      navigate('/postdetailpage', { state: postsData });
    }
  };
  return (
    <>
      <img src={pI} alt="" />
      <form>
        <textarea onChange={handleInputChange} ref={textRef} required placeholder="댓글 입력하기..."></textarea>

        <button type="button" disabled={!textareaValue} onClick={postComment}>
          게시
        </button>
      </form>
    </>
  );
};

export default CommentsForm;
