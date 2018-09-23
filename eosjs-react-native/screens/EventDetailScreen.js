import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser, Icon, LinearGradient } from "expo";

import { MonoText } from "../components/StyledText";

import Layout from "../constants/Layout";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(247, 247, 247)"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    height: 300
  },
  welcomeImage: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "black",
    width: Layout.window.width,
    height: 300,
    resizeMode: "contain"
  },
  eventInfoContainer: {
    zIndex: 2,
    marginTop: 160,
    width: Layout.window.width - 32,
    height: 248,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,

    shadowColor: "rgba(137, 157, 179, 0.25)",
    shadowOffset: {
      width: 0,
      height: 24
    },
    shadowOpacity: 1,
    shadowRadius: 16
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 204
  },
  bottomContainer: {
    paddingTop: 24,
    backgroundColor: 'white',
    flex: 1,
    minHeight: Layout.window.height - 510,
  },
  tabContainer: {
    marginBottom: 24,
    paddingLeft: 50,
    paddingRight: 50,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ticketModal: {
    backgroundColor: "rgba(2, 21, 40, 0.54)",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0
  },
  modalContent: {
    height: 342,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white"
  }
});

export default class EventDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    const {
      navigation: { getParam }
    } = this.props;
    this.state = { showTicket: false };
  }

  componentWillReceiveProps() {
    const { navigation } = this.props;
    let showTicket = false;
    // FIXME:
    if (navigation.getParam("showTicket") === undefined) {
      showTicket = true;
    } else {
      showTicket = getParam("showTicket");
    }
    this.setState(() => ({
      showTicket
    }));
  }

  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Icon.Ionicons
              name={"ios-arrow-back"}
              size={26}
              style={{ position: "absolute", left: 25.5, top: 0 }}
              color={"white"}
            />
            {/* TODO: replace background image */}
            <Image
              source={require("../assets/images/event_details_header.png")}
              style={styles.welcomeImage}
            />
            <Icon.Ionicons
              name={"ios-star"}
              size={26}
              style={{ position: "absolute", top: 0, right: 62.5 }}
              color={"white"}
            />
            <Icon.Ionicons
              name={"md-share"}
              size={26}
              style={{ position: "absolute", right: 25.5, top: 0 }}
              color={"white"}
            />
            <View style={styles.eventInfoContainer}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  textAlign: "center",
                  lineHeight: 32,
                  width: 176,
                  height: 74,
                  color: "rgba(8, 33, 59, 0.87)"
                }}
              >
                EOS Hackathon London
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  marginBottom: 32,
                  fontSize: 14,
                  lineHeight: 16,
                  color: "rgba(2, 21, 40, 0.54)"
                }}
              >
                Sep 23 - Sep 24
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("HashInfo")}
                style={{
                  shadowColor: "rgba(137, 157, 179, 0.25)",
                  shadowOffset: {
                    width: 0,
                    height: 24
                  },
                  shadowOpacity: 1,
                  shadowRadius: 16
                }}
              >
                <LinearGradient
                  style={{
                    width: 280,
                    height: 48,
                    borderRadius: 24,
                    paddingLeft: 24,
                    paddingRight: 24,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                  colors={["#ffbb87", "#ff6f83"]}
                  start={[1, 1]}
                  end={[0, 0]}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 20,
                      color: "rgba(253, 253, 253, 1)"
                    }}
                  >
                    Get Tickets
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 20,
                      color: "rgba(253, 253, 253, 1)"
                    }}
                  >
                    $10
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.locationContainer}>
            <View style={{ flex: 3, paddingLeft: 32, paddingRight: 20, marginBottom: 16 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "rgba(8, 33, 59, 0.87)",
                  marginBottom: 2,
                  marginRight: 20
                }}
              >
                London Science Museum
              </Text>
              <Text style={{ fontSize: 14, color: "rgba(2, 21, 40, 0.54)" }}>
                Exhibition Rd, Kensington, London SW7 2DD
              </Text>
            </View>
            <Image
              source={require("../assets/images/map.png")}
              style={{ flex: 2, height: 204 }}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.tabContainer}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "rgba(2, 21, 40, 0.34)"
                  }}
                >
                  Detail
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "rgba(2, 21, 40, 0.34)"
                  }}
                >
                  Date & Time
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "rgba(2, 21, 40, 0.34)"
                  }}
                >
                  Location
                </Text>
              </View>
            </View>
            <View style={{ paddingLeft: 36, paddingRight: 36 }}>
              <Text style={{ fontSize: 14, lineHeight: 18, color: "rgba(8, 33, 59, 0.87)" }}>
                The Hackathon Challenge will be released on the day of the event
                to ensure a level playing field for all participating! In the
                mean time, start getting familiar with documentation on the
                EOSIO Developer Portal and get involved with the community
                through our EOSIO social channels and Telegram groups.
              </Text>
            </View>
          </View>
        </ScrollView>
        {this.state.showTicket && <View class={styles.ticketModal}/>}
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}
