import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import {
  Button,
  ChevronRightIcon,
  InnerContainer,
  useWizardContext,
} from "../../../../components";
import { routes } from "../../../../core/router";

import "./WizardNavigation.scss";

export interface WizardNavigationProps {
  onSubmit?: VoidFunction;
  submitText?: string;
  hasCancel?: boolean;
  onCancel?: VoidFunction;
  disabled?: boolean;
}

export const WizardNavigation = ({
  onSubmit,
  onCancel,
  submitText,
  hasCancel = true,
  disabled = false,
}: WizardNavigationProps) => {
  const { t } = useTranslation("", {
    keyPrefix: "screens.checking-account.components.wizard-navigation",
  });
  const { increment, isLastStep } = useWizardContext();
  const history = useHistory();

  const handleClick = () => {
    if (onSubmit) {
      onSubmit();
      return;
    }

    if (!isLastStep) {
      increment();
    }
  };

  const handleCancel = () => {
    const response = window.confirm(t("confirm"));
    if (response) {
      history.push(routes.root);
    }
  };

  return (
    <div className="WizardNavigation">
      <InnerContainer>
        <div className="WizardNavigation-control">
          <Button
            type={"submit"}
            variant={!isLastStep ? "secondary" : "default"}
            style={
              isLastStep
                ? { color: "var(--bs-primary)", fontWeight: "bold" }
                : {}
            }
            onClick={handleClick}
            disabled={disabled}
            className={"Button-with-icon"}
          >
            {submitText ?? (!isLastStep ? t("next") : t("submit"))}
            <ChevronRightIcon width={20} />
          </Button>

          {hasCancel && (
            <Button onClick={onCancel ?? handleCancel}>{t("cancel")}</Button>
          )}
        </div>
      </InnerContainer>
    </div>
  );
};
