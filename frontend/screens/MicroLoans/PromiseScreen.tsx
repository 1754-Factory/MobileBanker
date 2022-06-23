import * as React from "react";
import { Text, View } from "react-native";

import PinkyPromise from "../../../assets/image/loans/pinky-promise.svg";
import ScreenContainer from "../../components/ScreenContainer";
import { ButtonConfirm } from "../../components/ThemedComponents";
import { useEnterField } from "../../state/microLoans/hooks";
import { getColor } from "../../styles/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH, layout, text } from "../../styles/styles";
import {
  MicroLoanScreenProps,
} from "../../types";

export default function PromiseScreen({
  navigation,
}: MicroLoanScreenProps<"HonestyPromiseScreen">) {
  const setFormField = useEnterField();

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
            Honest Promise
          </Text>
          <Text
            style={[
              text.h2,
              text.center,
              { fontWeight: "normal", paddingHorizontal: DEVICE_WIDTH * 0.15 },
            ]}
          >
            Do you pinky promise to try your best to repay the loan?
          </Text>
        </View>
      }
    >
      <PinkyPromise
        width={DEVICE_WIDTH * 0.8}
        height={DEVICE_HEIGHT * 0.33}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <View
        style={[
          layout.row,
          layout.spaceBetween,
          {
            marginTop: DEVICE_HEIGHT * 0.1,
            width: DEVICE_WIDTH * 0.9,
            marginLeft: "auto",
            marginRight: "auto",
          },
        ]}
      >
        <ButtonConfirm
          width={20}
          style={[
            layout.cardWithShadow,
            {
              width: "45%",
              backgroundColor: getColor("black", 1),
              paddingVertical: 15,
            },
          ]}
          onPress={() => {
            navigation.replace("MicroLoanRoot");
          }}
        >
          <Text
            style={[text.h2, { color: "white", textTransform: "uppercase" }]}
          >
            Not Now
          </Text>
        </ButtonConfirm>
        <ButtonConfirm
          width={20}
          onPress={() => {
            navigation.push("GodPromiseScreen");
          }}
          style={[
            layout.cardWithShadow,
            {
              width: "45%",

              backgroundColor: getColor("blue", 1),
              paddingVertical: 15,
            },
          ]}
        >
          <Text
            style={[text.h2, { color: "white", textTransform: "uppercase" }]}
          >
            I Promise
          </Text>
        </ButtonConfirm>
      </View>
    </ScreenContainer>
  );
}
