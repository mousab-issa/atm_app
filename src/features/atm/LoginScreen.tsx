import React from "react";

import { PinInput } from "./PinInput";
import { ScreenContainer } from "./ScreenContainer";

export const LoginScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <PinInput />
    </ScreenContainer>
  );
};
