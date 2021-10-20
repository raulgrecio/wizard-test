import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  getLoadingSelector,
  getSuccessSelector,
} from "../../store/checkingAccount.submit.selectors";
import { WizardNavigation } from "../../components";
import {
  ExclamationIcon,
  InnerContainer,
  CheckCircleIcon,
  Loading,
} from "../../../../components";
import "./FeedbackStep.scss";

interface FeedbackStepProps {
  success?: any;
}

function FeedbackStep(props: FeedbackStepProps) {
  const { t } = useTranslation();
  const loading = useSelector(getLoadingSelector);
  const success = useSelector(getSuccessSelector);

  const content = useMemo(() => {
    if (loading) return <Loading />;

    const result = success ? "ok" : "ko";
    const Icon = success ? CheckCircleIcon : ExclamationIcon;
    return (
      <div className={"FeedbackStep-container-content"}>
        <Icon width={60} className={`success-${result}`} />

        <div className={"FeedbackStep-container-content-message"}>
          <h3>{t(`screens.checking-account.feedback-step.${result}.title`)}</h3>
          <p>{t(`screens.checking-account.feedback-step.${result}.message`)}</p>
        </div>
      </div>
    );
  }, [loading, success, t]);

  const navigation = useMemo(
    () =>
      !loading && (
        <WizardNavigation
          hasCancel={false}
          submitText={t(
            `screens.checking-account.components.wizard-navigation.${
              success ? "access" : "back"
            }`
          )}
        />
      ),
    [loading, success, t]
  );

  return (
    <aside className={"FeedbackStep"}>
      <InnerContainer>
        <div className={"FeedbackStep-container"}>{content}</div>
      </InnerContainer>
      {navigation}
    </aside>
  );
}

export { FeedbackStep };
