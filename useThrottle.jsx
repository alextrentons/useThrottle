import { useRef, useCallback } from 'react';

const useThrottle = (callback, delay) => {
  const isThrottled = useRef(null);

  const throttledCallback = useCallback(
    (...args) => {
      if (isThrottled.current) {
        return;
      }

      callback(args);
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
      }, delay);
    },
    [callback, delay]
  );

  return throttledCallback;
};

export default useThrottle;
