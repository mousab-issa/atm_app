import React from "react";

import { ScreenContainer } from "./ScreenContainer";

export const SuccessScreen: React.FC = () => {
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
