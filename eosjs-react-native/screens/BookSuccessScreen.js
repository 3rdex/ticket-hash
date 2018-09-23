import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(247, 247, 247)",
    justifyContent: "center",
    alignItems: "center",
    padding: 48
  },
  backAction: {
    position: "absolute",
    left: 0,
    bottom: 30,
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

export default class HashSuccessScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{ height: 160, width: 160 }}
          source={require("../assets/images/confirmation.png")}
        />
        <Text
          style={{
            marginTop: 16,
            fontSize: 24,
            lineHeight: 24,
            color: "rgba(8, 33, 59, 0.87)"
          }}
        >
          Thank You
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 14,
            lineHeight: 20,
            color: "rgba(2, 21, 40, 0.54)"
          }}
        >
          A hash cryption will be generated from the info locally. No info will
          be uploaded to the server or saved by seller.
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigate({ routeName: "Home", params: { showTicket: true } })
          }
          style={{
            marginTop: 36
          }}
        >
          <LinearGradient
            style={{
              height: 48,
              width: 280,
              shadowColor: "rgba(137, 157, 179, 0.25)",
              shadowOffset: {
                width: 0,
                height: 24
              },
              shadowOpacity: 1,
              shadowRadius: 16,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center"
            }}
            colors={["#ffbb87", "#ff6f83"]}
            start={[1, 1]}
            end={[0, 0]}
          >
            <Icon.Ionicons />
            <Text
              style={{
                fontSize: 16,
                lineHeight: 16,
                color: "rgb(253, 253, 253)"
              }}
            >
              See Ticket
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 280,
            height: 48,
            borderWidth: 2,
            borderRadius: 30,
            borderColor: "rgb(255, 187, 135)",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: "rgba(239, 109, 101, 0.6)"
            }}
          >
            Email the ticket
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Home")}
          style={styles.backAction}
        >
          <Text
            style={{
              fontSize: 16,
              color: "rgba(2, 21, 40, 0.54)"
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
