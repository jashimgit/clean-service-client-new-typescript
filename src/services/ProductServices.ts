import { IService } from "../interfaces/interfaces";
import requests from "./httpService";

class ProductServices {
  getServices(): Promise<IService> {
    return requests.get("/service");
  }
  getProductServiceById(id: string) {
    return requests.get(`/service/${id}`);
  }
  addProductService(body: {}) {
    return requests.post("/service", body);
  }
}

export default new ProductServices();
