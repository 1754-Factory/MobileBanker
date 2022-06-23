import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, View } from "react-native";

import ScreenContainer from "../../components/ScreenContainer";
import { ButtonConfirm, Card, Slider } from "../../components/ThemedComponents";
import { useEnterField } from "../../state/microLoans/hooks";
import { getColor } from "../../styles/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH, layout, text } from "../../styles/styles";
import { MicroLoanScreenProps } from "../../types";

export default function RepaymentInfoScreen({
  navigation,
}: MicroLoanScreenProps<"LoanRepaymentScreen">) {
  const setFormField = useEnterField();
  const [time, setTime] = React.useState(0);
  const [payments, setPayments] = React.useState(0);
  const nav = useNavigation();

  return (
    <ScreenContainer
      title={
        <View>
          <Text
            style={[
              text.h1,
              text.center,
              { marginTop: 20, fontWeight: "bold" },
            ]}
          >
            Repayment
          </Text>
          <Text
            style={[
              text.h2,
              text.center,
              { fontWeight: "normal", paddingHorizontal: DEVICE_WIDTH * 0.15 },
            ]}
          >
            When{" "}
            <Text
              style={[
                text.h2,
                text.center,
                { fontWeight: "normal", textDecorationLine: "underline" },
              ]}
            >
              do you think
            </Text>{" "}
            you will be able to repay?
          </Text>
        </View>
      }
    >
      <Card style={{ paddingVertical: 20, marginBottom: 20, marginTop: 20 }}>
        <View
          style={[
            layout.row,
            layout.spaceBetween,
            { marginBottom: 15, paddingHorizontal: 10 },
          ]}
        >
          <Text style={[text.h1, { fontWeight: "500", opacity: 0.8 }]}>
            Time
          </Text>
          <View style={layout.row}>
            <Text
              style={[
                text.h1,
                {
                  fontSize: text.h1.fontSize * 1.3,
                  lineHeight: text.h1.lineHeight * 1.3,
                  opacity: 0.75,
                },
              ]}
            >
              {time}
            </Text>
            <Text>{` days`}</Text>
          </View>
        </View>
        <Slider
          tintColor={getColor("blue", 1)}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(val) => setTime(Math.floor(val))}
          style={{ marginBottom: 10 }}
        />
      </Card>
      <Card>
        <View
          style={[layout.row, layout.spaceBetween, { paddingHorizontal: 10 }]}
        >
          <Text style={[text.h1, { fontWeight: "500", opacity: 0.8 }]}>
            Payments
          </Text>
          <View style={layout.row}>
            <Text
              style={[
                text.h1,
                {
                  fontSize: text.h1.fontSize * 1.3,
                  lineHeight: text.h1.lineHeight * 1.3,
                  opacity: 0.75,
                },
              ]}
            >
              {payments}
            </Text>
            <Text>{` times`}</Text>
          </View>
        </View>
        <Slider
          tintColor={getColor("blue", 1)}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(val) => setPayments(Math.floor(val))}
          style={{ marginBottom: 10 }}
        />
      </Card>
      <ButtonConfirm
        width={DEVICE_WIDTH * 0.05}
        style={[
          layout.cardWithShadow,
          {
            backgroundColor: getColor("blue", 1),
            marginTop: DEVICE_HEIGHT * 0.075,
            paddingVertical: 15,
          },
        ]}
        onPress={() => {
          setFormField("time", time);
          setFormField("payments", payments);
          nav.navigate("HonestyPromiseScreen");
        }}
      >
        <Text style={[text.h2, { color: "white" }]}>CONTINUE</Text>
      </ButtonConfirm>
    </ScreenContainer>
  );
}
