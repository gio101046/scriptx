import React from "react";
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theme from "./Theme";

const Stack = createNativeStackNavigator();

export default function App() {
  Theme.loadCustomFonts(); // load custom font
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" component={SignInScreen} />
        <Stack.Screen name="homescreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}