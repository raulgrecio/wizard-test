import React from "react";
import { useTranslation } from "react-i18next";
import { useWizardContext } from "../hooks/useWizardContext";

import "./BasicNavigation.scss";

export interface BasicNavigationProps {
  onSubmit?: VoidFunction;
  disabled?: boolean;
}

export default function BasicNavigation({
  onSubmit = () => alert("Send!"),
  disabled = false,
}: BasicNavigationProps) {
  const { t } = useTranslation();
  const { activeStep, decrement, increment, isLastStep } = useWizardContext();
  const isFirst = activeStep === 0;

  const handleClick = () => {
    if (!isLastStep) {
      increment();
      return;
    }

    onSubmit && onSubmit();
  };

  return (
    <div className="BasicNavigation">
      <button className="btn" onClick={decrement} disabled={isFirst}>
        {t("components.wizard.previous")}
      </button>

      <button
        type={"submit"}
        className="btn btn-primary"
        onClick={handleClick}
        disabled={disabled}
      >
        {!isLastStep
          ? t("components.wizard.next")
          : t("components.wizard.submit")}
      </button>
    </div>
  );
}
