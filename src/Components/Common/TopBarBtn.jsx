import React from 'react';
import styled from 'styled-components';

const TopBarBtn = ({ cursor, id, type, icon, altTxt, onClick }) => {
  return (
    <SIconBtn cursor={cursor} type={type} onClick={onClick}>
      <img id={id} src={icon} alt={altTxt} />
    </SIconBtn>
  );
};

export default TopBarBtn;

const SIconBtn = styled.button`
  cursor: ${cursor => cursor.cursor};
  img {
    width: 24px;
    height: 24px;
  }
`;
