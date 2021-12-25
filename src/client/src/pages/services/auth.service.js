import axios from "axios";

const API_URL = "http://localhost:8000/api/authRoutes/";

class AuthService {
  // login(username, password) {
  //   return axios
  //     .post(API_URL + "signin", {
  //       username,
  //       password
  //     })
  //     .then(response => {
  //       if (response.data.accessToken) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }

  // logout() {
  //   localStorage.removeItem("user");
  // }
  register(
    username,
    password,
    firstname,
    lastname,
    homeaddress,
    countrycode,
    phonenumber,
    email,
    passportnumber) {
    return axios.post(API_URL + "Register", {
      username,
      password,
      firstname,
      lastname,
      homeaddress,
      countrycode,
      phonenumber,
      email,
      passportnumber
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
