import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import RootStack from './navigation/RootStack';
import {EOSService} from './services/EOSService';

console.disableYellowBox = true;

export default class Index extends React.Component {
  async componentDidMount() {
    EOSService.init();
  }

  render() {
    return <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
      <RootStack/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
