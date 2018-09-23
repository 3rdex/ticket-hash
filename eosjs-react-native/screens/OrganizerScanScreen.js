import React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {EOSService} from '../services/EOSService';
import {sha256} from 'js-sha256';

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

  async check() {
    const {
      navigation: {navigate}
    } = this.props;
    const name = 'TicketHash';
    const passport = 'G12345678';
    const hash = sha256(name + ',' + passport);
    await EOSService.checkTicket({hash, seller: 'ticketsella1'});
    navigate("OrganizerVerified");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => this.check()}>
          <Image
            source={require("../assets/images/scan.png")}
            style={styles.welcomeImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
