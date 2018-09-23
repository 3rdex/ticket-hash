import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Icon } from "expo";

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
            <View style={{
              flex: 1, flexDirection: 'row'
            }}>
              <Text style={{ color: 'white', fontSize: 24, fontWeight: '700', marginRight: 12, }}>London</Text>
              <Icon.Ionicons
                name={"md-arrow-dropdown"}
                size={20}
                color={"white"}
                style={{ marginTop: 8 }}
              />
            </View>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>My Tickets</Text>
          </View>
          <TextInput
            style={{
              height: 42,
              paddingLeft: 20,
              borderRadius: 21,
              backgroundColor: "rgba(255,255,255,0.37)",
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
            }}
            placeholderTextColor={'#fff'}
            placeholder={'Search'}
          />
        </View>
        <View
          style={{
            paddingLeft: 20,
            height: 56,
            backgroundColor: "#fdfdfd",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: 92,
              height: 28,
              borderRadius: 14,
              backgroundColor: "#f8f7fa",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "900",
                fontStyle: "normal",
                letterSpacing: -0.2,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
                color: "rgba(2, 21, 40, 0.54)"
              }}
            >
              Any Date
            </Text>
            <Icon.Ionicons
              name={"ios-arrow-down"}
              color="rgba(2, 21, 40, 0.54)"
            />
          </View>

          <View
            style={{
              width: 92,
              height: 28,
              borderRadius: 14,
              backgroundColor: "#f8f7fa",
              flexDirection: "row",
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "900",
                fontStyle: "normal",
                letterSpacing: -0.2,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
                color: "rgba(2, 21, 40, 0.54)"
              }}
            >
              Any Category
            </Text>
            <Icon.Ionicons
              name={"ios-arrow-down"}
              color="rgba(2, 21, 40, 0.54)"
            />
          </View>

          <View
            style={{
              width: 92,
              height: 28,
              borderRadius: 14,
              backgroundColor: "#f8f7fa",
              flexDirection: "row",
              alignItems: 'center',
              marginRight: 8,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "900",
                fontStyle: "normal",
                letterSpacing: -0.2,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8,
                color: "rgba(2, 21, 40, 0.54)"
              }}
            >
              Any Price
            </Text>
            <Icon.Ionicons
              name={"ios-arrow-down"}
              color="rgba(2, 21, 40, 0.54)"
            />
          </View>
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
