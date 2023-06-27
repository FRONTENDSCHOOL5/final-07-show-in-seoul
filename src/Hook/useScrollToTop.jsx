import React, { useRef, useState, useEffect } from 'react';

const useScrollToTop = () => {
  const sectionLayoutRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollTop = () => {
    if (sectionLayoutRef.current) {
      sectionLayoutRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      setScrollPosition(0);
    }
  };

  const handleScroll = () => {
    if (sectionLayoutRef.current) {
      setScrollPosition(sectionLayoutRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (sectionLayoutRef.current) {
      sectionLayoutRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (sectionLayoutRef.current) {
        sectionLayoutRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return {
    sectionLayoutRef,
    scrollPosition,
    handleScrollTop,
    handleScroll,
  };
};

export default useScrollToTop;
