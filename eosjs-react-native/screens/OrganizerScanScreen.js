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
import {WebBrowser, Icon, LinearGradient} from "expo";

import {MonoText} from "../components/StyledText";

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
  fullScreen: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  },
  welcomeImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default class OrganizerScanScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={()=>this.props.navigation.navigate("OrganizerVerified")}>
          <Image
            source={require("../assets/images/scan.png")}
            style={styles.welcomeImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
