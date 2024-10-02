import { IdType } from "../types";
import makeRequest from "./makeRequest";

const url = "/users";

class UsersApi {
<<<<<<< HEAD
  async getAll() {
    return makeRequest({ url });
=======
  getAll() {
    return makeRequest(url);
  }

  getUser(userId: IdType) {
    return makeRequest(url + `/${userId}`);
>>>>>>> d4f1fbc52dda11b71d99ecb23366483d167f1f0f
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

<<<<<<< HEAD
export default UsersApi;
=======
export default new UsersApi();
>>>>>>> d4f1fbc52dda11b71d99ecb23366483d167f1f0f
