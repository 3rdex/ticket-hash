import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 190,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(2, 21, 40, 0.04)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  }
});

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            flex: 1,
            width: 167,
            height: 190
          }}
          source={require("../assets/images/event_1.png")}
        />
        <View style={{ flex: 1, paddingLeft: 12, }}>
          <Text style={{
            marginTop: 18,
            fontSize: 12,
            color: "rgba(2, 21, 40, 0.34)"
          }}>Oct 10, Saturday</Text>
          <Text style={{
            marginTop: 12,
            fontSize: 16,
            fontWeight: "700",
            color: "rgba(8, 33, 59, 0.87)"
          }}>Trade Pass: London Design Fair 2018</Text>
          <Text style={{
            marginTop: 40,
            fontSize: 14,
            fontWeight: "700",
            fontStyle: "normal",
            color: "#5c7afb"
          }}>$12 - $25</Text>
          <Text style={{
            marginTop: 12,
            fontSize: 12,
            color: "rgba(2, 21, 40, 0.34)"
          }}>3 South Place, London</Text>
        </View>
      </View>
    );
  }
}
