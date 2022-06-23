/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as React from "react";
import { ViewStyle } from "react-native";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

type NestedNavigatorParams<ParamList> = {
  [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] };
}[keyof ParamList];

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  Earn: undefined;
  Swap: undefined;
  Onboard: undefined;
  NotFound: undefined;
  Loading: undefined;
  Migrate: undefined;
};

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Earn: undefined;
  Swap: undefined;
  Manage: undefined;
  MicroLoan: undefined;
  Browser: undefined;
};

export type EarnTabParamList = {
  EarnRoot: undefined;
  EarnDetails: undefined;
};

export type SwapTabParamList = {
  SwapRoot: undefined;
  SwapToken: { token: string };
};

export type MicroLoanParamList = {
  MicroLoanRoot: undefined;
  LoanPurposeScreen: undefined;
  LoanRepaymentScreen: undefined;
  HonestyPromiseScreen: undefined;
  GodPromiseScreen: undefined;
  ConfirmScreen: undefined;
};

export type OnboardParamList = {
  OnboardRoot: undefined;
  RecoverAccount: undefined;
  AccountKey: undefined;
  MnemonicScreen: undefined;
  AppMode: undefined;
  BetaWarning: undefined;
  WalletCreation: {
    nextScreen: keyof OnboardParamList | keyof RootStackParamList;
  };
  Migration: {
    nextScreen?: keyof OnboardParamList | keyof RootStackParamList;
  };
};

export type RootTabScreenProps<
  Screen extends keyof RootTabParamList & EarnTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList & EarnTabParamList>
>;

export type MicroLoanScreenProps<
  Screen extends keyof MicroLoanParamList
> = NativeStackScreenProps<MicroLoanParamList, Screen>;

export type OnboardTabScreenProps<
  Screen extends keyof OnboardParamList
> = NativeStackScreenProps<OnboardParamList, Screen>;

export type SVG_Type = React.ComponentType<{
  height?: number;
  width?: number;
  style?: ViewStyle;
  fill?: string;
}>;
