import React, { Fragment, useContext, useState } from "react";
import { AtmContext, AtmSteps } from "../ATMContext";

const BackButton: React.FC = () => {
  const { dispatch } = useContext(AtmContext);

  const handleBack = () => {
    dispatch({ type: "SELECT_OPTION", option: AtmSteps.Menu });
  };

  return (
    <button onClick={handleBack} className="back-button">
      Back
    </button>
  );
};

const PinInput: React.FC = () => {
  const { state } = useContext(AtmContext);

  return (
    <div className="mb-5">
      <label htmlFor="pin" className="block text-center mb-2">
        Enter PIN:
      </label>
      <input
        value={state.pin}
        id="pin"
        className="w-full px-3 py-2 text-center text-black  rounded-lg"
        readOnly
      />
    </div>
  );
};

const WithdrawalForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(AtmContext);

  const handleWithdraw = (e: any) => {
    e.preventDefault();
    dispatch({ type: "ENTER_AMOUNT", amount: parseInt(amount) });
  };

  return (
    <Fragment>
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
    </Fragment>
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
      <p className="text-xl">Options:</p>
      <div className="flex justify-between">
        <ul className="list-inside">
          <li
            onClick={() =>
              dispatch({ type: "SELECT_OPTION", option: AtmSteps.CheckBalance })
            }
          >
            View Balance
          </li>
          <li
            onClick={() =>
              dispatch({ type: "SELECT_OPTION", option: AtmSteps.Withdraw })
            }
          >
            Withdraw Cash
          </li>
        </ul>
        <ul className="list-decimal list-inside">
          <li>Quit</li>
        </ul>
      </div>
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

type ScreenContainerProps = {
  children: React.ReactNode;
};

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return (
    <div className="text-center mb-5">
      <h1 className="text-2xl font-bold text-gray-300">WELCOME TO ATM BANK</h1>
      <BackButton />
      {children}
    </div>
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

  console.log(step);

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
