import * as React from "react";

import { CreditScore } from "../../components/CreditScore";
import LoanOpportunityList from "../../components/LoanOpportunityList";
import ScreenContainer from "../../components/ScreenContainer";
import { TabContainer } from "../../components/TabContainer";
import { MicroLoanScreenProps } from "../../types";

export default function MicroLoanRoot({
  navigation,
}: MicroLoanScreenProps<"MicroLoanRoot">) {
  return (
    <ScreenContainer title="">
      <CreditScore />
      <TabContainer
        tabs={[
          {
            name: "Loans",
            component: LoanOpportunityList,
          },
          {
            name: "My Credit",
            component: LoanOpportunityList,
          },
        ]}
      />
      {/* // <LoanOpportunityList /> */}
    </ScreenContainer>
  );
}
