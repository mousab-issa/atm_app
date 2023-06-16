import React, { useContext } from "react";
import { AtmContext } from "./ATMContext";

import { ScreenContainer } from "./ScreenContainer";

export const BalanceScreen: React.FC = () => {
  const { state } = useContext(AtmContext);

  return (
    <ScreenContainer>
      <p className="text-xl">Your current balance is £{state.balance}</p>
    </ScreenContainer>
  );
};
