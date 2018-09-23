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
    position: "relative",
    height: 200,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
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
              left: 0,
              top: 0,
              height: 200,
              right: 0,
              zIndex: 1
            }}
            source={require("../assets/images/homeHeader.png")}
          />
          <View
            style={{
              flex: 1,
              position: "absolute",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center"
            }}
          >
            <View
              style={{
                position: "absolute",
                left: 24,
                top: 100,
                zIndex: 1,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "white",
                  lineHeight: 32,
                  marginRight: 8
                }}
              >
                London
              </Text>
              <Icon.Ionicons
                name={"md-arrow-dropdown"}
                size={16}
                color={"white"}
              />
            </View>
            <View
              style={{
                position: "absolute",
                right: -24,
                top: 100,
                zIndex: 1,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Icon.Ionicons size={16} color={"white"} />
              <Text
                style={{
                  fontSize: 14,
                  color: "white",
                  lineHeight: 32,
                  marginRight: 8
                }}
              >
                My tickets
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 140,
              zIndex: 1,
              width: Layout.window.width - 32,
              height: 42,
              marginLeft: 16,
              marginRight: 16,
              opacity: 0.37,
              borderRadius: 21,
              backgroundColor: "#ffffff"
            }}
          />
        </View>
        <View
          style={{
            paddingTop: 14,
            paddingLeft: 20,
            height: 56,
            backgroundColor: "#fdfdfd",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: 92,
              height: 28,
              borderRadius: 14,
              backgroundColor: "#f8f7fa",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "900",
                fontStyle: "normal",
                letterSpacing: -0.2,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
                color: "rgba(2, 21, 40, 0.54)"
              }}
            >
              Any Date
            </Text>
            <Icon.Ionicons
              name={"ios-arrow-down"}
              color="rgba(2, 21, 40, 0.54)"
            />
          </View>

           <View
            style={{
              width: 92,
              height: 28,
              borderRadius: 14,
              backgroundColor: "#f8f7fa",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "900",
                fontStyle: "normal",
                letterSpacing: -0.2,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
                color: "rgba(2, 21, 40, 0.54)"
              }}
            >
              Any Category
            </Text>
            <Icon.Ionicons
              name={"ios-arrow-down"}
              color="rgba(2, 21, 40, 0.54)"
            />
          </View>

           <View
            style={{
              width: 92,
              height: 28,
              borderRadius: 14,
              backgroundColor: "#f8f7fa",
              flexDirection: "row",
              alignItems: 'center',
              marginRight: 8,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "900",
                fontStyle: "normal",
                letterSpacing: -0.2,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
                color: "rgba(2, 21, 40, 0.54)"
              }}
            >
              Any Price
            </Text>
            <Icon.Ionicons
              name={"ios-arrow-down"}
              color="rgba(2, 21, 40, 0.54)"
            />
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
