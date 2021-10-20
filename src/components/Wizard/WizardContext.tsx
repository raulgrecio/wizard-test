import { createContext } from "react";

export const WizardContext = createContext<{
  activeStep: number;
  decrement: VoidFunction;
  increment: VoidFunction;
  isLastStep: boolean;
  stepsTotal: number;
  setStepsTotal: Function;
}>({
  activeStep: 0,
  decrement: () => {},
  increment: () => {},
  isLastStep: false,
  stepsTotal: 0,
  setStepsTotal: (value: number) => {},
});
