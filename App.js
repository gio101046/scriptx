import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "galio-framework"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.loginText}>Your email</Text>
      <Input placeholder="e.g. elon@tesla.com" />
      <Text style={styles.loginText}>Your password</Text>
      <Input placeholder="Your password here" password={true} viewPass/>
      <Button round style={styles.signInButton}>Sign in</Button>
      <View style={styles.linkTextContainer}>
        <Text style={styles.createAccountText}>Create Account</Text>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  signInButton: {
    width: "60%",
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
