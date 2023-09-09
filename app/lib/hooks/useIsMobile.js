'use client';

// hooks
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    useMediaQuery('only screen and (max-width: 768px)')
  );

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile]);

  return isMobile;
}
