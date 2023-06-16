import React, { useContext, useState } from "react";
import { AtmContext, AtmSteps } from "../store/ATMContext";
import { BackButton } from "./BackButton";
import { PinInput } from "./PinInput";
import { ScreenContainer } from "./ScreenContainer";

const WithdrawalForm: React.FC = () => {
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

const WithdrawalProcessingScreen: React.FC = () => {
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

const MenuScreen: React.FC = () => {
  const { dispatch } = useContext(AtmContext);

  return (
    <ScreenContainer>
      <p className="text-xl">Please select an option:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() =>
            dispatch({ type: "SELECT_OPTION", option: AtmSteps.CheckBalance })
          }
          className="w-full bg-blue-500 hover:bg-blue-600 px-3 py-2 text-center text-white rounded-md"
        >
          View Balance
        </button>
        <button
          onClick={() =>
            dispatch({ type: "SELECT_OPTION", option: AtmSteps.Withdraw })
          }
          className="w-full bg-blue-500 hover:bg-blue-600 px-3 py-2 text-center text-white rounded-md"
        >
          Withdraw Cash
        </button>
      </div>
      <BackButton />
    </ScreenContainer>
  );
};

const LoginScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <PinInput />
    </ScreenContainer>
  );
};

const SuccessScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <p className="text-xl">Would you like to perform another transaction?</p>
      <ul className="list-decimal list-inside">
        <li>Yes</li>
        <li>No</li>
      </ul>
    </ScreenContainer>
  );
};

const BalanceScreen: React.FC = () => {
  const { state } = useContext(AtmContext);

  return (
    <ScreenContainer>
      <p className="text-xl">Your current balance is £{state.balance}</p>
    </ScreenContainer>
  );
};

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
