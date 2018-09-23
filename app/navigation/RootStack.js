import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import HashInfoScreen from "../screens/HashInfoScreen";
import HashSuccessScreen from "../screens/HashSuccessScreen";

const RootStack = createStackNavigator({
  Home: HomeScreen,
  HashInfo: HashInfoScreen,
  HashSuccess: HashSuccessScreen,
});

export default RootStack;
