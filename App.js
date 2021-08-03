import React from "react";
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" component={SignInScreen} />
        <Stack.Screen name="homescreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}