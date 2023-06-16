import React, { useContext } from "react";
import { AtmContext, AtmSteps } from "./ATMContext";
import { BackButton } from "./BackButton";
import { ScreenContainer } from "./ScreenContainer";

export const MenuScreen: React.FC = () => {
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
