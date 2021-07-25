import { useState, useEffect } from "react";

const useApi = (apiFunction) => {
  const [data, setData] = useState([]);

  const reload = async () => {
    try {
      // console.log(await apiFunction);
      const stateData = await apiFunction;
      // console.log("in useapi", stateData.data.results);
      setData(stateData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    reload();
  }, []);

  return data;
};

export default useApi;
