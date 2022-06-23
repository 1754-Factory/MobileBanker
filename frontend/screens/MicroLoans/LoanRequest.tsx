import * as React from "react";
import { Text, View } from "react-native";

import Egg from "../../../assets/image/loans/food.svg";
import Health from "../../../assets/image/loans/health.svg";
import Other from "../../../assets/image/loans/other.svg";
import Books from "../../../assets/image/loans/school.svg";
import Transport from "../../../assets/image/loans/transport.svg";
import Water from "../../../assets/image/loans/water.svg";
import ScreenContainer from "../../components/ScreenContainer";
import { SnackCard } from "../../components/SnackCard";
import { LoanPurpose } from "../../constants/MicroLoans";
import { useEnterField } from "../../state/microLoans/hooks";
import { DEVICE_WIDTH, layout, text } from "../../styles/styles";
import {
  MicroLoanScreenProps,
} from "../../types";

export default function LoanRequestScreen({
  navigation,
}: MicroLoanScreenProps<"LoanPurposeScreen">) {
  const setFormField = useEnterField();
  const rows = [
    [
      { purpose: LoanPurpose.Food, title: "Food", svg: Egg, color: "gold" },
      {
        purpose: LoanPurpose.Water,
        title: "Water",
        svg: Water,
        color: "baby_blue",
      },
    ],
    [
      {
        purpose: LoanPurpose.Health,
        title: "Health",
        svg: Health,
        color: "purple",
      },
      {
        purpose: LoanPurpose.School,
        title: "School",
        svg: Books,
        color: "salmon",
      },
    ],
    [
      {
        purpose: LoanPurpose.Transport,
        title: "Transport",
        svg: Transport,
        color: "firetruck",
      },
      { purpose: LoanPurpose.Other, title: "Other", svg: Other, color: "grey" },
    ],
  ];

  const RenderItem = ({
    item: [info_1, info_2],
  }: {
    item: {
      purpose: LoanPurpose;
      svg: React.ComponentType;
      title: string;
      color: string;
    }[];
  }) => (
    <View
      style={[
        layout.row,
        { marginBottom: DEVICE_WIDTH * 0.075, justifyContent: "space-around" },
      ]}
    >
      <SnackCard
        center={<info_1.svg height={90} />}
        subtitle={info_1.title}
        color={info_1.color}
        width={DEVICE_WIDTH * 0.35}
        onPress={() => {
          setFormField("purpose", info_1.purpose);
          navigation.push("LoanRepaymentScreen");
        }}
      />
      <SnackCard
        center={<info_2.svg height={90} />}
        subtitle={info_2.title}
        color={info_2.color}
        width={DEVICE_WIDTH * 0.35}
        onPress={() => {
          setFormField("purpose", info_2.purpose);
          navigation.push("LoanRepaymentScreen");
        }}
      />
    </View>
  );

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
            Loan Request
          </Text>
          <Text style={[text.h2, text.center, { fontWeight: "normal" }]}>
            What do you need the money for?
          </Text>
        </View>
      }
    >
      {rows.map((el) => (
        <RenderItem item={el} />
      ))}
    </ScreenContainer>
  );
}
