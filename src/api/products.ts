import { AxiosResponse } from "axios";
import { IProduct } from "../types/product";
import makeRequest from "./makeRequest";
import { IdType } from "../types";

const url = "/products";

class ProductApi {
  getAll() {
    return makeRequest({ url });
  }

  updateProductById(
    id: string,
    data: Partial<IProduct>
  ): Promise<AxiosResponse<IProduct>> {
    return makeRequest({
      url: `${url}/${id}`,
      method: "PATCH",
      data,
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
