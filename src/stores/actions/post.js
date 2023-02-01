import axios from "../../utils/axios";

export const getPost = (page) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`posts?per_page=6&page=${page}`)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
