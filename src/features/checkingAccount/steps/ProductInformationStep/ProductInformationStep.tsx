import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { routes } from "../../../../core/router";
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

import "./ProductInformationStep.scss";

export const ProductInformationStep = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { increment } = useWizardContext();
  const acceptTerms = useSelector(getAcceptTermsSelector);
  const mayorAge = useSelector(getMayorAgeSelector);

  const schema = yup
    .object()
    .shape({
      acceptTerms: yup
        .boolean()
        .label(
          t(
            "screens.checking-account.product-information-step.form.accept-terms.input"
          )
        )
        .isTrue(),
      mayorAge: yup
        .boolean()
        .label(
          t(
            "screens.checking-account.product-information-step.form.mayor-age.input"
          )
        )
        .isTrue(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
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

  const onCancel = () => {
    history.push(routes.root);
  };

  return (
    <aside className={"ProductInformationStep"}>
      <InnerContainer>
        <Title
          text={t("screens.checking-account.product-information-step.title")}
        />
        <div className={"ProductInformationStep__gallery"}>
          <Article
            figCaption={t(
              "screens.checking-account.product-information-step.graph1.fig-caption"
            )}
          >
            <CheckingAccountGraph1Icon />
          </Article>
          <Article
            figCaption={t(
              "screens.checking-account.product-information-step.graph2.fig-caption"
            )}
          >
            <CheckingAccountGraph2Icon />
          </Article>
        </div>
        <Section
          title={t(
            "screens.checking-account.product-information-step.section1.title"
          )}
          description={t(
            "screens.checking-account.product-information-step.section1.description"
          )}
        />
        <Section
          title={t(
            "screens.checking-account.product-information-step.section2.title"
          )}
          description={t(
            "screens.checking-account.product-information-step.section2.description"
          )}
        />

        <div className={"pt-3"}>
          <form onSubmit={onSubmit}>
            <CheckboxField
              label={t(
                "screens.checking-account.product-information-step.form.accept-terms.label"
              )}
              {...register("acceptTerms")}
              error={errors.acceptTerms}
            />
            <CheckboxField
              label={t(
                "screens.checking-account.product-information-step.form.mayor-age.label"
              )}
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