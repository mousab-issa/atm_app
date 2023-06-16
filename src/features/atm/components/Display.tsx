import React, { useContext, useState } from "react";
import { AtmContext } from "../ATMContext";
import { useFetchBalance } from "../hooks";
import { useAtmStepper } from "../useAtmStepper";

const PinInput: React.FC<{ onSubmit: (pin: string) => void }> = (props) => {
  const { state } = useContext(AtmContext);

  return (
    <div className="mb-5">
      <label htmlFor="pin" className="block text-center mb-2">
        Enter PIN:
      </label>
      <input
        value={state.pin}
        id="pin"
        className="w-full px-3 py-2 text-center text-black"
        readOnly
      />
    </div>
  );
};

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
const WithdrawalProcessingScreen: React.FC<{ amount: number }> = ({
  amount,
}) => {
  return (
    <ScreenContainer>
      <p className="text-xl">Withdrawing £{amount}...</p>
      <p>Please take your cash from the slot.</p>
    </ScreenContainer>
  );
};

type MenuScreenProps = {
  onSelectOption: (option: number) => void;
};

const MenuScreen: React.FC<MenuScreenProps> = ({ onSelectOption }) => {
  return (
    <ScreenContainer>
      <p className="text-xl">Options:</p>
      <div className="flex justify-between">
        <ul className="list-inside">
          <li onClick={() => onSelectOption(1)}>View Balance</li>
          <li onClick={() => onSelectOption(2)}>Withdraw Cash</li>
        </ul>
        <ul className="list-decimal list-inside">
          <li onClick={() => onSelectOption(4)}>Quit</li>
        </ul>
      </div>
    </ScreenContainer>
  );
};

const LoginScreen: React.FC = () => {
  const { state } = useContext(AtmContext);
  const fetchBalance = useFetchBalance();

  const handlePinSubmit = (pin: string) => {
    fetchBalance(pin);
  };

  return (
    <ScreenContainer>
      <PinInput onSubmit={handlePinSubmit} />
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

const Display: React.FC = () => {
  const { step, goToStep } = useAtmStepper(0);

  const handleSelectOption = (option: number) => {
    if (option === 2) {
      goToStep(2);
    }
  };

  const handleSelectAmount = (amount: number) => {
    if (amount === 0) {
      goToStep(3);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white">
      {step === 0 && <LoginScreen />}
      {step === 1 && <MenuScreen onSelectOption={handleSelectOption} />}
      {step === 2 && <WithdrawalProcessingScreen amount={50} />}
      {step === 3 && <WithdrawalForm />}
      {step === 4 && <SuccessScreen />}
    </div>
  );
};

export default Display;
