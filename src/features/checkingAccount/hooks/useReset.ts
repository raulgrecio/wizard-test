import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { resetForm } from "../store/checkingAccount.form.slice";

import { routes } from "../../../core/router";

type UseCancelWizardProps = {
  confirm?: boolean;
  confirmText?: string;
};

export default function useReset(props?: UseCancelWizardProps) {
  const { t } = useTranslation("", {
    keyPrefix: "screens.checking-account.components.wizard-navigation",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  return () => {
    const question = props?.confirmText ?? t("confirm");
    const innerConfirm = props?.confirm ?? true;
    const response = !innerConfirm || window.confirm(question);

    if (response) {
      dispatch(resetForm());
      history.push(routes.root);
    }
  };
}
