import { useCallback, useState } from 'react';

const useLoading = (initialValue: boolean = true) => {
  const [isLoading, setLoading] = useState(initialValue);

  const close = useCallback(() => setLoading(false), []);
  const start = useCallback(() => setLoading(true), []);

  return {
    isLoading,
    close,
    start,
  };
};

export default useLoading;
