import React from "react";
import { View, Text, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex h-screen items-center justify-center">
      <Image
        source={require("../../assets/img/logo.png")}
        style={{ height: 150, width: 250 }}
      />
    </View>
  );
}
