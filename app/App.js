import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import AppNavigator from './navigation/AppNavigator';
import eosjs2 from 'eosjs2';
const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // useraaaaaaaa
const rpc = new eosjs2.Rpc.JsonRpc('http://127.0.0.1:8000');
const signatureProvider = new eosjs2.SignatureProvider([defaultPrivateKey]);
const api = new eosjs2.Api({ rpc, signatureProvider});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  async componentDidMount() {
    const result = await api.transact({
      actions: [{
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: 'useraaaaaaaa',
          permission: 'active',
        }],
        data: {
          from: 'useraaaaaaaa',
          to: 'useraaaaaaab',
          quantity: '0.0001 SYS',
          memo: '',
        },
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    console.log(result);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
          <AppNavigator/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
