import { useState, useEffect } from 'react';
import { DESKTOP_SCREEN_SIZE } from '../const';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (evt: any) => {
      setWidth(evt.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenDesktop: width >= DESKTOP_SCREEN_SIZE
  };
};
