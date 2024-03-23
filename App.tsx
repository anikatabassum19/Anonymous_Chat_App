import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import LinearGradient from "react-native-linear-gradient";

import Splash from "./src/screens/splash";
import Signup from "./src/screens/signup";
import Login from "./src/screens/login";
import Home from "./src/screens/home";

const navigateStack = createNativeStackNavigator();

export default function App() {
  // Fonts
  const [fontsloaded] = useFonts({
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratSemi: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBlack: require("./assets/fonts/Montserrat-Black.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratThin: require("./assets/fonts/Montserrat-Thin.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
  });
  return (
    <NavigationContainer>
      <navigateStack.Navigator initialRouteName="Splash">
        <navigateStack.Screen
          name="Splash"
          options={{ headerShown: false }}
          component={Splash}
        />
        <navigateStack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <navigateStack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={Signup}
        />

        <navigateStack.Screen name="Home" component={Home} />
      </navigateStack.Navigator>
    </NavigationContainer>
  );
}
