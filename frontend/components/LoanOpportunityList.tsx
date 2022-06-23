import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { FlatList, View } from "react-native";

import Percent from "../../assets/image/earn_icon.svg";
import Handgrab from "../../assets/image/loans/handgrab.svg";
import Plant from "../../assets/image/loans/plant.svg";
import Timer from "../../assets/image/loans/timer.svg";
import Warning from "../../assets/image/loans/warning.svg";
import { LoanTypeToSVG, MicroLoanInfo } from "../constants/MicroLoans";
import {
  MicroLoanDetails,
  useCrediScore,
  useCurrentLoan,
  useLoanOpportunities,
} from "../state/microLoans/hooks";
import { getColor } from "../styles/colors";
import { layout, text } from "../styles/styles";

import { GreyCard } from "./GreyCard";
import { ButtonConfirm, Card, ColorCard, Text } from "./ThemedComponents";

const LoanRow = ({
  left,
  middle,
  right,
  underline,
}: {
  left: React.ReactElement;
  right: string;
  middle: string;
  underline?: boolean;
}) => (
  <View style={[layout.row, { paddingVertical: 5 }]}>
    {left}
    <Text
      style={[text.p, { marginLeft: 10, marginRight: 5, fontWeight: "500" }]}
    >
      {middle}
    </Text>
    <Text
      style={[
        text.p,
        {
          fontWeight: "bold",
          textDecorationLine: underline ? "underline" : "none",
        },
      ]}
    >
      {right}
    </Text>
  </View>
);

function LoanOpportunityCard({ loan }: { loan }) {
  const SVG = LoanTypeToSVG[loan.type];
  const nav = useNavigation();
  const TitleLeft = (
    <View style={layout.row}>
      <SVG />
      <Text
        style={[text.h1, { marginLeft: 10, fontWeight: "normal" }]}
      >{`${loan.type} Loan`}</Text>
    </View>
  );

  const TitleRight = (
    <Text style={[text.h1, { marginLeft: 10 }]}>{`R$${loan.amount.toFixed(
      0
    )}`}</Text>
  );
  const credit = useCrediScore() + 400;
  const denied = credit < loan.requiredPoints;
  return (
    <GreyCard titleLeft={TitleLeft} titleRight={TitleRight}>
      <LoanRow
        left={<Timer width={30} height={30} />}
        right={`${loan.duration / (24 * 60 * 60)} days`}
        middle="Repayment due in"
        underline
      />
      <LoanRow
        left={<Percent width={23} height={23} />}
        right={`10%`}
        middle="Monthly interest rate:"
      />

      <ButtonConfirm
        onPress={() => nav.navigate("LoanPurposeScreen")}
        style={[
          layout.row,
          {
            marginTop: 20,
            width: "100%",
            backgroundColor: getColor(denied ? "disabled" : "blue", 1),
            borderRadius: 10,
            paddingVertical: 10,
          },
        ]}
      >
        <Text
          style={[
            text.h3,
            text.center,
            { color: "white", textTransform: "uppercase" },
          ]}
        >
          {denied ? "Not enough pounts" : `Borrow R$${loan.amount.toFixed(0)}`}
        </Text>
      </ButtonConfirm>
    </GreyCard>
  );
}

function LoanCard({ loan }: { loan: MicroLoanDetails }) {
  return (
    <Card style={{ marginTop: 20 }}>
      <View style={[layout.row, layout.spaceBetween]}>
        <View style={layout.row}>
          <Text
            style={[
              text.h1,
              {
                fontSize: text.h1.fontSize * 1.3,
                lineHeight: text.h1.lineHeight * 1.3,
              },
            ]}
          >{`R$${loan.totalBorrowed
            .subtract(loan.amountPaid)
            .toFixed(2)}`}</Text>
          <Text style={text.h2}>{` owed`}</Text>
        </View>

        <Warning width={45} height={40} />
      </View>
      <View
        style={{
          width: "100%",
          height: 2,
          borderRadius: 10,
          backgroundColor: getColor("disabled", 1),
          marginVertical: 10,
        }}
      />
      <LoanRow
        left={<Timer width={30} height={30} />}
        right={`${Math.floor(
          (loan.deadline - Date.now() / 1000) / (24 * 60 * 60)
        )} days`}
        middle="Payment due in"
        underline
      />
      <LoanRow
        left={<Percent width={23} height={23} />}
        right={`10%`}
        middle="Monthly interest rate:"
      />
      <ButtonConfirm
        style={[
          layout.row,
          {
            marginTop: 20,
            width: "100%",
            backgroundColor: getColor("green", 1),
            borderRadius: 10,
            paddingVertical: 10,
          },
        ]}
      >
        <Text
          style={[
            text.h3,
            text.center,
            { color: "white", textTransform: "uppercase" },
          ]}
        >
          Pay back loan
        </Text>
      </ButtonConfirm>
    </Card>
  );
}

const IntroCard = () => {
  const nav = useNavigation();

  return (
    <ColorCard
      color="green"
      onPress={() => nav.navigate("LoanPurposeScreen")}
      style={{ marginVertical: 20 }}
    >
      <View style={[layout.row, layout.spaceBetween]}>
        <Plant width={50} height={50} />
        <View>
          <Text
            style={[
              text.h2,
              { fontSize: text.h2.fontSize * 1.1, color: getColor("green", 1) },
            ]}
          >
            Get a R$10 loan
          </Text>
          <Text
            style={[
              text.h2,
              {
                fontSize: text.h2.fontSize * 1.1,
                color: getColor("green", 1),
                fontWeight: "normal",
              },
            ]}
          >
            No strings attached
          </Text>
        </View>
        <FontAwesome
          name="chevron-right"
          size={20}
          color={getColor("green", 1)}
        />
      </View>
    </ColorCard>
  );
};

const PayoffCard = () => {
  const nav = useNavigation();

  return (
    <ColorCard
      color="grey"
      onPress={() => nav.navigate("Root")}
      style={{ marginVertical: 20 }}
    >
      <View style={[layout.row, layout.spaceBetween]}>
        <Handgrab width={50} height={50} />
        <View>
          <Text
            style={[
              text.h2,
              {
                fontSize: text.h2.fontSize * 1.1,
                color: getColor("grey", 1),
                fontWeight: "normal",
              },
            ]}
          >
            Pay off your loan
          </Text>
          <Text
            style={[
              text.h2,
              {
                fontSize: text.h2.fontSize * 1.1,
                color: getColor("grey", 1),
                textDecorationLine: "underline",
              },
            ]}
          >
            {`& boost your credit`}
          </Text>
        </View>
        <FontAwesome
          name="chevron-right"
          size={20}
          color={getColor("grey", 1)}
        />
      </View>
    </ColorCard>
  );
};

export default function LoanOpportunityList() {
  const loans = useLoanOpportunities();
  const currentLoan = useCurrentLoan();
  const RenderOpportunity = ({ item: loan }: { item: MicroLoanInfo }) => (
    <LoanOpportunityCard loan={loan} />
  );

  return !currentLoan || currentLoan.deadline < Date.now() / 1000 ? (
    <FlatList
      data={loans}
      ListHeaderComponent={IntroCard}
      keyExtractor={(item, i) => `loan-opportunity-${i}`}
      renderItem={RenderOpportunity}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  ) : (
    <>
      <LoanCard loan={currentLoan} />
      <PayoffCard />
    </>
  );
}
