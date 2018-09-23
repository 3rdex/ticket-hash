import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Layout from "../constants/Layout";
import {sha256} from 'js-sha256';
import {EOSService, passportMock} from '../services/EOSService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(247, 247, 247)"
  },
  methodContainer: {
    marginTop: 24
  },
  methodItem: {
    position: "relative",
    height: 80,
    marginLeft: 16,
    marginRight: 16
  },
  bottomActions: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 48
  },
  actionCacnel: {
    width: 110,
    height: 48,
    backgroundColor: "rgb(253, 253, 253)",
    shadowColor: "rgba(137, 157, 179, 0.25)",
    shadowOffset: {
      width: 0,
      height: 24
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class HashInfoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  async next() {
    const {
      navigation: {navigate}
    } = this.props;
    const name = 'TicketHash';
    const passport = passportMock;
    const hash = sha256(name + ',' + passport);
    await EOSService.releaseTicket({hash, ticket_name: 'EOS London', seller: 'ticketsella1'})
    navigate("BookSuccess");
  }

  render() {
    const {
      navigation: {navigate}
    } = this.props;
    return (
      <View style={styles.container}>
        {/* TODO: add image */}
        <View
          style={{
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 80,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(252, 119, 111)"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "rgba(2, 21, 40, 0.04)"
              }}
            >
              1
            </Text>
          </View>
          <View
            // style={{
            //   width: 25,
            //   height: 0,
            //   borderWidth: 0.8,
            //   borderColor: "red",
            //   borderStyle: "dashed",
            //   borderRadius: 0.1
            // }}
          />
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(2, 21, 40, 0.04)"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "rgb(252, 119, 111)"
              }}
            >
              2
            </Text>
          </View>
        </View>
        <Text
          style={{
            paddingLeft: 30,
            paddingRight: 30,
            fontSize: 24,
            lineHeight: 24,
            color: "rgba(8, 33, 59, 0.87)",
            marginTop: 30
          }}
        >
          Payment method
        </Text>
        <Text
          style={{
            paddingLeft: 28,
            paddingRight: 28,
            marginTop: 20,
            fontSize: 14,
            lineHeight: 20,
            color: "rgba(2, 21, 40, 0.54)"
          }}
        >
          Make payment through 3rd party services, no credit card data will be
          uploaded or saved on this platform.
        </Text>
        <View style={styles.methodContainer}>
          <TouchableOpacity
            onPress={() => this.next()}
            style={styles.methodItem}
          >
            <Image
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                borderRadius: 16,
                width: Layout.window.width - 32,
                height: 80
              }}
              source={require("../assets/images/G0.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.next()}
            style={styles.methodItem}
          >
            <Image
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                borderRadius: 16,
                width: Layout.window.width - 32,
                height: 80
              }}
              source={require("../assets/images/G1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.next()}
            style={styles.methodItem}
          >
            <Image
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                borderRadius: 16,
                width: Layout.window.width - 32,
                height: 80
              }}
              source={require("../assets/images/G2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.next()}
            style={styles.methodItem}
          >
            <Image
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                borderRadius: 16,
                width: Layout.window.width - 32,
                height: 80
              }}
              source={require("../assets/images/G3.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.actionCacnel}>
            <Text style={{color: "rgba(2, 21,40, 0.54)", fontSize: 16}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
