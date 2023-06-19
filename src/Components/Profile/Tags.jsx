import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { constants } from './constants';

const Tags = props => {
  //   function onAndOff(el) {
  //     if (!isSelected) {
  //       constants.el = true;
  //       setIsSelected(true);
  //       // el.style.color = white;
  //       // el.style.background: '#961f1f';
  //     } else {
  //       constants.el = false;
  //       setIsSelected(false);
  //     }
  //   }

  // const [isSelected, setIsSelected] = useState(false);

  return (
    <STags>
      <div className="tags">{props.text}</div>
    </STags>
  );
};

export default Tags;

const STags = styled.div`
  .tags {
    padding: 5px 0;
    background-color: #f1f0f0;
    color: #878787;
    font-size: 12px;
    border-radius: 30px;
    width: 58px;
    text-align: center;
  }

  /* .tags.active {
    color: white;
    background-color: #961f1f;
  } */
`;
