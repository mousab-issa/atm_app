type AtmState = {
  step: number;
  pin: string;
  amount: number;
  balance: number;
  error: string | null;
};

type AtmAction =
  | { type: "ENTER_PIN"; pin: string }
  | { type: "SELECT_OPTION"; option: number }
  | { type: "ENTER_AMOUNT"; amount: number }
  | { type: "RESET" }
  | { type: "FETCH_BALANCE_SUCCESS"; balance: number }
  | { type: "FETCH_BALANCE_ERROR"; error: string }
  | { type: "WITHDRAW_CASH_SUCCESS"; balance: number }
  | { type: "WITHDRAW_CASH_ERROR"; error: string };
