import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Button
} from "react-native";

import Layout from "../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 100
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
  bigButton: {
    width: 200,
    height: 50,
  }
});

export default class SelectionScreen extends React.Component {
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
            <Button title="User Demo" onPress={() => this.props.navigation.navigate("UserHome")}/>
            <Button title="Organizer Demo" onPress={() => this.props.navigation.navigate("OrganizerHome")}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
