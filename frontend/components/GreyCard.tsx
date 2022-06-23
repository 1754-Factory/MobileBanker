import * as React from "react";
import { View } from "react-native";

import { getColor } from "../styles/colors";
import { layout } from "../styles/styles";

import { Card, ViewProps } from "./ThemedComponents";

type GreyCardProps = {
  titleLeft: React.ReactElement;
  titleRight: React.ReactElement;
} & ViewProps;

export function GreyCard({
  titleLeft,
  titleRight,
  children,
  style,
}: GreyCardProps) {
  return (
    <Card
      style={[
        // layout.cardWithShadow,
        { paddingHorizontal: 0, paddingTop: 0 },
        style,
      ]}
    >
      <View
        style={[
          layout.row,
          layout.spaceBetween,
          {
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: getColor("disabled", 0.6),
          },
        ]}
      >
        {titleLeft}
        {titleRight}
      </View>
      <View
        style={[layout.column, { paddingHorizontal: 20, paddingVertical: 10 }]}
        children={children}
      />
    </Card>
  );
}
