import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import HashInfoScreen from "../screens/HashInfoScreen";
import CheckoutScreen from "../screens/Checkout";
import BookSuccessScreen from "../screens/BookSuccessScreen";
import SelectionScreen from "../screens/SelectionScreen";
import OrganizerHomeScreen from "../screens/OrganizerHomeScreen";
import OrganizerScanScreen from "../screens/OrganizerScanScreen";
import OrganizerVerifiedScreen from "../screens/OrganizerVerifiedScreen";

const RootStack = createStackNavigator({
<<<<<<< HEAD
  Home: HomeScreen,
  EventDetail: EventDetailScreen,
=======
  Home: SelectionScreen,
  UserHome: HomeScreen,
>>>>>>> 353714e3f027e605240d782105c6178422376c1e
  HashInfo: HashInfoScreen,
  Checkout: CheckoutScreen,
  BookSuccess: BookSuccessScreen,
  OrganizerHome: OrganizerHomeScreen,
  OrganizerScan: OrganizerScanScreen,
  OrganizerVerified: OrganizerVerifiedScreen
});

export default RootStack;
