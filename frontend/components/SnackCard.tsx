import * as React from "react";

import { getColor } from "../styles/colors";
import { layout, text } from "../styles/styles";

import { ColorCard, Text, ViewProps } from "./ThemedComponents";

type SnackCardComponents = {
  center: React.ReactElement;
  subtitle: string;
  color: string;
  width: number;
  onPress?: () => void;
};

export function SnackCard({
  center,
  subtitle,
  color,
  width,
  style,
  onPress,
}: SnackCardComponents & ViewProps) {
  return (
    <ColorCard
      onPress={onPress}
      style={[
        layout.column,
        layout.centered,
        layout.cardWithShadow,
        { width, height: width * 1.33, borderColor: "transparent" },
        style,
      ]}
      color={color}
    >
      {center}
      <Text
        style={[
          text.h2,
          text.center,
          { color: getColor(color, 1), marginTop: 10 },
        ]}
      >
        {subtitle}
      </Text>
    </ColorCard>
  );
}
