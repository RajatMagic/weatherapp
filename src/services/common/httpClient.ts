import axios from "axios";

const httpClient = () => {
  return axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Accept": "application/json",
      "Authorization": ``
    }
  });
}

const authInterceptor = (config: any) => {
  return config;
};

httpClient().interceptors.request.use(authInterceptor);
httpClient().interceptors.response.use(
  response => {
    /** TODO: Add any response interceptors */
    return response;
  },
  error => {
    /** TODO: Do something with response error */
    return Promise.reject(error.response);
  }
);






export { httpClient };
