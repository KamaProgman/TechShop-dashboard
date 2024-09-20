import { IdType } from "../types";
import makeRequest from "./makeRequest";

const url = "/users"

class UsersApi {
  getAll() {
    return makeRequest(url)
  }

  getUser(userId: IdType) {
    return makeRequest(url + `/${userId}`)
  }

  deleteUser(id: IdType) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "DELETE"
    })
  }

}

export default new UsersApi