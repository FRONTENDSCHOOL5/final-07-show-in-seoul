import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { Token, MyAccountName } from '../../Atom/atom';
import MoreIcon from '../../Assets/Icon/icon-more-vertical.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import AlertModal from '../Modal/Alert';

const Comments = ({ postsComments, postsId, postsData }) => {
  const commentDate = postsComments.createdAt.split('T');
  const commentId = postsComments.id;
  const URL = 'https://api.mandarin.weniv.co.kr';
  const getMyToken = useRecoilValue(Token);
  const navigate = useNavigate();
  const getMyAccountName = useRecoilValue(MyAccountName);
  const commentAccountName = postsComments.author.accountname;

  // 댓글 삭제 기능
  const DeleteComment = async () => {
    try {
      const response = await fetch(URL + '/post/' + postsId + '/comments/' + commentId, {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + getMyToken,
          'Content-type': 'application/json',
        },
      });
      const res = await response.json();
      // console.log(res);
      setIsDeleteModalVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  const [isOtherSModalVisible, setIsOtherSModalVisible] = useState(false);
  const [isSModalVisible, setIsSModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  // 댓글이 내 거일때 열어주는 모달
  const openSModal = () => {
    setIsSModalVisible(true);
  };
  // 댓글이 다른 유저일 때 열어주는 모달
  const openSOtherModal = () => {
    setIsOtherSModalVisible(true);
  };
  // a 모달 닫아주는
  const closeModal = () => {
    setIsSModalVisible(false);
    setIsOtherSModalVisible(false);
    setIsDeleteModalVisible(false);
  };
  // 삭제
  const handeleDelete = () => {
    setIsSModalVisible(false);
    setIsDeleteModalVisible(true);
  };

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
          {getMyAccountName === commentAccountName ? (
            // 삭제 모달
            <button onClick={openSModal} className="commentSetBtn">
              <img src={MoreIcon} alt="MoreIcon" />
            </button>
          ) : (
            // 신고 모달
            <button onClick={openSOtherModal} className="commentSetBtn">
              <img src={MoreIcon} alt="MoreIcon" />
            </button>
          )}
        </div>
      </div>
      {isSModalVisible && (
        <Modal onCancel={closeModal}>
          <p onClick={handeleDelete}>삭제</p>
        </Modal>
      )}
      {isOtherSModalVisible && (
        <Modal onCancel={closeModal}>
          <p onClick={closeModal}>신고</p>
        </Modal>
      )}
      {isDeleteModalVisible && (
        <AlertModal confirmText="삭제" onConfirm={DeleteComment} onCancel={closeModal}>
          댓글을 삭제할까요?
        </AlertModal>
      )}
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
    border-radius: 50%;
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
