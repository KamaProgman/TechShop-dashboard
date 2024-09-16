import { IdType } from "../types";
import makeRequest from "./makeRequest";

const url = "/users"

class UsersApi {
  getAll() {
    makeRequest(url)
  }

  deleteUser(id: IdType) {
    makeRequest({
      url: `${url}/${id}`,
      method: "DELETE"
    })
  }
}

export default UsersApi