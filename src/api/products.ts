import { IProduct } from "../types/product";
import makeRequest from "./makeRequest";

const url = "/products";

class ProductApi {
  getAll() {
    return makeRequest({ url });
  }

  addNewProduct(data: Partial<IProduct>) {
    return makeRequest({
      url,
      method: "POST",
      data: {
        fields: data,
      },
    });
  }
}

export default new ProductApi();
