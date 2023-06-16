import React, { createContext, useReducer } from "react";
import { calculateNotes } from "../utils/utils";

export enum AtmSteps {
  EnterPin = "ENTER_PIN",
  Menu = "MENU",
  Withdraw = "WITHDRAW",
  CheckBalance = "CHECK_BALANCE",
  WithdrawProcessing = "WITHDRAW_PROCESSING",
  SuccessScreen = "SUCCESS_SCREEN",
}

export const initialState: AtmState = {
  step: AtmSteps.EnterPin,
  pin: "",
  amount: 0,
  balance: 0,
  error: null,
  notes: {
    five: 4,
    ten: 15,
    twenty: 7,
  },
};

export const atmReducer = (state: AtmState, action: AtmAction): AtmState => {
  switch (action.type) {
    case "ENTER_PIN":
      return { ...state, pin: action.pin };

    case "SELECT_OPTION":
      return { ...state, step: action.option };

    case "ENTER_AMOUNT":
      const { remaining, newNotes, distributedNotes } = calculateNotes(
        action.amount,
        state.notes
      );

      if (remaining > 0) {
        return {
          ...state,
          error: `Unable to withdraw amount. Remaining: £${remaining}`,
        };
      } else {
        return {
          ...state,
          amount: action.amount,
          notes: newNotes,
          step: AtmSteps.WithdrawProcessing,
          withdrawalNotes: distributedNotes,
        };
      }

    case "FETCH_BALANCE_SUCCESS":
      return { ...state, balance: action.balance, step: AtmSteps.Menu };
    case "FETCH_BALANCE_ERROR":
      return { ...state, error: action.error };

    case "WITHDRAW_CASH_SUCCESS":
      return { ...state, balance: state.balance - action.balance };
    case "WITHDRAW_CASH_ERROR":
      return { ...state, error: action.error };

    case "UPDATE_NOTES":
      return { ...state, notes: action.notes };

    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const AtmContext = createContext<AtmContextProps>({
  state: initialState,
  dispatch: () => undefined,
});

type AtmProviderProps = {
  children: React.ReactNode;
};

export const AtmProvider: React.FC<AtmProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(atmReducer, initialState);

  return (
    <AtmContext.Provider value={{ state, dispatch }}>
      {children}
    </AtmContext.Provider>
  );
};
