import React from 'react';
import styled from 'styled-components';
import ListOn from '../../../Assets/Icon/icon-post-list-on.svg';
import AlbumOff from '../../../Assets/Icon/icon-post-album-off.svg';

const PostLayoutButtons = () => {
  return (
    <>
      <SLayoutButtons>
        <SListButton></SListButton>
        <SGridButton></SGridButton>
      </SLayoutButtons>
    </>
  );
};

export default PostLayoutButtons;

const SLayoutButtons = styled.div`
  width: 390px;
  height: 44px;
  display: flex;
  button {
    background-color: #ffffff;
    flex-grow: 1;
    flex-basis: auto;
    border-top: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);
    box-sizing: border-box;
  }
`;

const SListButton = styled.button`
  border-right: 1px solid var(--gray);
  background: url(${ListOn}) no-repeat center;
`;

const SGridButton = styled.button`
  border-left: none;
  background: url(${AlbumOff}) no-repeat center;
`;
