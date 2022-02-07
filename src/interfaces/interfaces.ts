

  export interface IService {
    _id: string;
    serviceName: string;
    price: string;
    status: string;
    imageUrl: string;
    details: string;
    id:string;
  }

  export interface IReview {
    _id: string;
    userEmail: string;
    reviewMsg: string;
  }