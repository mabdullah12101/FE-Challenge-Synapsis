import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
});

axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = {
      Authorization: `Bearer 0da395a814632d9dac19cf901f4a45346383290f0795cc1ab12b9c2db88df53b`, // Bearer
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
