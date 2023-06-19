import React from 'react';
import styled from 'styled-components';
import ListOff from '../../../Assets/Icon/icon-post-list-off.svg';
import ListOn from '../../../Assets/Icon/icon-post-list-on.svg';
import AlbumOff from '../../../Assets/Icon/icon-post-album-off.svg';
import AlbumOn from '../../../Assets/Icon/icon-post-album-on.svg';

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
    border: 1px solid #dbdbdb;
    border-bottom: 2px solid #dbdbdb;
    box-sizing: border-box;
  }
`;

const SListButton = styled.button`
  border-right: none;
  background: url(${ListOff}) no-repeat center;
  &:hover {
    border-bottom-color: #767676;
    background-image: url(${ListOn});
  }
`;

const SGridButton = styled.button`
  border-left: none;
  background: url(${AlbumOff}) no-repeat center;
  &:hover {
    border-bottom-color: #767676;
    background-image: url(${AlbumOn});
  }
`;
