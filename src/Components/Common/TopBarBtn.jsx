import React from 'react';
import styled from 'styled-components';

const TopBarBtn = ({ id, icon, altTxt }) => {
  console.log(altTxt);
  return (
    <SIconBtn>
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
