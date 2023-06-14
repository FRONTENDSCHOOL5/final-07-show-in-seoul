import React from 'react';
import styled, { css } from 'styled-components';

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
  background: url('./src/assets/icon-post-list-off.png') no-repeat center;
  &:hover {
    border-bottom-color: #767676;
    background-image: url('./src/assets/icon-post-list-on.png');
  }
`;

const GridButton = styled.button`
  border-left: none;
  background: url('./src/assets/icon-post-list-off.png') no-repeat center;
  &:hover {
    border-bottom-color: #767676;
    background-image: url('./src/assets/icon-album-list-on.png');
  }
`;
