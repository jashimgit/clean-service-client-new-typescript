import axios, { AxiosResponse } from "axios";

// create axios instance
const httpInstance = axios.create({
  baseURL: "https://clean-server.herokuapp.com",
  timeout: 15000,
});

// handle response data

const handleResponse = (response: AxiosResponse) => response.data.data;

const requests = {
  get: (url: string) => httpInstance.get(url).then(handleResponse),
  post: (url: string, body: object) =>
    httpInstance.post(url).then(handleResponse),
};

export default requests;
