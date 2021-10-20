import React from "react";

import { Card, Steps, Wizard } from "../../../components";
import { WizardProgress } from "../components";
import { ProductInformationStep, FormStep, FeedbackStep } from "../steps";

import "./CheckingAccount.scss";

export const CheckingAccount = () => {
  return (
    <div className={"CheckingAccount"}>
      <Wizard>
        <Card>
          <WizardProgress />
          <Steps>
            <ProductInformationStep />
            <FormStep />
            <FeedbackStep />
          </Steps>
        </Card>
      </Wizard>
    </div>
  );
};
