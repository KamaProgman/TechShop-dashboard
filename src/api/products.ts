import { IProduct } from "../types/product";
import makeRequest from "./makeRequest";

const url = "/products"

class ProductApi {
  async getAll() {
    const res = await makeRequest({ url })
    return res
  }

  addNewProduct(data: IProduct) {
    return makeRequest({
      url,
      method: "POST",
      data
    })
  }
}

export default new ProductApi()