import { useContext } from "react";
import { WizardContext } from "../WizardContext";

export const useWizardContext = () => {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error(
      `A composite Wizard component cannot be rendered outside of the parent Wizard`
    );
  }
  return context;
};
