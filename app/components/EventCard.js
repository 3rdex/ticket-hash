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
  }
});

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{
          flex: 1,
        }}/>
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>123123</View>
      </View>
    );
  }
}
