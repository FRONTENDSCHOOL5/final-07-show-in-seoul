import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
// 공통 컴포넌트
import TopBar from '../Components/Common/TopBar';
// atom
import { Token } from '../Atom/atom';
// utils
import { showCodeName, showState } from '../Utils/showDetailFunction';

const PostingPage = () => {
  const URL = 'https://api.mandarin.weniv.co.kr';
  const [textareaValue, setTextareaValue] = useState('');
  const textRef = useRef();
  const getMyToken = useRecoilValue(Token);
  const showData = useLocation().state;
  const codeName = showCodeName(showData.CODENAME);
  const ShowState = showState((showData.STRTDATE, showData.END_DATE));
  const navigate = useNavigate();

  // 업로드 버튼 클릭 시 실행, api에 게시글 등록
  const postSubmit = async e => {
    try {
      const response = await fetch(URL + '/post', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + getMyToken,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            // textarea에 타이핑 되는 내용들
            content: `${textareaValue}!#%&@$^))+${codeName}!#%&@$^))+${ShowState}!#%&@$^))+${showData.GUNAME}!#%&@$^))+${showData.TITLE}!#%&@$^))+${showData.PLACE}!#%&@$^))+${showData.RGSTDATE}!#%&@$^))+${showData.DATE}!#%&@$^))+${showData.USE_TRGT}!#%&@$^))+${showData.USE_FEE}`,
            // 업로드한 사진
            image: showData.MAIN_IMG,
          },
        }),
      });

      const res = await response.json();
      // console.log(res);

      textRef.current.value = '';
      setTextareaValue('');
      // document.querySelector('#imagePre').src = '';

      return res;
    } catch (error) {
      console.error(error);
    } finally {
      navigate('/postpage');
    }
  };

  // textarea에 타이핑 되는 내용들 가져 오는
  const handleInputChange = e => {
    setTextareaValue(e.target.value);
    // console.log(textareaValue);
  };

  return (
    <>
      <TopBar leftEl="back" />

      <SForm>
        <SPostingContent>
          <button type="button" disabled={!textareaValue} onClick={postSubmit} className="uploadBtn">
            업로드
          </button>
          <div className="showDatas">
            <ImageUploadDiv>
              <ul>
                <li>
                  <img id="imagePre" src={showData.MAIN_IMG} alt=""></img>
                </li>
              </ul>
            </ImageUploadDiv>

            <div style={{ paddingLeft: '5px', paddingRight: '5px', marginTop: '210px' }}>
              <p style={{ color: 'salmon', fontSize: '12px', marginTop: '7px' }}>{showData.CODENAME}</p>
              <p style={{ fontSize: '14px', marginTop: '6px' }}>{showData.TITLE}</p>
              <p style={{ fontSize: '11px', marginTop: '6px' }}>
                {showData.GUNAME} | {showData.PLACE}
              </p>
              <div style={{ marginTop: '4px' }}>
                <span style={{ color: '#767676', fontSize: '11px' }}>신청일자</span>
                <span style={{ fontSize: '11px', marginLeft: '8px' }}>{showData.RGSTDATE}</span>
              </div>
              <div style={{ marginTop: '4px' }}>
                <span style={{ color: '#767676', fontSize: '11px' }}>공연일자</span>
                <span style={{ fontSize: '11px', marginLeft: '8px' }}>{showData.DATE}</span>
              </div>
              <div style={{ marginTop: '4px', borderBottom: '1px solid #dbdbdb', paddingBottom: '7px' }}>
                <span style={{ color: '#767676', fontSize: '11px' }}>이용대상</span>
                <span style={{ fontSize: '11px', marginLeft: '8px' }}>{showData.USE_TRGT}</span>
              </div>
            </div>
          </div>
          <UploadTextArea
            required
            className="uploadTextarea"
            onChange={handleInputChange}
            ref={textRef}
            rows="8"
            cols="33"
            placeholder="게시글 입력하기.."></UploadTextArea>
        </SPostingContent>
      </SForm>
    </>
  );
};

export default PostingPage;

const SForm = styled.form`
  height: calc(100vh - 48px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SPostingContent = styled.div`
  .uploadBtn {
    position: fixed;
    top: 8px;
    margin-left: 268px;
    background-color: var(--main);
    color: white;
    width: 90px;
    height: 32px;
    border-radius: 44px;
    font-size: 14px;
    font-weight: normal;
    z-index: 10;
  }
  .uploadBtn:disabled {
    background-color: #dcb6b6;
  }
  .showDatas {
    padding: 32px 16px 0px;
  }
`;

const ImageUploadDiv = styled.div`
  height: 228px;

  ul {
    li {
      width: 100%;
      position: relative;
      img {
        width: 100%;
        height: 430px;
        object-fit: cover;
        border: none;
        border-radius: 15px;
      }
    }
  }
`;

const UploadTextArea = styled.textarea`
  width: 390px;
  resize: none;
  border: none;
  outline: none;
  padding: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #dbdbdb;
  }
`;
