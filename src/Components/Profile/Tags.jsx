import React from 'react';
import { styled } from 'styled-components';

const Tags = props => {
  function onAndOff(el) {
    console.log(el);
  }

  return (
    <STags>
      <div onClick={onAndOff} className="tags">
        {props.text}
      </div>
    </STags>
  );
};

export default Tags;

const STags = styled.div`
  .tags {
    padding: 6px 10px;
    background-color: #f1f0f0;
    color: #878787;
    margin: 2px;
    font-size: 12px;
    border-radius: 5px;
  }

  /* .tags.active {
    color: white;
    background-color: #961f1f;
  } */
`;
