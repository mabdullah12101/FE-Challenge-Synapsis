import axios from "../../utils/axios";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`users`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export const updateUser = (id, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`users/${id}`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
