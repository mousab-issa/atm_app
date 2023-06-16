import React, { useContext } from "react";
import { AtmContext } from "../store/ATMContext";

export const PinInput: React.FC = () => {
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
