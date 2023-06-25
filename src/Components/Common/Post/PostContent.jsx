import React from 'react';
import styled from 'styled-components';

const PostContent = ({ postsData }) => {
  // console.log(postsData);
  const postsDataArr = postsData.content.split('!#%&@$^))+');
  // console.log(postsDataArr);

  return (
    <>
      <SPostContentA>
        <div className="showPost">
          <ul className="postUl">
            <li className="postImg">
              <img className="postImg" src={postsData.image} alt=""></img>
            </li>
          </ul>
          {/* 공연 포스터 설명, 임시로 내용 직접 입력, 데이터 받아와서 수정 예정  */}
          <div className="showDataWrapper">
            <p style={{ color: 'salmon', fontSize: '12px', marginTop: '10px' }}>{postsDataArr[1]}</p>
            <p className="showTitle">{postsDataArr[4]} </p>
            <p className="showPlace" style={{ fontSize: '9px' }}>
              {postsDataArr[3]} | {postsDataArr[5]}
            </p>
            <div>
              <span style={{ color: '#767676', fontSize: '9px' }}>신청일자</span>
              <span style={{ fontSize: '9px', marginLeft: '8px' }}>{postsDataArr[6]}</span>
            </div>
            <div>
              <span style={{ color: '#767676', fontSize: '9px' }}>공연일자</span>
              <span style={{ fontSize: '01px', marginLeft: '8px' }}>{postsDataArr[7]}</span>
            </div>
            <div className="useTrgt">
              <span style={{ color: '#767676', fontSize: '9px' }}>이용대상</span>
              <span style={{ fontSize: '9px', marginLeft: '8px' }}>{postsDataArr[8]}</span>
            </div>
          </div>
        </div>
        <p className="postText">{postsDataArr[0]}</p>
      </SPostContentA>
    </>
  );
};

export default PostContent;

const SPostContentA = styled.a`
  display: block;
  .showPost {
    display: flex;
    height: 200px;
    margin-top: 14px;
    height: 160px;
    .showDataWrapper {
      margin-top: 12px;
      width: 200px;
      padding: 0px 10px 0px 15px;
      .showTitle {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        margin-top: 6px;
      }
      .showPlace {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        border-bottom: 1px solid #dbdbdb;
        padding-bottom: 8px;
        margin-top: 6px;
      }
      .showTags {
        display: flex;
        gap: 10px;
        margin-bottom: 4px;
        text-align: center;
        margin-left: -3px;
        div {
          font-size: 12px;
          padding: 3px 8px;
          background-color: var(--main);
          color: white;
          border-radius: 30px;
        }
      }
    }
  }
  // 게시물 텍스트
  .postText {
    font-size: 14px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 17px 10px 0px 3px;
    word-break: break-all;
    line-height: 18px;
    white-space: pre;
    padding-left: 2px;
  }
  // 게시물 사진 여러개일 경우를 대비하기 위해 ul로 감싼거
  ul {
    li {
      height: 180px;
    }
    // 게시물 사진
    img {
      height: 160px;
      width: 160px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;
