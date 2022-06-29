import axios from "axios";

class User{

getAllUser(link){
  return axios.get(link).then((response) => {
    const { data } = response;
    return data;
  });
}

getUserById(id){
  return axios.get().then((response) => {
    const { data } = response;
    return data;
  });
}

}

export default new User