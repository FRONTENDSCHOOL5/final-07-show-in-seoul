import React from 'react';
import styled from 'styled-components';
import ListOff from '../../../Assets/Icon/icon-post-list-off.png';
import ListOn from '../../../Assets/Icon/icon-post-list-on.png';
import AlbumOff from '../../../Assets/Icon/icon-post-album-off.png';
import AlbumOn from '../../../Assets/Icon/icon-post-album-on.png';

const PostLayoutButtons = () => {
  return (
    <>
      <LayoutButtons>
        <ListButton></ListButton>
        <GridButton></GridButton>
      </LayoutButtons>
    </>
  );
};

export default PostLayoutButtons;

const LayoutButtons = styled.div`
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

const ListButton = styled.button`
  border-right: none;
  background: url(${ListOff}) no-repeat center;
  &:hover {
    border-bottom-color: #767676;
    background-image: url(${ListOn});
  }
`;

const GridButton = styled.button`
  border-left: none;
  background: url(${AlbumOff}) no-repeat center;
  &:hover {
    border-bottom-color: #767676;
    background-image: url(${AlbumOn});
  }
`;
