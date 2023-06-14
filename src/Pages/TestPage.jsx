import React from 'react';
import Comments from '../Components/Article/Comments';
import AreaTag from '../Components/Profile/AreaTag';
import InterestsTag from '../Components/Profile/InterestsTag';

const testPage = () => {
  return (
    <>
      <Comments />
      <Comments />
      <InterestsTag />
      <br></br>
      <AreaTag />
    </>
  );
};

export default testPage;
