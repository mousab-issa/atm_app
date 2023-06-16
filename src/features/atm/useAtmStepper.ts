import { useState } from "react";

export const useAtmStepper = (initialStep: number) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const goToStep = (step: number) => {
    setStep(step);
  };

  return { step, nextStep, goToStep, prevStep };
};
