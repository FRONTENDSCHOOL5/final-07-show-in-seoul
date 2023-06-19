import React from 'react';
import styled from 'styled-components';
import HyphenIcon from '../../Assets/Icon/icon-hyphen.png';

const CategoryPeriod = () => {
  return (
    <SCategoryPeriod>
      <form className="dateForm">
        <label htmlFor="dateFrom"></label>
        <input id="dateFrom" type="date" />
      </form>
      <div className="hyphen">
        <img src={HyphenIcon} alt="-" />
      </div>
      <form className="dateForm">
        <label htmlFor="dateTo"></label>
        <input id="dateTo" type="date" />
      </form>
    </SCategoryPeriod>
  );
};

export default CategoryPeriod;

const SCategoryPeriod = styled.div`
  display: flex;
  justify-content: space-between;

  .hyphen {
    display: flex;
    padding: 0 10px;
  }

  .dateForm {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--gray);
    border-radius: 15px;
  }
`;
