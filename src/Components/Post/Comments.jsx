import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../Assets/Icon/logo-gray-small.svg';
import MoreIcon from '../../Assets/Icon/icon-more-vertical.svg';

const Comments = () => {
  return (
    <SComments>
      <div className="comment-wrap">
        <div className="comment-profile">
          <img src={ProfileImg} alt="ProfileImg" />
        </div>
        <div>
          <div className="comment-title">
            <div className="commment-name">서귀포시 무슨</div>
            <div className="comment-time">5분 전</div>
          </div>
          <div className="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quae deserunt ex molestiae natus eos
            optio fugiat quos vero reprehenderit ut tempora dignissimos, numquam eaque mollitia, nam totam alias
            aspernatur.
          </div>
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
