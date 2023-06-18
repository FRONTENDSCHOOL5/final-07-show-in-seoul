import React from 'react';
import styled from 'styled-components';

const TopBarBtn = ({ id, icon, altTxt }) => {
  console.log(altTxt);
  return (
    <button>
      <img id={id} src={icon} alt={altTxt} />
    </button>
  );
};

export default TopBarBtn;

const SIconBtn = styled.button`
  img {
    width: 24px;
    height: 24px;
  }
`;
