type AtmState = {
  step: AtmSteps;
  pin: string;
  amount: number;
  balance: number;
  error: string | null;
  notes: {
    five: number;
    ten: number;
    twenty: number;
  };
  withdrawalNotes?: { five: number; ten: number; twenty: number };
};

type AtmAction =
  | { type: "ENTER_PIN"; pin: string }
  | { type: "SELECT_OPTION"; option: AtmSteps }
  | { type: "ENTER_AMOUNT"; amount: number }
  | { type: "RESET" }
  | { type: "FETCH_BALANCE_SUCCESS"; balance: number }
  | { type: "FETCH_BALANCE_ERROR"; error: string }
  | { type: "WITHDRAW_CASH_SUCCESS"; balance: number }
  | { type: "WITHDRAW_CASH_ERROR"; error: string }
  | {
      type: "UPDATE_NOTES";
      notes: { five: number; ten: number; twenty: number };
    };
