import React from "react";
import PinInput from "./components/PinInput";
import BalanceDisplay from "./components/BalanceDisplay";
import WithdrawalForm from "./components/WithdrawalForm";

const ATMContainer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 h-screen text-white">
      <h1 className="text-3xl mb-5">ATM Machine</h1>
      <div className="border border-gray-600 bg-gray-700 p-8 rounded-xl w-96">
        <BalanceDisplay />
        <PinInput />
        <WithdrawalForm />
      </div>
    </div>
  );
};

export default ATMContainer;
