import { useCallback, useRef } from "react";

export const useDebounce = (func: any, wait: number) => {
  const timeout: { current: any } = useRef();

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};
