import { IdType } from "../types";
import makeRequest from "./makeRequest";

const url = "/users";

class UsersApi {
  async getAll() {
    return makeRequest({ url });
  }

  deleteUser(id: IdType) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "DELETE",
    });
  }

  editUser(id: IdType, data: Partial<any>) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "PATCH",
      data,
    });
  }

}

export default UsersApi;
