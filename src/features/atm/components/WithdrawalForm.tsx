import React, { useState } from "react";

const WithdrawalForm: React.FC = () => {
  const [amount, setAmount] = useState("");

  const handleWithdraw = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleWithdraw}>
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
        className="w-full bg-green-500 hover:bg-green-600 px-3 py-2 text-center text-white"
        type="submit"
      >
        Withdraw
      </button>
    </form>
  );
};

export default WithdrawalForm;
