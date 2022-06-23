import * as React from "react";
import { View } from "react-native";

import { useCrediScore } from "../state/microLoans/hooks";
import { layout, text } from "../styles/styles";

import { Text } from "./ThemedComponents";

export function CreditScore() {
  const credit = useCrediScore() + 400;

  return (
    <View style={[layout.column, { width: "100%", marginBottom: 20 }]}>
      <Text style={[text.h1, text.center, { fontSize: 50, lineHeight: 60 }]}>
        {credit.toFixed(0)}
      </Text>
      <Text style={[text.h2, text.center]}>My Credit Score</Text>
    </View>
  );
}
