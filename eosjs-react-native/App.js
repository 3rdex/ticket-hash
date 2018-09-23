import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import RootStack from './navigation/RootStack';
import {EOSService} from './services/EOSService';

export default class Index extends React.Component {
  componentDidMount() {
    EOSService.getTableRows({seller: 'ticketsella1'})
  }

  render() {
    return <View style={styles.container}>
      {/*{Platform.OS === 'ios' && <StatusBar barStyle="default"/>}*/}
      {/*<RootStack/>*/}
    </View>
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/confirmation.png'),
      //   require('./assets/images/event_1.png'),
      //   require('./assets/images/event_2.png'),
      //   require('./assets/images/event_3.png'),
      //   require('./assets/images/event_details_header.png'),
      //   require('./assets/images/G3.png'),
      //   require('./assets/images/G2.png'),
      //   require('./assets/images/G1.png'),
      //   require('./assets/images/G0.png'),
      //   require('./assets/images/homeHeader.png'),
      //   require('./assets/images/map.png'),
      // ]),
      // Font.loadAsync({
      //   // This is the font that we are using for our tab bar
      //   ...Icon.Ionicons.font,
      //   // We include SpaceMono because we use it in HomeScreen.js. Feel free
      //   // to remove this if you are not using it in your app
      //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      // }),
    ]);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
