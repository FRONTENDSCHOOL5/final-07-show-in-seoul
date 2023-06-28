import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useLocation } from 'react-router-dom';
import { Token } from '../Atom/atom';
// 공통 컴포넌트
import TopBar from '../Components/Common/TopBar';
import Post from '../Components/Common/Post/Post';
import Comments from '../Components/Post/Comments';
import CommentsForm from '../Components/Post/CommentsForm';
// assets
import arrowSVG from '../Assets/Icon/icon-arrow-left.svg';

const PostDetailPage = () => {
  // 탑바 뒤로가기
  const navigate = useNavigate();
  const arrow = () => {
    navigate('/postpage');
  };

  const URL = 'https://api.mandarin.weniv.co.kr';
  const getMyToken = useRecoilValue(Token);

  const getPostsData = useLocation().state;
  const postsId = getPostsData.id;

  const GetPostComments = () => {
    const [commentData, setCommentData] = useState([]);
    const getPostComments = async () => {
      try {
        const response = await fetch(URL + '/post/' + postsId + '/comments', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + getMyToken,
            'Content-type': 'application/json',
          },
        });
        const res = await response.json();
        setCommentData(res.comments);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getPostComments();
    }, [getPostsData]);
    return commentData;
  };

  const postsComments = GetPostComments();
  // console.log(postsComments);

  return (
    <>
      <STopBar>
        <button onClick={arrow} className="arrowBtn">
          <img src={arrowSVG} alt="" />
        </button>
      </STopBar>
      <SPostDetailContent>
        <Post postsData={getPostsData} />
        <SCommentsWrapper>
          {postsComments?.length > 0 ? (
            postsComments.map(postsComments => (
              <Comments postsData={getPostsData} postsId={postsId} postsComments={postsComments} />
            ))
          ) : (
            <p style={{ display: 'none' }}>댓글이 존재하지 않습니다.</p>
          )}
        </SCommentsWrapper>
      </SPostDetailContent>
      <SContainer>
        <SCommentDiv>
          <CommentsForm postsComments={postsComments} postsData={getPostsData} postsId={postsId} />
        </SCommentDiv>
      </SContainer>
    </>
  );
};

export default PostDetailPage;

const SPostDetailContent = styled.div`
  height: calc(100vh - 90px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .showPost {
    display: block;
    height: auto;
    .postUl {
      .postImg {
        height: 400px;
        width: 100%;
      }
    }
    .showDataWrapper {
      width: 100%;
      padding-left: 8px;
      .showTitle {
        font-size: 14px;
        white-space: normal;
      }
      .showPlace {
        margin-top: 9px;
        border-bottom: 0;
        padding-bottom: 6px;
      }
      .useTrgt {
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 7px;
      }
    }
  }
  .postText {
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
    padding: 0px 3px;
    overflow-x: scroll;
    text-overflow: visible;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

const SCommentsWrapper = styled.div`
  border-top: 2px solid #dbdbdb;
  padding: 12px 16px 18px;
  width: 390px;
`;

const SCommentDiv = styled.div`
  height: 61px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  width: 390px;
  position: fixed;
  bottom: 0;
  background-color: white;

  img {
    width: 36px;
    height: 36px;
    margin-left: 16px;
    object-fit: cover;
    border-radius: 50%;
  }
  form {
    margin-left: 18px;
    display: flex;
    align-items: center;
    width: 100%;
    textarea {
      width: 260px;
      height: 40px;
      border-radius: 7px;
      padding: 12px 0px 0px 7px;
      box-sizing: border-box;
      border: 1px solid #dbdbdb;
      resize: none;
      &::-webkit-scrollbar {
        display: none;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      width: 26px;
      height: 26px;
      margin-left: 16px;
      font-size: 14px;
      color: black;
    }
    button:disabled {
      color: #dbdbdb;
    }
  }
`;

const STopBar = styled.div`
  width: 390px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: solid 1px var(--gray);
  position: fixed;
  top: 0;
  background-color: #fff;
  button {
    width: 22px;
    height: 22px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
