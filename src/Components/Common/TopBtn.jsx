import React from 'react';
import styled from 'styled-components';
import topBtnImg from '../../Assets/Img/topbtn.svg';

const TopBtn = ({ scrollPosition, sectionLayoutRef }) => {
  const handleScrollTop = () => {
    sectionLayoutRef.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <StyledTopBtn onClick={handleScrollTop} scrollPosition={scrollPosition}>
      <img src={topBtnImg} alt="Scroll to Top" />
    </StyledTopBtn>
  );
};

const StyledTopBtn = styled.div`
  position: fixed;
  right: calc(50% - 195px);
  bottom: 55px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  opacity: ${props => (props.scrollPosition > 25 ? 1 : 0)};
  transition: opacity 0.3s;
  img {
    width: 75%;
    height: 75%;
  }
`;

export default TopBtn;
