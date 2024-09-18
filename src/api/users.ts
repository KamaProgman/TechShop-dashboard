import { IdType } from "../types";
import makeRequest from "./makeRequest";

const url = "/users";

class UsersApi {
  async getAll() {
    return makeRequest({ url });
  }

  deleteUser(id: IdType) {
    makeRequest({
      url: `${url}/${id}`,
      method: "DELETE",
    });
  }
}

export default UsersApi;
