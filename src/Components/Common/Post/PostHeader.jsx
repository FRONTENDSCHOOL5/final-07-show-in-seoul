import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

// 이미지
import iconSmallMore from '../../../Assets/Icon/s-icon-more-vertical.svg';
import basicProfileImg from '../../../Assets/Img/basic-profile-img.svg';

// recoil
import { MyAccountName } from '../../../Atom/atom';

//
import Modal from '../../Modal/Modal';
import AlertModal from '../../Modal/Alert';

const PostHeader = ({ postsData }) => {
  // console.log(postsData);
  const getMyAccounName = useRecoilValue(MyAccountName);
  // console.log(getMyAccounName);
  const accountname = postsData.author?.accountname;
  const username = postsData.author?.username;
  const navigate = useNavigate();
  const goToPostEdit = () => {
    navigate('/posteditpage', { state: postsData });
  };

  // 모달 연결
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSModalVisible, setIsSModalVisible] = useState(false);
  const [isOtherSModalVisible, setIsOtherSModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isReporModalVisible, setIsReporModalVisible] = useState(false);

  // alert 모달 닫아주는
  const closeModal = () => {
    setIsModalVisible(false);
    setIsDeleteModalVisible(false);
    setIsReporModalVisible(false);
  };
  // 게시글이 내 거일때 열어주는 모달
  const openSModal = () => {
    setIsSModalVisible(true);
  };
  // 게시글이 다른 유저일 때 열어주는 모달
  const openSOtherModal = () => {
    setIsOtherSModalVisible(true);
  };
  // 수정
  const handleEdit = () => {
    setIsSModalVisible(false);
    setIsModalVisible(true);
  };
  // 삭제
  const handeleDelete = () => {
    setIsSModalVisible(false);
    setIsDeleteModalVisible(true);
  };
  // 신고
  const handleReport = () => {
    setIsOtherSModalVisible(false);
    setIsReporModalVisible(true);
  };

  return (
    <>
      <SPostHeaderDiv>
        <Link className="wrapper" to="/profiledetailpage" state={postsData.author?.accountname}>
          {/* 프로필 이미지 api로 받아와서 수정해야함 */}
          <img src={postsData.author.image} alt="" />
          <div>
            <SPostUserName>{username}</SPostUserName>
            <SPostUserId>{accountname}</SPostUserId>
          </div>
        </Link>
        {accountname === getMyAccounName ? (
          <button className="postSet" onClick={openSModal}></button>
        ) : (
          <button className="postSet" onClick={openSOtherModal}></button>
        )}
        {isSModalVisible && (
          <Modal>
            <p onClick={handeleDelete}>삭제</p>
            <p onClick={handleEdit}>수정</p>
          </Modal>
        )}
        {isOtherSModalVisible && (
          <Modal>
            <p onClick={handleReport}>신고</p>
          </Modal>
        )}
        {isModalVisible && (
          <AlertModal confirmText="수정" onConfirm={goToPostEdit} onCancel={closeModal}>
            게시글을 수정할까요?
          </AlertModal>
        )}
        {isDeleteModalVisible && (
          <AlertModal confirmText="삭제" onConfirm={closeModal} onCancel={closeModal}>
            게시글을 삭제할까요?
          </AlertModal>
        )}
        {isReporModalVisible && (
          <AlertModal confirmText="신고" onConfirm={closeModal} onCancel={closeModal}>
            게시글을 신고할까요?
          </AlertModal>
        )}
      </SPostHeaderDiv>
    </>
  );
};

export default PostHeader;

const SPostHeaderDiv = styled.div`
  display: flex;
  // 게시물 헤더 속, 게시물 작성자의 프로필사진/이름/아이디 감싸준거
  // (클릭 했을 경우 작성자 프로필로 이동 시켜주기 위함)
  .wrapper {
    display: flex;
    cursor: pointer;
    // 게시물 작성자 프로필 사진
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    // 게시물 작성자 이름과 아이디 감싼거
    div {
      margin-left: 12px;
      width: 250px;
    }
  }
  // 게시물 수정/삭제 모달 띄워주는 버튼
  .postSet {
    border: none;
    width: 18px;
    height: 18px;
    background: url(${iconSmallMore}) no-repeat center;
    margin-left: 35px;
  }
`;

// 게시물 작성자 이름
const SPostUserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
`;

// 게시물 작성자 아이디
const SPostUserId = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: rgba(118, 118, 118, 1);
  margin-top: 4px;
`;
