/* eslint-disable no-nested-ternary */
import { NavigationContainer } from "@react-navigation/native";
import { Views } from "./views";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useWalletAddress } from "@node-fi/react-native-sdk";
import React from "react";
import MicroLoanRoot from "../screens/MicroLoans/MicroLoanRoot";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
          component={Transactions}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
