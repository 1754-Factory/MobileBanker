import BigNumber from "bignumber.js";
import * as React from "react";
import { Text, View } from "react-native";
import Web3 from "web3";

import Check from "../../../assets/image/loans/timer.svg";
import ScreenContainer from "../../components/ScreenContainer";
import { ButtonConfirm } from "../../components/ThemedComponents";
import { LoanDetails } from "../../constants/MicroLoans";
import { useMicroLoanForm, useUpdateLoan } from "../../state/microLoans/hooks";
import { getColor } from "../../styles/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH, text } from "../../styles/styles";
import { MicroLoanScreenProps } from "../../types";
import { getMicroLoanFactory } from "../../utils/getContract";

export default function ConfirmScreen({
  navigation,
}: MicroLoanScreenProps<"ConfirmScreen">) {
  const updateLoan = useUpdateLoan();
  const form = useMicroLoanForm();
  const [txnMined, setTxnMined] = React.useState(false);
  const [loanFulfilled, setLoanFulfilled] = React.useState(false);
  const [loanNotAutoFilled, setLoanNotAutoFilled] = React.useState(false);

  const requestLoan = React.useCallback(async () => {
    const web3 = new Web3(
      new Web3.providers.HttpProvider("https://forno.celo.org")
    );

    const loanContract = getMicroLoanFactory(web3);
    const txnHash = await loanContract.methods.requestLoan(
      form.purpose ?? 1,
      "100000000000",
      form.estimatedTimeToRepay
    );
  }, []);

  const loan: LoanDetails = {
    id: "1",
    deadline: Date.now() / 1000 + 30 * 24 * 60 * 60,
    totalBorrowed: new BigNumber("10e+18").toFixed(0),
    amountPaid: "0",
    monthlyRate: new BigNumber("1e+9").toFixed(0),
  };

  return (
    <ScreenContainer
      title={
        <View>
          <Text
            style={[
              text.h1,
              text.center,
              { marginTop: DEVICE_HEIGHT * 0.1, fontWeight: "bold" },
            ]}
          >
            You have borrowed $10
          </Text>
          <Text style={[text.h2, text.center, { fontWeight: "normal" }]}>
            You have 30 days to repay this loan
          </Text>
        </View>
      }
    >
      <Check
        width={DEVICE_WIDTH * 0.8}
        height={DEVICE_HEIGHT * 0.4}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <ButtonConfirm
        width={DEVICE_WIDTH * 0.05}
        style={{
          marginTop: DEVICE_HEIGHT * 0.1,
          paddingVertical: 20,
          backgroundColor: getColor("disabled", 0.8),
        }}
        onPress={() => {
          updateLoan(loan);
          navigation.push("MicroLoanRoot");
        }}
      >
        <Text style={[text.h2, { color: "white", textTransform: "uppercase" }]}>
          Go Home
        </Text>
      </ButtonConfirm>
    </ScreenContainer>
  );
}
