import * as React from "react";

export const useCounter = ({ initialCount = 0 }) => {
  const [activeStep, setCount] = React.useState(initialCount);
  const [stepsTotal, setStepsTotal] = React.useState(1);
  const isLastStep = activeStep === stepsTotal - 1;

  const decrement = () => {
    if (activeStep > 0) {
      setCount(activeStep - 1);
    }
  };
  const increment = () => {
    if (activeStep < stepsTotal + 1) {
      setCount(activeStep + 1);
    }
  };

  return {
    activeStep,
    decrement,
    increment,
    isLastStep,
    stepsTotal,
    setStepsTotal,
  };
};
