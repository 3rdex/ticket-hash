import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient'

import Layout from "../constants/Layout";
import {passportMock} from '../services/EOSService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(247, 247, 247)"
  },
  formContainer: {
    width: Layout.window.width - 32,
    height: 248,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 64,
    paddingBottom: 58,
    paddingLeft: 52,
    paddingRight: 52,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 30,
    shadowColor: "rgba(137, 157, 179, 0.25)",
    shadowOffset: {
      width: 0,
      height: 24
    },
    shadowOpacity: 1,
    shadowRadius: 16
  },
  input: {
    width: 240,
    height: 54,
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20,
    lineHeight: 24,
    color: "rgba(8, 33, 59, 0.87)",
    textAlign: "center",
    borderBottomColor: "rgba(2, 21, 40, 0.12)"
  },
  passportInput: {
    marginTop: 20
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
  actionCancel: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionNext: {
    width: 240,
    height: 48,
    backgroundColor: "transparent",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',
  }
});

export default class HashInfoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passport: '',
    };
  }

  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            marginLeft: 25,
            marginTop: 80,
            width: 32,
            height: 32,
            borderRadius: 16,
            backgroundColor: "rgba(2, 21,40,0.04)",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "rgb(252, 119, 111)"
            }}
          >
            1
          </Text>
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
          Hash your info
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
          A hash cryption will be generated from the info locally. No info will
          be uploaded to the server or saved by seller.
        </Text>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Name" onFocus={() => this.setState({ userName: 'TicketHash' })}
                     value={this.state.userName}
          />
          <TextInput
            style={[styles.input, styles.passportInput]}
            onFocus={() => this.setState({ passport: passportMock })}
            placeholder="Passport"
            value={this.state.passport}
          />
        </View>
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.actionCancel} onPress={() => navigate('Home')}>
            <Text style={{ color: 'rgba(2, 21,40, 0.54)', fontSize: 16 }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Checkout')}
            style={styles.actionNext}>
            <LinearGradient
              style={{
                height: "100%",
                shadowColor: "rgba(137, 157, 179, 0.25)",
                shadowOffset: {
                  width: 0,
                  height: 24
                },
                shadowOpacity: 1,
                shadowRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={["#ffbb87", "#ff6f83"]}
              start={{x:1, y:1}}
              end={{x:0, y:0}}
            >
              <Text style={{ fontSize: 16, color: 'white' }}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
