import axios from "../../utils/axios";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`users`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
