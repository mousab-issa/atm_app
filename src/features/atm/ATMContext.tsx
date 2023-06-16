import React, { createContext, Dispatch, useReducer } from "react";

export const initialState: AtmState = {
  step: 0,
  pin: "",
  amount: 0,
  balance: 0,
  error: null,
};

export const atmReducer = (state: AtmState, action: AtmAction): AtmState => {
  switch (action.type) {
    case "ENTER_PIN":
      return { ...state, pin: action.pin, step: 1 };
    case "SELECT_OPTION":
      return { ...state, step: action.option };
    case "ENTER_AMOUNT":
      return { ...state, amount: action.amount, step: 3 };
    case "RESET":
      return initialState;
    case "FETCH_BALANCE_SUCCESS":
      return { ...state, balance: action.balance };
    case "FETCH_BALANCE_ERROR":
      return { ...state, error: action.error };
    case "WITHDRAW_CASH_SUCCESS":
      return { ...state, balance: state.balance - action.balance };
    case "WITHDRAW_CASH_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

type AtmContextProps = {
  state: AtmState;
  dispatch: Dispatch<AtmAction>;
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
