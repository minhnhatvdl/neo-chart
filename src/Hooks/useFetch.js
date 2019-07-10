import { useState, useEffect } from "react";

export const useFetch = (initialUrl, initialData) => {
  const [url] = useState(initialUrl);
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
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
  }, [url]);
  return [data, error, loading];
};
