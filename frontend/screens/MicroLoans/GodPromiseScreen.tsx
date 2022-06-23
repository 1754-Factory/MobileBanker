import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

import GodPromise from "../../../assets/image/loans/god.svg";
import ScreenContainer from "../../components/ScreenContainer";
import { ButtonConfirm } from "../../components/ThemedComponents";
import { getColor } from "../../styles/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH, layout, text } from "../../styles/styles";
import {
  MicroLoanScreenProps,
} from "../../types";

export default function GodPromiseScreen({
  navigation,
}: MicroLoanScreenProps<"GodPromiseScreen">) {
  const [input, setInput] = React.useState<string>();
  const valid = input && input.toLowerCase() === "i promise";
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
            Honest Promise
          </Text>
          <Text
            style={[
              text.h2,
              text.center,
              {
                fontWeight: "normal",
                paddingHorizontal: DEVICE_WIDTH * 0.15,
                marginTop: 20,
              },
            ]}
          >
            Type in "I Promise"
          </Text>
        </View>
      }
    >
      <TextInput
        value={input}
        onChangeText={(t: string) => setInput(t)}
        placeholder="Type here"
        style={[
          text.h1,
          text.center,
          {
            paddingVertical: 5,
            marginTop: 20,
            width: DEVICE_WIDTH * 0.75,
            marginLeft: "auto",
            marginRight: "auto",
            borderBottomColor: getColor("black", 0.5),
            borderBottomWidth: 1,
          },
        ]}
      />
      <GodPromise
        width={DEVICE_WIDTH * 0.8}
        height={DEVICE_HEIGHT * 0.33}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: DEVICE_HEIGHT * 0.075,
        }}
      />
      <ButtonConfirm
        width={DEVICE_WIDTH * 0.05}
        style={[
          layout.cardWithShadow,
          {
            backgroundColor: getColor(valid ? "green" : "disabled", 1),
            marginTop: DEVICE_HEIGHT * 0.075,
            paddingVertical: 15,
          },
        ]}
        disabled={!valid}
        onPress={() => {
          nav.navigate("ConfirmScreen");
        }}
      >
        <Text style={[text.h2, { color: "white", textTransform: "uppercase" }]}>
          {valid ? "Continue" : `Type "I Promise"`}
        </Text>
      </ButtonConfirm>
    </ScreenContainer>
  );
}
