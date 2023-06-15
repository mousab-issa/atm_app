import React, { useState } from "react";

const PinInput: React.FC = () => {
  const [pin, setPin] = useState("");

  return (
    <div className="mb-5">
      <label htmlFor="pin" className="block text-center mb-2">
        Enter PIN:
      </label>
      <input
        id="pin"
        type="password"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        className="w-full px-3 py-2 text-center text-black"
      />
    </div>
  );
};

export default PinInput;
