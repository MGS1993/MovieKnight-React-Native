import { useState, useEffect } from "react";

const useApi = (apiFunction) => {
  const [data, setData] = useState();

  const reload = async () => {
    try {
      setData(await apiFunction());
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
