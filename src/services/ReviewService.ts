import { IReview } from "../interfaces/interfaces";
import requests from "./httpService";

class ReviewService {
  getReviews(): Promise<IReview> {
    return requests.get("/review");
  }
  getReviewById(id: string) {
    return requests.get(`/review/${id}`);
  }
  addReview(body: {}) {
    return requests.post("/review", body);
  }
}

export default new ReviewService();
