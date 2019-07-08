import { useState, useEffect } from "react";

export const useFetch = (initialUrl, initialData, setLoading, setError) => {
  const [url] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setLoading(false);
        if (json.error) {
          setError(true);
        } else {
          setData(json);
        }
      } catch (error) {
        setLoading(false);        
        setError(true);
      }
    };
    fetchData();
  }, [url, setLoading, setError]);
  return [data];
};
