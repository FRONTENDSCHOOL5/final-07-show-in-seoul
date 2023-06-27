import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Token } from '../../../Atom/atom';

// assets
import iconHeart from '../../../Assets/Icon/icon-heart.svg';
import iconHeartPink from '../../../Assets/Icon/icon-heart-fill-pink.svg';
import iconComment from '../../../Assets/Icon/icon-message-circle.svg';

const PostContentButtons = ({ postsData }) => {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const getMyToken = useRecoilValue(Token);

  const [likeValid, setLikeValid] = useState(postsData?.hearted);
  const [likeCount, setLikeCount] = useState(postsData?.heartCount);

  // 좋아요 기능
  const heartBtnClick = async e => {
    e.preventDefault();
    try {
      const req = {
        method: `${likeValid ? 'DELETE' : 'POST'}`,
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + getMyToken,
        },
      };
      const response = await fetch(URL + `/post/${postsData.id}/${likeValid ? 'unheart' : 'heart'}`, req);
      const data = await response.json();
      // console.log(data);
      setLikeCount(data.post.heartCount);
      setLikeValid(data.post.hearted);
      // console.log(data.post.heartCount);
      // console.log(data.post.hearted);
    } catch (e) {
      console.error(e);
    }
  };

  const GetPost = () => {
    const [post, setPost] = useState([]);

    const getPost = async () => {
      try {
        const req = {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + getMyToken,
          },
        };
        const response = await fetch(URL + '/post/' + postsData.id, req);
        const data = await response.json();
        // console.log(data.post);
        setPost(data.post);
      } catch (e) {
        console.error(e);
      }
    };
    useEffect(() => {
      getPost();
    }, [post]);
    return post;
  };

  const postDetail = GetPost();

  return (
    <>
      <SPostContentBtns>
        <SContentHeartBtn likeValid={likeValid} type="button" onClick={heartBtnClick}>
          <span>{likeCount}</span>
        </SContentHeartBtn>
        <Link to="/postdetailpage" state={postsData}>
          <SContentCommentBtn>
            <span>{postDetail?.commentCount}</span>
          </SContentCommentBtn>
        </Link>
      </SPostContentBtns>
    </>
  );
};

export default PostContentButtons;

// 게시물 밑에 좋아요/댓글 버튼 감싼거
const SPostContentBtns = styled.div`
  margin-top: 14px;
  // 게시물 밑, 좋아요 버튼과 댓글 버튼의 공통 css
  button {
    width: 20px;
    height: 20px;
    span {
      margin-left: 27px;
      display: inline-block;
      font-size: 12px;
      color: #767676;
    }
  }
`;

// 게시물 밑, 하트 버튼에게만 줘야하는 css
const SContentHeartBtn = styled.button`
  background-image: ${props => (props.likeValid ? `url(${iconHeartPink})` : `url(${iconHeart})`)};
  &:hover {
    background-image: url(${iconHeartPink});
  }
`;

// 게시물 밑, 댓글 버튼에게만 줘야하는 css
const SContentCommentBtn = styled.button`
  margin-left: 40px;
  background: url(${iconComment}) no-repeat center;
`;
