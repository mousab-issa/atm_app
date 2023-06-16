import React, { useContext } from "react";
import { AtmContext, AtmSteps } from "../store/ATMContext";

export const BackButton: React.FC = () => {
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
