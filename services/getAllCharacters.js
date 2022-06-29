import axios from "axios";

class User{

getAllUser(link){
  return axios.get(link).then((response) => {
    const { data } = response;
    return data;
  });
}

getUserById(urlID){
  return axios.get(urlID).then((response) => {
    const { data } = response;
    return data;
  });
}

}

export default new User