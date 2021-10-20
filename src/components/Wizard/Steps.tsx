import * as React from "react";
import { useWizardContext } from "./hooks/useWizardContext";

const isArrayReactNode = (
  anyThing: JSX.Element | JSX.Element[]
): anyThing is JSX.Element[] => Array.isArray(anyThing);

export interface StepsProps {
  children: JSX.Element | JSX.Element[];
}

export const Steps = ({ children }: StepsProps) => {
  const { activeStep, setStepsTotal } = useWizardContext();

  React.useEffect(() => {
    if (isArrayReactNode(children)) {
      setStepsTotal(React.Children.count(children));
    } else {
      setStepsTotal(1);
    }
  }, [children, setStepsTotal]);

  if (isArrayReactNode(children)) {
    return children[activeStep];
  }

  return children;
};
