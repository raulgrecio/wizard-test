import React from "react";
import { useWizardContext } from "./hooks/useWizardContext";

const BasicProgress = () => {
  const { activeStep, stepsTotal } = useWizardContext();

  return (
    <progress
      value={Math.ceil(((activeStep + 1) / stepsTotal) * 100).toString()}
      max="100"
    />
  );
};

export default BasicProgress;
