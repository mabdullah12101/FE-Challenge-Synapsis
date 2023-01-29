import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
});

axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer ${process.env.TOKEN}`, // Bearer
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
