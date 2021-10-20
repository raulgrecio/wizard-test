import React from "react";
import classnames from "classnames";

import { useWizardContext, CheckIcon } from "../../../../components";

import "./WizardProgress.scss";

export const WizardProgress = () => {
  const { activeStep, stepsTotal } = useWizardContext();

  return (
    <div className={"WizardProgress"}>
      <div className={"WizardProgress-container"}>
        {Array.from({ length: stepsTotal }, (_, i) => i + 1).map(
          (number, index) => {
            return (
              <div
                key={`wizard-number-${number}`}
                className={"WizardProgress-container-step"}
              >
                <div
                  className={classnames("step", {
                    activated: index === activeStep,
                    completed: activeStep > index,
                  })}
                >
                  {activeStep > index ? <CheckIcon width={16} /> : number}
                </div>
                {number !== stepsTotal && (
                  <div
                    className={classnames("line", {
                      completed: activeStep > index,
                    })}
                  />
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
