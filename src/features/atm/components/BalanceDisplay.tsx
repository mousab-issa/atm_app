import React from "react";

const BalanceDisplay: React.FC = () => {
  const balance = 200;

  return (
    <div className="text-center mb-5">
      <h2 className="text-xl">Balance:</h2>
      <p className="text-2xl font-bold">£{balance}</p>
    </div>
  );
};

export default BalanceDisplay;
