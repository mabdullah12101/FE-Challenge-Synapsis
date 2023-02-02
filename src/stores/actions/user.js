import axios from "../../utils/axios";

export const getUser = (page, name) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`users?page=${page}&name=${name}`)
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

export const addUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`users`, data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
