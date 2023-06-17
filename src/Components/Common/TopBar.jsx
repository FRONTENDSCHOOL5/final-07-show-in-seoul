import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import iconLogo from '../../Assets/Icon/logo-text.png';
import iconArrow from '../../Assets/Icon/icon-arrow-left.png';
import iconLogout from '../../Assets/Icon/icon-logout.png';
import iconMore from '../../Assets/Icon/icon-more-vertical.png';
<<<<<<< HEAD

// 왼쪽 요소 : 미입력시 기본 값 쇼인서울 로고
const LeftEl = ({ leftEl }) => {
  if (leftEl === 'back') {
    return <img src={iconArrow} alt="뒤로가기" />;
  } else if (leftEl === 'search') {
    return <input placeholder="행사 검색" />;
  } else {
    return <img id="showLogo" src={iconLogo} alt="쇼!인서울 피드" />;
  }
};

// 오른쪽 요소 : 미입력시 기본값 null
const RightEl = ({ rightEl }) => {
  if (rightEl === 'newPost') {
    return (
      <Button color="white" active="active">
        글쓰기
      </Button>
    );
  } else if (rightEl === 'save') {
    return <Button disabled>저장</Button>;
  } else if (rightEl === 'upload') {
    return <Button size="Small">업로드</Button>;
  } else if (rightEl === 'logout') {
    return <img src={iconLogout} alt="로그아웃" />;
  } else if (rightEl === 'more') {
    return <img src={iconMore} alt="더보기" />;
  } else {
    return null;
  }
=======
import iconArrowWhite from '../../Assets/Icon/icon-arrow-white.png';
import iconShare from '../../Assets/Icon/icon-share.png';

const IconBtn = ({ id, icon, altTxt }) => {
  console.log(altTxt);
  return (
    <button>
      <img id={id} src={icon} alt={altTxt} />
    </button>
  );
>>>>>>> 3d1f4174e084d7954207c84f6f44c099750ccace
};

// 왼쪽 요소 : 미입력시 기본 값 쇼인서울 로고
const LeftEl = ({ leftEl }) => {
  if (leftEl === 'back') {
    return <IconBtn icon={iconArrow} altTxt={'뒤로가기'} />;
  } else if (leftEl === 'backWhite') {
    return <IconBtn id="iconArrowWhite" icon={iconArrowWhite} altTxt={'뒤로가기'} />;
  } else if (leftEl === 'search') {
    return <input placeholder="행사 검색" />;
  } else {
    return <IconBtn id="showLogo" icon={iconLogo} altTxt={'쇼!인서울 피드'} />;
  }
};

// 오른쪽 요소 : 미입력시 기본값 null
const RightEl = ({ rightEl }) => {
  if (rightEl === 'newPost') {
    return (
      <Button color="white" active="active">
        글쓰기
      </Button>
    );
  } else if (rightEl === 'save') {
    return <Button disabled>저장</Button>;
  } else if (rightEl === 'upload') {
    return <Button size="Small">업로드</Button>;
  } else if (rightEl === 'logout') {
    return <IconBtn icon={iconLogout} altTxt={'로그아웃'} />;
  } else if (rightEl === 'more') {
    return <IconBtn icon={iconMore} altTxt={'더보기'} />;
  } else if (rightEl === 'share') {
    return <IconBtn icon={iconShare} altTxt={'공유하기'} />;
  } else {
    return null;
  }
};

// 최종 표시될 상단바
const TopBar = ({ leftEl, rightEl }) => {
  return (
    <>
<<<<<<< HEAD
      <Header>
        {/* back(뒤로가기) search(검색) */}
        <LeftEl leftEl={leftEl} />
        {/* newPost(글쓰기) save(저장) upload(업로드) logout(로그아웃) more(더보기) */}
        <RightEl rightEl={rightEl} />
      </Header>
=======
      <SHeader>
        <LeftEl leftEl={leftEl} />
        <RightEl rightEl={rightEl} />
      </SHeader>
>>>>>>> 3d1f4174e084d7954207c84f6f44c099750ccace
    </>
  );
};

export default TopBar;

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  height: 48px;
  padding: 0 16px;
  border-bottom: solid 2px #dbdbdb;
  box-sizing: border-box;
<<<<<<< HEAD
=======
  button {
    padding: 0;
  }
>>>>>>> 3d1f4174e084d7954207c84f6f44c099750ccace
  img {
    width: 24px;
    height: 24px;
  }
  #showLogo {
<<<<<<< HEAD
    width: 100px;
  }
  input {
    all: unset;
=======
    width: 103px;
  }
  #iconArrowWhite {
    width: 35px;
    height: 35px;
  }
  input {
>>>>>>> 3d1f4174e084d7954207c84f6f44c099750ccace
    width: 100%;
    height: 32px;
    background-color: #f2f2f2;
    border-radius: 30px;
    &::placeholder {
      color: #c4c4c4;
      padding: 10px 0 0 15px;
    }
  }
`;
