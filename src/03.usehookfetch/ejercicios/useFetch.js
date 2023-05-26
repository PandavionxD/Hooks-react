import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [status, setstatus] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    
    setstatus({
      ...status,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setstatus({
      data: data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: status.data,
    isLoading: status.isLoading,
    hasError: status.hasError,
  };
};
