import { useState, useEffect } from "react";
import apiCalls from "../Util/apiCalls";

const useApi = (apiFunction) => {
  const [data, setData] = useState();

  const reload = async () => {
    try {
      // setData(null);
      setData(await apiCalls.trendingMedia());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    reload();
  }, []);

  return [data, reload];
};

export default useApi;
