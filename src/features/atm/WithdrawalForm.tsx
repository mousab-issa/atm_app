import React, { useContext, useState } from "react";
import { AtmContext } from "./ATMContext";
import { ScreenContainer } from "./ScreenContainer";

export const WithdrawalForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(AtmContext);

  const handleWithdraw = (e: any) => {
    e.preventDefault();
    dispatch({ type: "ENTER_AMOUNT", amount: parseInt(amount) });
  };

  return (
    <ScreenContainer>
      <label htmlFor="amount" className="block text-center mb-2">
        Withdrawal amount:
      </label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-3 py-2 text-center text-black mb-3"
      />

      <button
        onClick={handleWithdraw}
        className="w-full bg-green-500 hover:bg-green-600 px-3 py-2 text-center text-white"
      >
        Withdraw
      </button>
    </ScreenContainer>
  );
};
