import { IProduct } from "../types/product";
import makeRequest from "./makeRequest";
import { IdType } from "../types";

const url = "/products";

class ProductApi {
  getAll() {
    return makeRequest({ url });
  }

  getById(id: IdType) {
    return makeRequest({ url: `${url}/${id}` })
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

  updateProductById(id: IdType, data: Partial<IProduct>) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "PATCH",
      data: {
        fields: data,
      }
    })
  }

  deleteProductById(id: IdType) {
    return makeRequest({
      url: `${url}/${id}`,
      method: "DELETE",
    });
  }
}

export default new ProductApi();
