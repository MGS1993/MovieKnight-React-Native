import { useState, useEffect } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);
      setError(false);
      setData(response);
    } catch (err) {
      console.log(err);
      return setError(true);
    }
  };
  return { data, error, loading, request };
};

export default useApi;
