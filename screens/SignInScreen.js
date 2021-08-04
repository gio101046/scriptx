import React from "react";
import { Dimensions } from 'react-native';
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import { Button, Input } from "galio-framework"
import Text from "../components/Text" 
import { StatusBar } from "expo-status-bar"; // TODO: remove this for prod
import { getStatusBarHeight } from 'react-native-status-bar-height';

import backgroundImage from "../assets/login-page-background.jpg";
import Theme from "../Theme";

MODAL_HEIGHT = 375

class SignInScreen extends React.Component {

    EMAIL_LABEL_PLACEHOLDER = "e.g. elon@tesla.com";
    PASSWORD_LABEL_PLACEHOLDER = "Your password here";

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                <StatusBar style="auto" />
                <View style={styles.screen}>
                    <View style={styles.statusBar}></View>
                    <View style={{height: ((Dimensions.get('window').height - MODAL_HEIGHT - getStatusBarHeight()) / 2)}}></View>
                    <View style={styles.modal}>
                        {/* <Image style={{width: 125, height: 110}} source={logo} /> */}
                        <Text style={styles.emailLabel}>Your email</Text>
                        <Input placeholder={this.EMAIL_LABEL_PLACEHOLDER} />
                        <Text style={{...styles.passwordLabel}}>Your password</Text>
                        <Input placeholder={this.PASSWORD_LABEL_PLACEHOLDER} password={true} viewPass/>
                        <Button round style={styles.signInButton} color="#FE546F" onPress={() => this.props.navigation.navigate('homescreen')}>
                            <Text style={styles.signInButtonText}>Sign In</Text>
                        </Button>
                        <View style={styles.linkTextContainer}>
                          <Text style={styles.createAccountText}>Create Account</Text>
                          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

console.log();

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  statusBar: {
    backgroundColor: Theme.COLORS.WHITE,
    height: getStatusBarHeight(),
    width: "100%",
    ...Theme.SHADOW
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    height: MODAL_HEIGHT,
    width: "85%",
    padding: 15,
    ...Theme.SHADOW,
    backgroundColor: Theme.COLORS.WHITE,
    borderRadius: 10
  },
  signInButton: {
    width: "100%",
    margin: 20
  },
  signInButtonText: {
    color: Theme.COLORS.WHITE,
  },
  signInButton: {
    width: "100%",
    margin: 20
  },
  emailLabel: {
    textAlign: "left",
    alignSelf: "stretch",
    marginBottom: 5
  },
  passwordLabel: {
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
    color: "#3E3164"
  },
  forgotPasswordText: {
    marginLeft: 20,
    color: "#3E3164"
  }
});

export default SignInScreen;