import { IProduct } from "../types/product";
import makeRequest from "./makeRequest";
import { IdType } from "../types";

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

  deleteProductById(id: IdType) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "DELETE",
    });
  }
}

export default new ProductApi();
