import React from 'react';
import styled from 'styled-components';

const TopBarBtn = ({ id, type, icon, altTxt, onClick }) => {
  console.log(altTxt);
  return (
    <SIconBtn type={type} onClick={onClick}>
      <img id={id} src={icon} alt={altTxt} />
    </SIconBtn>
  );
};

export default TopBarBtn;

const SIconBtn = styled.button`
  img {
    width: 24px;
    height: 24px;
  }
`;
