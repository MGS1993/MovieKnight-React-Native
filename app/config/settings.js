import Constants from "expo-constants";

//http://10.196.87.59:9000/api
const settings = {
  dev: {
    apiUrl: "http://10.196.87.59:9000/api",
  },
  staging: {
    apiUrl: "https://movieknightbackend.herokuapp.com/api",
  },
  prod: {
    apiUrl: "https://movieknightbackend.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
