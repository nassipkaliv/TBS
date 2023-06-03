import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Font from "../constants/Font";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export interface ProfileScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

export const ProfileScreen = ({
  navigation: { navigate },
}: ProfileScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,

                {
                  marginTop: 15,
                  marginBottom: 5,
                  fontFamily: Font["montserrat-bold"],
                },
              ]}
            >
              Nassipkali Yernur
            </Title>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            color="#777777"
            size={20}
          />
          <Text
            style={{
              color: "#777777",
              marginLeft: 20,
              fontFamily: Font["montserrat-regular"],
            }}
          >
            Uralsk, Kazakhstan
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color="#777777" size={20} />
          <Text
            style={{
              color: "#777777",
              marginLeft: 20,
              fontFamily: Font["montserrat-regular"],
            }}
          >
            +7-747-046-78-97
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color="#777777" size={20} />
          <Text
            style={{
              color: "#777777",
              marginLeft: 20,
              fontFamily: Font["montserrat-regular"],
            }}
          >
            nassipkaliv@gmail.com
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigate("Login")}>
        <Text
          style={{
            textAlign: "center",
            fontFamily: Font["montserrat-regular"],
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 24,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
