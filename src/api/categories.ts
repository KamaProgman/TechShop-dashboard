import makeRequest from "./makeRequest";

const url = "/categories";

class CategoriesApi {
  getAll() {
    return makeRequest({ url });
  }
}

export default new CategoriesApi();
