import React, { useContext } from "react";
import { AtmContext } from "./ATMContext";
import AtmButton from "./components/AtmButton";
import Display from "./components/Display";
import { useFetchBalance } from "./hooks";

const numbers = Array.from({ length: 9 }).map((_, i) => `${i + 1}`);

const ATMContainer: React.FC = () => {
  const fetchBalance = useFetchBalance();
  const { dispatch, state } = useContext(AtmContext);

  const handleAddPin = (number: string) => {
    dispatch({ type: "ENTER_PIN", pin: state.pin + number });
  };

  const handleSubmitPin = () => {
    fetchBalance(state.pin);
    dispatch({ type: "ENTER_PIN", pin: "" });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-900 min-h-screen text-white w-full">
      <div className="w-96 h-auto bg-gray-600 rounded-lg shadow-2xl flex flex-col items-center p-6 gap-6 transform perspective-150 rotate-y-5">
        <div className="bg-blue-500 w-full rounded-lg flex items-center justify-center h-56 relative overflow-hidden shadow-inner">
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-r from-green-400 to-blue-500 animate-pulse" />
          <Display />
        </div>

        <div className="grid grid-cols-3 gap-4 w-2/3 mb-4">
          {numbers.map((number, i) => (
            <AtmButton
              key={i + 1}
              value={number}
              onClick={() => handleAddPin(number)}
            />
          ))}
          <AtmButton value="Enter" onClick={handleSubmitPin} />
        </div>
      </div>
    </div>
  );
};

export default ATMContainer;
