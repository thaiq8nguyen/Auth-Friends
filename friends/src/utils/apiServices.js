import axios from "axios";
class API {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:5000/api/",
      headers: {
        authorization: localStorage.getItem("lambda_user_token") || ""
      }
    });
  }

  register(newUser) {
    return this.client.post("register", newUser);
  }

  login(credential) {
    return this.client.post("login", credential);
  }
  logout() {
    return this.client.get("restricted/logout");
  }
  // getMealCourses() {
  //   return this.client({
  //     method: "get",
  //     url: "restricted/data",
  //     headers: {
  //       authorization: localStorage.getItem("lambda_user_token") || ""
  //     }
  //   });
  // }
}

export default API;
