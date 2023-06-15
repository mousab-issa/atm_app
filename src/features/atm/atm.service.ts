import axios from "axios";

import { API_ENDPOINTS } from "../../config/config";

const instance = axios.create({
  baseURL: API_ENDPOINTS.base,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const atmService = {
  getBalance: async () => {
    try {
      const response = await instance.get("");
    } catch (e) {}
  },
  withdraw: async () => {},
};
