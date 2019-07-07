import { useState, useEffect } from "react";

export const useFetch = (initialUrl, initialData, setError) => {
  const [url] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (json.error) {
          setError(true);
        } else {
          setData(json);
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [url, setError]);
  return [data];
};
