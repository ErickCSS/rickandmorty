import axios from "axios";

export const getAllCharacters = (link) => {
  return axios.get(link).then((response) => {
    const { data } = response;
    return data;
  });
};
