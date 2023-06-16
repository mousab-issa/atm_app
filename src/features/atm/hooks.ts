import { useContext } from "react";
import { atmService } from "./services/Atm.service";
import { AtmContext } from "./ATMContext";

export const useFetchBalance = () => {
  const { dispatch } = useContext(AtmContext);

  const fetchBalance = async (pin: string) => {
    try {
      const balance = await atmService.getBalance(pin);
      if (!balance) {
        return;
      }

      dispatch({ type: "FETCH_BALANCE_SUCCESS", balance });
    } catch (error: any) {
      dispatch({ type: "FETCH_BALANCE_ERROR", error: error.message });
    }
  };

  return fetchBalance;
};

export const useWithdrawCash = () => {
  const { dispatch } = useContext(AtmContext);

  const withdrawCash = async (amount: number) => {
    try {
      const balance = await atmService.withdraw(amount);
      dispatch({ type: "WITHDRAW_CASH_SUCCESS", balance });
    } catch (error: any) {
      dispatch({ type: "WITHDRAW_CASH_ERROR", error: error.message });
    }
  };

  return withdrawCash;
};
