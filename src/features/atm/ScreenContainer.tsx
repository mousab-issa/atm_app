import React, { useContext } from "react";
import { AtmContext, AtmSteps } from "./ATMContext";
import { BackButton } from "./BackButton";

type ScreenContainerProps = {
  children: React.ReactNode;
};
export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
}) => {
  const {
    state: { step, error },
  } = useContext(AtmContext);

  return (
    <div className="text-center mb-5">
      <h1 className="text-2xl font-bold text-gray-300">WELCOME TO ATM BANK</h1>
      {step !== AtmSteps.EnterPin && step !== AtmSteps.Menu && <BackButton />}
      {children}

      <span>{error && error}</span>
    </div>
  );
};
