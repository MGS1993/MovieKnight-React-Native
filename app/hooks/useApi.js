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

  //probablly need to remove this from this hook or make a new one
  //find out why we can't add newData to current data
  //DATA FOR LIST IS THIS API THOUGH. IT PROBABLY HAS TO BE HERE IDFK.
  //future manuel, you are my only hope
  const addToList = async (newData) => {
    try {
      let newState = [...data, ...newData];
      setData(newState);
    } catch (error) {
      console.log(error);
    }
  };
  return { data, error, loading, request, addToList };
};

export default useApi;
