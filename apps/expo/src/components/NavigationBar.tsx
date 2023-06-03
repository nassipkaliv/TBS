import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import QrScreen from "../screens/QrScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import Font from "../constants/Font";
// import AuthScreen from '../screens/AuthScreen';

const homeName = "Home";
const qrName = "QR";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NavigationBar() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: {
            padding: 10,
            height: 70,
            fontFamily: Font["poppins-bold"],
          },
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === qrName) {
              iconName = focused ? "qr-code" : "md-qr-code-outline";
            } else if (rn === profileName) {
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
            }

            // Icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={qrName} component={QrScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationBar;
