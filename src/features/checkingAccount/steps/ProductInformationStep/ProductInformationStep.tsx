import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import {
  Article,
  CheckboxField,
  InnerContainer,
  Section,
  Title,
  useWizardContext,
  CheckingAccountGraph1Icon,
  CheckingAccountGraph2Icon,
} from "../../../../components";
import { WizardNavigation } from "../../components";
import {
  getAcceptTermsSelector,
  getMayorAgeSelector,
} from "../../store/checkingAccount.form.selectors";
import { CheckingAccountState } from "../../store/checkingAccount.interface";
import {
  changeAcceptTerms,
  changeMayorAge,
} from "../../store/checkingAccount.form.slice";
import useReset from "../../hooks/useReset";

import "./ProductInformationStep.scss";

export const ProductInformationStep = () => {
  const { t } = useTranslation("", {
    keyPrefix: "screens.checking-account.product-information-step",
  });
  const dispatch = useDispatch();
  const { increment } = useWizardContext();
  const acceptTerms = useSelector(getAcceptTermsSelector);
  const mayorAge = useSelector(getMayorAgeSelector);
  const reset = useReset({ confirm: true });

  const schema = yup
    .object()
    .shape({
      acceptTerms: yup.boolean().label(t("form.accept-terms.input")).isTrue(),
      mayorAge: yup.boolean().label(t("form.mayor-age.input")).isTrue(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Pick<CheckingAccountState, "acceptTerms" | "mayorAge">>({
    resolver: yupResolver(schema),
    defaultValues: { acceptTerms, mayorAge },
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    console.log("data", data);
    dispatch(changeAcceptTerms(data.acceptTerms));
    dispatch(changeMayorAge(data.mayorAge));
    increment();
  });

  const onCancel = () => reset();

  return (
    <aside className={"ProductInformationStep"}>
      <InnerContainer>
        <Title text={t("title")} />
        <div className={"ProductInformationStep__gallery"}>
          <Article figCaption={t("graph1.fig-caption")}>
            <CheckingAccountGraph1Icon />
          </Article>
          <Article figCaption={t("graph2.fig-caption")}>
            <CheckingAccountGraph2Icon />
          </Article>
        </div>
        <Section
          title={t("section1.title")}
          description={t("section1.description")}
        />
        <Section
          title={t("section2.title")}
          description={t("section2.description")}
        />

        <div className={"pt-3"}>
          <form onSubmit={onSubmit}>
            <CheckboxField
              label={t("form.accept-terms.label")}
              {...register("acceptTerms")}
              error={errors.acceptTerms}
            />
            <CheckboxField
              label={t("form.mayor-age.label")}
              {...register("mayorAge")}
              error={errors.mayorAge}
            />
          </form>
        </div>
      </InnerContainer>
      <WizardNavigation
        onSubmit={onSubmit}
        onCancel={onCancel}
        disabled={!isValid}
      />
    </aside>
  );
};
