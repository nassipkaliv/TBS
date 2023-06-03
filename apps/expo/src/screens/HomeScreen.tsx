import React from "react";
import { View, Text, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../../assets/img/logo.png")}
        style={{ height: 150, width: 250 }}
      />
    </View>
  );
}
