import { create } from "apisauce";

const apiClient = create({
  baseURL: ` https://api.themoviedb.org/3/trending/all/week?api_key=b88a57406d9a87698d307358f3e4f4ab`,
});

export default apiClient;
