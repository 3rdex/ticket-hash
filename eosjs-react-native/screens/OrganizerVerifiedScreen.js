import React from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Layout from "../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    resizeMode: "contain",
    width: 183,
    height: 183,
    marginTop: 72
  },
  cancelImage: {
    resizeMode: "contain",
    width: 110,
    height: 110
  },
  eventInfoContainer: {
    zIndex: 2,
    marginTop: 160,
    width: Layout.window.width - 32,
    height: 248,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,

    shadowColor: "rgba(137, 157, 179, 0.25)",
    shadowOffset: {
      width: 0,
      height: 24
    },
    shadowOpacity: 1,
    shadowRadius: 16
  }
});

export default class OrganizerVerifiedScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={require("../assets/images/verified.png")}
              style={styles.welcomeImage}
            />

            <Text
              style={{
                marginTop: 26,
                marginBottom: 125,
                fontSize: 24,
                textAlign: "center",
                lineHeight: 24,
                color: "rgba(8, 33, 59, 0.87)",
                fontWeight: '700'
              }}
            >
              Verified!
            </Text>
            <Text
              style={{
                marginTop: 0,
                marginBottom: 12,
                fontSize: 12,
                lineHeight: 32,
                color: "rgba(2, 21, 40, 0.34)"
              }}
            >
              Count Down
            </Text>
            <Text
              style={{
                marginTop: 0,
                marginBottom: 100,
                fontSize: 16,
                lineHeight: 22,
                color: "rgba(8, 33, 59, 0.87)",
                fontWeight: '700'
              }}
            >
              00:22:56
            </Text>


            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("Home")}
              style={{
                position: "absolute",
                left: 5,
                top: 525,
                width: 48,
                height: 48,
              }}
            >
              <Image
                source={require("../assets/images/cancel.png")}
                style={styles.cancelImage}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                position: "absolute",
                right: -24,
                top: 545,
                shadowColor: "rgba(137, 157, 179, 0.25)",
                shadowOffset: {
                  width: 0,
                  height: 24
                },
                shadowOpacity: 1,
                shadowRadius: 16,

              }}
            >
              <LinearGradient
                style={{
                  width: 280,
                  height: 48,
                  borderRadius: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                colors={["#0a14ff", "#0a14ff"]}
                start={{x:1, y:1}}
                end={{x:1, y:0}}
              >
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 20,
                    color: "#fdfdfd",
                    textAlign: "center",
                    width: 232,
                    fontWeight: "500"
                  }}
                >
                  Scan ID
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
