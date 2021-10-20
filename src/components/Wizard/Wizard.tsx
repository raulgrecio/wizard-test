import React, { Suspense } from "react";
import { WizardContext } from "./WizardContext";
import { useCounter } from "./hooks/useStepState";

export interface WizardProps {
  children?: React.ReactChild | React.ReactChild[];
  withBasicProgress?: boolean;
  withBasicNavigation?: boolean;
}

export const Wizard = ({
  children,
  withBasicProgress = false,
  withBasicNavigation = false,
}: WizardProps) => {
  const context = useCounter({ initialCount: 0 });

  const BasicProgressLazy = React.lazy(() => import("./BasicProgress"));
  const BasicNavigationLazy = React.lazy(
    () => import("./BasicNavigation/BasicNavigation")
  );

  return (
    <WizardContext.Provider value={context}>
      {withBasicProgress && (
        <Suspense fallback={false}>
          <BasicProgressLazy />
        </Suspense>
      )}
      {children}
      {withBasicNavigation && (
        <Suspense fallback={false}>
          <BasicNavigationLazy />
        </Suspense>
      )}
    </WizardContext.Provider>
  );
};
