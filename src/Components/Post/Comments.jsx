import React from 'react';
import styled from 'styled-components';
import MoreIcon from '../../Assets/Icon/icon-more-vertical.svg';

const Comments = ({ postsComments }) => {
  const commentDate = postsComments.createdAt.split('T');

  return (
    <SComments>
      <div className="comment-wrap">
        <div className="comment-profile">
          <img src={postsComments.author.image} alt="ProfileImg" />
        </div>
        <div>
          <div className="comment-title">
            <div className="commment-name">{postsComments.author.username}</div>
            <div className="comment-time">{commentDate[0]}</div>
          </div>
          <div className="comment-text">{postsComments.content}</div>
        </div>
        <div className="commentSetting">
          <button className="commentSetBtn">
            <img src={MoreIcon} alt="MoreIcon" />
          </button>
        </div>
      </div>
    </SComments>
  );
};

export default Comments;

const SComments = styled.div`
  /* 댓글들이 많아지면 밑에 댓글과 간격 주기 위해 */
  margin-bottom: 16px;
  font-size: 14px;
  .comment-wrap {
    display: flex;
    position: relative;
  }

  .comment-profile {
    margin-right: 12px;
  }

  .comment-profile img {
    width: 36px;
    height: 36px;
  }

  .comment-title {
    display: flex;
    align-items: center;
    margin: 8px 0 16px 0;
    .comment-name {
      font-weight: 500;
    }
  }

  .comment-time {
    margin-left: 12px;
    font-size: 10px;
    color: #8c8c8c;
  }

  .comment-text {
    color: rgba(51, 51, 51, 1);
    font-weight: 400;
  }

  .commentSetting {
    position: absolute;
    right: 0;
    top: 4px;
  }

  .commentSetBtn {
    border: none;
    background-color: white;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
