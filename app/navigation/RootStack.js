import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import HashInfoScreen from "../screens/HashInfoScreen";
import CheckoutScreen from "../screens/Checkout";
import BookSuccessScreen from "../screens/BookSuccessScreen";
import SelectionScreen from "../screens/SelectionScreen";
import OrganizerHomeScreen from "../screens/OrganizerHomeScreen";
import OrganizerScanScreen from "../screens/OrganizerScanScreen";
import OrganizerVerifiedScreen from "../screens/OrganizerVerifiedScreen";

const RootStack = createStackNavigator({
  Home: SelectionScreen,
  UserHome: HomeScreen,
  HashInfo: HashInfoScreen,
  Checkout: CheckoutScreen,
  BookSuccess: BookSuccessScreen,
  OrganizerHome: OrganizerHomeScreen,
  OrganizerScan: OrganizerScanScreen,
  OrganizerVerified: OrganizerVerifiedScreen
});

export default RootStack;
