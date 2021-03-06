export interface IService {
  _id?: string;
  serviceName: string;
  price: string;
  status: string;
  imageUrl: string;
  details: string;
  id?: string;
  __v?: number;
}

export interface IReview {
  _id?: string | null;
  userEmail: string | null;
  reviewMsg: string | null;
}

export interface IuserLogin {
  email: string;
  password: string;
}

export interface IOrders {
  id: string;
  serviceId: string;
  serviceName: string;
  price: number;
  quantity: number;
  customerEmail: string;
  orderTime: string;
  status: string;
}
