import { IProduct } from "../types/product";
import makeRequest from "./makeRequest";

const url = "/products";

class ProductApi {
  getAll() {
    return makeRequest({ url });
  }

  addNewProduct(data: IProduct) {
    return makeRequest({
      url,
      method: "POST",
      data,
    });
  }
}

export default new ProductApi();
