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
    position: 'absolute',
    left: 0, 
    top: 0,
    backgroundColor: "black",
    width: Layout.window.width,
    height: 300,
    resizeMode: "contain"
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

export default class OrganizerHomeScreen extends React.Component {
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
              <Text
                style={{
                  marginTop: 14,
                  marginBottom: 0,
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
                  fontSize: 14,
                  lineHeight: 32,
                  color: "rgba(8, 33, 59, 0.87)",
                  fontWeight: '700'
                }}
              >
                00:22:56
              </Text>
              <Text
                style={{
                  marginBottom: 121,
                  fontSize: 24,
                  textAlign: "center",
                  lineHeight: 32,
                  color: "rgba(8, 33, 59, 0.87)",
                  fontWeight: '700'
                }}
              >
                EOS Hackathon {'\n'} London
              </Text>
              <TouchableOpacity
                style={{
                  shadowColor: "rgba(137, 157, 179, 0.25)",
                  shadowOffset: {
                    width: 0,
                    height: 24
                  },
                  shadowOpacity: 1,
                  shadowRadius: 16
                }}
                onPress={()=>this.props.navigation.navigate("OrganizerScan")}
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
                  start={[1, 1]}
                  end={[1, 0]}
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
