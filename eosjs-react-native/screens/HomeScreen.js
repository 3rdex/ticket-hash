import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser, Icon, LinearGradient } from "expo";

import { MonoText } from "../components/StyledText";

import Layout from "../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(247, 247, 247)"
  },
  filterContainer: {
    position: 'relative',
    padding: 20
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.filterContianer}>
          <Image
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 200
            }}
            source={require("../assets/images/homeHeader.png")}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 24, color: "white", lineHeight: 32 }}>
                London
              </Text>
              <Icon.Ionicons name={"md-arrow-dropdown"} size={16} />
            </View>
            <View>
              <Icon.Ionicons />
              <Text style={{ fontSize: 14, color: "white", lineHeight: 32 }}>
                My Tickets
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    );
  }
}
