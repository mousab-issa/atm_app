import React, { useContext } from "react";
import { AtmContext } from "./ATMContext";

import { ScreenContainer } from "./ScreenContainer";

export const WithdrawalProcessingScreen: React.FC = () => {
  const { state } = useContext(AtmContext);
  const { withdrawalNotes } = state;

  return (
    <ScreenContainer>
      <p className="text-xl">Withdrawing £{state.amount}</p>
      <p>Please take your cash from the slot.</p>
      {withdrawalNotes && (
        <p>
          Notes: £20 x {withdrawalNotes.twenty}, £10 x {withdrawalNotes.ten}, £5
          x {withdrawalNotes.five}
        </p>
      )}
    </ScreenContainer>
  );
};
