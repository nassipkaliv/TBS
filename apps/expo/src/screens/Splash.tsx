import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "react-native";

export interface SplashScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
const Splash = ({ navigation }: SplashScreenProps) => {
  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/img/Splash.png")}
        style={{ width: 256, height: 94 }}
      />
      <Text
        style={{
          color: "#2A59FE",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
        }}
      >
        By TBS Solutions
      </Text>
    </View>
  );
};

export default Splash;
