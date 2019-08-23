import axios from "axios";

class FriendService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:5000/api/",
      headers: {
        authorization: localStorage.getItem("lambda_user_token") || ""
      }
    });
  }

  addFriend(friend) {
    return this.client.post("/friends", friend);
  }
  getFriends() {
    return this.client.get("/friends");
  }
  updateFriend(friend) {
    return this.client.put(`/friends/${friend.id}`, friend);
  }
  deleteFriend(friendID) {
    return this.client.delete(`/friends/${friendID}`);
  }
}

export default FriendService;
