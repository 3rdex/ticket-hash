import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import HashInfoScreen from "../screens/HashInfoScreen";
import CheckoutScreen from "../screens/Checkout";
import BookSuccessScreen from "../screens/BookSuccessScreen";

const RootStack = createStackNavigator({
  Home: HomeScreen,
  HashInfo: HashInfoScreen,
  Checkout: CheckoutScreen,
  BookSuccess: BookSuccessScreen,
});

export default RootStack;
