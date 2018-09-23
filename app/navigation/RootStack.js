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

const RootStack = createStackNavigator({
  Home: HomeScreen,
  EventDetail: EventDetailScreen,
  HashInfo: HashInfoScreen,
  Checkout: CheckoutScreen,
  BookSuccess: BookSuccessScreen,
});

export default RootStack;
