import React, { useContext } from "react";
import { AtmContext, AtmSteps } from "./ATMContext";
import { BalanceScreen } from "./BalanceScreen";
import { LoginScreen } from "./LoginScreen";
import { MenuScreen } from "./MenuScreen";
import { SuccessScreen } from "./SuccessScreen";
import { WithdrawalForm } from "./WithdrawalForm";
import { WithdrawalProcessingScreen } from "./WithdrawalProcessingScreen";

const Display: React.FC = () => {
  const {
    state: { step },
  } = useContext(AtmContext);

  return (
    <div className="flex flex-col justify-center items-center text-white">
      {step === AtmSteps.EnterPin && <LoginScreen />}
      {step === AtmSteps.Menu && <MenuScreen />}
      {step === AtmSteps.WithdrawProcessing && <WithdrawalProcessingScreen />}
      {step === AtmSteps.CheckBalance && <BalanceScreen />}
      {step === AtmSteps.Withdraw && <WithdrawalForm />}
      {step === AtmSteps.SuccessScreen && <SuccessScreen />}
    </div>
  );
};

export default Display;
