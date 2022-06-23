/* eslint-disable no-nested-ternary */
import { useWalletAddress } from "@node-fi/react-native-sdk";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

import MicroLoanRoot from "../screens/MicroLoans/MicroLoanRoot";

import { Views } from "./views";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Component = () => (
  <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
);

export default function Navigator() {
  const walletAddress = useWalletAddress();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={walletAddress ? Views.Root : Views.CreateWallet}
      >
        <Stack.Screen
          name={Views.Root}
          component={MicroLoanRoot}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Views.CreateWallet}
          component={Component}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
