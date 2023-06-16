import axios from "axios";

import { API_ENDPOINTS } from "../../config/config";

const instance = axios.create({
  baseURL: API_ENDPOINTS.base,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const atmService = {
  getBalance: async (pin: string) => {
    try {
      const response = await instance.post("/pin");
      return response.data;
    } catch (e) {}
  },
  withdraw: async (amount: number) => {
    const response = await instance.post("");
    return response.data;
  },
};
