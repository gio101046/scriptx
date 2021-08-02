import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text, Button, Input } from "galio-framework"

import backgroundImage from "./assets/login-page-background.jpg";

export default function App() {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
      <StatusBar style="auto" />
      <View style={styles.screen}>
          <View style={styles.statusBar}></View>
          <View style={{height: "20%"}}></View>
          <View style={styles.modal}>
            <Text style={styles.loginText}>Your email</Text>
            <Input placeholder="e.g. elon@tesla.com" />
            <Text style={styles.loginText}>Your password</Text>
            <Input placeholder="Your password here" password={true} viewPass/>
            <Button round style={styles.signInButton} color="#00435D">Sign in</Button>
            <View style={styles.linkTextContainer}>
              <Text style={styles.createAccountText}>Create Account</Text>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </View>
          </View>
          <View style={{height: "30%"}}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  statusBar: {
    backgroundColor: "#fff",
    height: "5%",
    width: "100%",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    height: "45%",
    width: "85%",
    padding: 15,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 10
  },
  signInButton: {
    width: "100%",
    margin: 20
  },
  loginText: {
    textAlign: "left",
    alignSelf: "stretch",
    marginTop: 20,
    marginBottom: 5
  },
  linkTextContainer: {
    flexDirection:'row', 
    flexWrap:'wrap',
    marginTop: 20
  },
  createAccountText: {
    marginRight: 20,
    color: "blue"
  },
  forgotPasswordText: {
    marginLeft: 20,
    color: "blue"
  }
});
