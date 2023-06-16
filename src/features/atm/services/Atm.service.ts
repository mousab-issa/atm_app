import axios, { AxiosResponse } from "axios";

import { API_ENDPOINTS } from "../../../config/config";

const instance = axios.create({
  baseURL: API_ENDPOINTS.base,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const atmService = {
  getBalance: async (pin: string) => {
    try {
      const response: AxiosResponse<{
        currentBalance: number;
      }> = await instance.post("/pin", { pin });

      return response.data.currentBalance;
    } catch (e: any) {
      throw new Error(e.message);
    }
  },
  withdraw: async (amount: number) => {
    const response = await instance.post("");
    return response.data;
  },
};
