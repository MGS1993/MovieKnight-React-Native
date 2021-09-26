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

  const addToList = async (newData) => {
    try {
      let newState = [...data, ...newData];
      setData(newState);
    } catch (error) {
      console.log(error);
    }
  };
  return { data, setData, error, loading, request, addToList };
};

export default useApi;
