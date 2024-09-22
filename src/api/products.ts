import { AxiosResponse } from "axios";
import { IProduct } from "../types/product";
import makeRequest from "./makeRequest";

const url = "/products";

class ProductApi {
  // Получение всех продуктов
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

  deleteProductById(id: string): Promise<AxiosResponse<void>> {
    return makeRequest({
      url: `${url}/${id}`,
      method: "DELETE",
    });
  }
}

export default new ProductApi();
