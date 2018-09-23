import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Icon } from "expo";


import Layout from "../constants/Layout";
import EventCard from '../components/EventCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(247, 247, 247)"
  },
  filterContainer: {
    position: 'relative',
    padding: 20,
    height: 200
  },
  scrollContainer: {
    padding: 12,
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Image
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: 200,
              right: 0
            }}
            source={require("../assets/images/homeHeader.png")}
          />
          <View style={{
            flex: 1, flexDirection: 'row', justifyContent: 'space-between', color: 'whit', alignItems: 'center',
          }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '700' }}> London</Text>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>My Tickets</Text>
          </View>
          <View></View>
        </View>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("EventDetail")}>
            <EventCard source={require("../assets/images/event_1.png")} date={'Oct 10, Saturday'}
                       title={'Trade Pass: London Design Fair 2018'} price={'$12 - $25'}
                       location={'3 South Place, London'}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("EventDetail")}>
            <EventCard source={require("../assets/images/event_2.png")} date={'Sep 22, Saturday'}
                       title={'EOS Hackathon London'} price={'$10'} location={'Kensington, London'}/>
          </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}
