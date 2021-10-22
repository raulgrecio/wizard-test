import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import "./FormStep.scss";

import {
  InnerContainer,
  InputField,
  PasswordField,
  Title,
  useWizardContext,
} from "../../../../components";
import {
  getConfirmPasswordSelector,
  getHintPasswordSelector,
  getPasswordSelector,
} from "../../store/checkingAccount.form.selectors";
import {
  changeConfirmPassword,
  changeHintPassword,
  changePassword,
} from "../../store/checkingAccount.form.slice";
import { CheckingAccountState } from "../../store/checkingAccount.interface";
import { sendCheckingAccount } from "../../store/checkingAccount.submit.slice";
import { WizardNavigation } from "../../components";
import useReset from "../../hooks/useReset";

export interface FormStepProps {
  onSubmit?: VoidFunction;
}

function FormStep({ onSubmit }: FormStepProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { increment } = useWizardContext();

  const password = useSelector(getPasswordSelector);
  const confirmPassword = useSelector(getConfirmPasswordSelector);
  const hintPassword = useSelector(getHintPasswordSelector);
  const reset = useReset();

  const schema = yup
    .object()
    .shape({
      password: yup
        .string()
        .label(t("screens.checking-account.form-step.form.password.input"))
        .required()
        .min(8)
        .max(24)
        .matches(/.*[A-Z].*/, t("validations.common.matches.uppercase"))
        .matches(/.*[a-z].*/, t("validations.common.matches.lowercase"))
        .matches(/.*[0-9].*/, t("validations.common.matches.number")),
      confirmPassword: yup
        .string()
        .label(
          t("screens.checking-account.form-step.form.confirm-password.input")
        )
        .required()
        .oneOf(
          [yup.ref("password"), null],
          t("validations.confirm-password.one-of")
        ),
      hintPassword: yup
        .string()
        .label(t("screens.checking-account.form-step.form.hint-password.input"))
        .max(255)
        .notOneOf(
          [yup.ref("password"), null],
          t("validations.hint-password.not-one-of")
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<
    Pick<CheckingAccountState, "password" | "confirmPassword" | "hintPassword">
  >({
    resolver: yupResolver(schema),
    defaultValues: { password, confirmPassword, hintPassword },
    mode: "onChange",
  });

  const onSubmitInternal = handleSubmit((data) => {
    console.log("data", data);
    //values
    dispatch(changePassword(data.password));
    dispatch(changeConfirmPassword(data.confirmPassword));
    dispatch(changeHintPassword(data.hintPassword));

    //send
    dispatch(sendCheckingAccount());

    increment();
  });

  const onCancel = () => reset();

  return (
    <aside className={"FormStep"}>
      <InnerContainer>
        <Title text={t("screens.checking-account.form-step.title")} />
        <form>
          <p>{t("screens.checking-account.form-step.paragraph-1")}</p>
          <div className={"FormStep__password"}>
            <PasswordField
              label={t(
                "screens.checking-account.form-step.form.password.label"
              )}
              {...{
                autoComplete: "off",
                placeholder: t(
                  "screens.checking-account.form-step.form.password.placeholder"
                ),
              }}
              {...register("password")}
              error={errors.password}
            />
            <PasswordField
              label={t(
                "screens.checking-account.form-step.form.confirm-password.label"
              )}
              {...{
                autoComplete: "off",
                placeholder: t(
                  "screens.checking-account.form-step.form.confirm-password.placeholder"
                ),
              }}
              {...register("confirmPassword")}
              error={errors.confirmPassword}
            />
          </div>
          <p>{t("screens.checking-account.form-step.paragraph-2")}</p>
          <InputField
            label={t(
              "screens.checking-account.form-step.form.hint-password.label"
            )}
            {...{
              placeholder: t(
                "screens.checking-account.form-step.form.hint-password.placeholder"
              ),
            }}
            {...register("hintPassword")}
            error={errors.hintPassword}
          />
        </form>
      </InnerContainer>
      <WizardNavigation
        onCancel={onCancel}
        onSubmit={onSubmitInternal}
        disabled={!isValid}
      />
    </aside>
  );
}

export { FormStep };
