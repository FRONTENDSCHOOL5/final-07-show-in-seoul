import React from 'react';
import styled, { css } from 'styled-components';

const PostContent = ({ postsData }) => {
  // console.log(postsData);
  // const postsDataArr = postsData.content.split('^');

  return (
    <>
      <SPostContentA>
        {/* <p>{postsDataArr[4]}</p> */}
        <p>{postsData.content}</p>
        <ul>
          <li>
            <img src={postsData.image} alt=""></img>
          </li>
        </ul>
      </SPostContentA>
      {/* 공연 포스터 설명, 임시로 내용 직접 입력, 데이터 받아와서 수정 예정  */}
      <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
        {/* <p style={{ color: 'salmon', fontSize: '12px', marginTop: '7px' }}>{postsDataArr[1]}</p> */}
        {/* <p style={{ fontSize: '14px', marginTop: '6px' }}>{postsDataArr[2]} </p> */}
        {/* <p style={{ fontSize: '11px', marginTop: '6px' }}>{postsDataArr[3]}</p> */}
        {/* <div style={{ marginTop: '4px' }}> */}
        {/* <span style={{ color: '#767676', fontSize: '11px' }}>공연일자</span> */}
        {/* <span style={{ fontSize: '11px', marginLeft: '8px' }}>{postsDataArr[4]}</span> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default PostContent;

const SPostContentA = styled.a`
  display: block;
  // 게시물 텍스트
  p {
    font-size: 14px;
    font-weight: 400;
    margin-top: 7px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  // 게시물 사진 여러개일 경우를 대비하기 위해 ul로 감싼거
  ul {
    margin-top: 16px;
    // 게시물 사진
    li {
      height: 228px;
      background: url('') no-repeat / cover;
    }
    img {
      height: 228px;
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;
