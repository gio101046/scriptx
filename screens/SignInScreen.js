import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";
import { Text, Button, Input} from "galio-framework"
import { StatusBar } from "expo-status-bar"; // TODO: remove this for prod
import { getStatusBarHeight } from 'react-native-status-bar-height';
import backgroundImage from "../assets/login-page-background.jpg";
import logo_icon from "../assets/logo-icon.png";
import theme from "../theme";

class SignInScreen extends React.Component {

    EMAIL_LABEL_PLACEHOLDER = "e.g. elon@tesla.com";
    PASSWORD_LABEL_PLACEHOLDER = "Your password here";

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
                <StatusBar style="auto" />
                <View style={styles.screen}>
                    <View style={styles.statusBar}></View>
                    <View style={{height: "20%"}}></View>
                    <View style={styles.modal}>
                        <Image style={{width: 125, height: 110}} source={logo_icon} />
                        <Text style={styles.emailLabel}>Your email</Text>
                        <Input placeholder={this.EMAIL_LABEL_PLACEHOLDER} />
                        <Text style={styles.passwordLabel}>Your password</Text>
                        <Input placeholder={this.PASSWORD_LABEL_PLACEHOLDER} password={true} viewPass/>
                        <Button round style={styles.signInButton} color="#00435D" onPress={() => this.props.navigation.navigate('homescreen')}>Sign in</Button>
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
    backgroundColor: "#fff",
    height: getStatusBarHeight(),
    width: "100%",
    ...theme.SHADOW
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    height: 484,
    width: "85%",
    padding: 15,
    ...theme.SHADOW,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  signInButton: {
    width: "100%",
    margin: 20
  },
  emailLabel: {
    textAlign: "left",
    alignSelf: "stretch",
    marginTop: 25,
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
    color: "blue"
  },
  forgotPasswordText: {
    marginLeft: 20,
    color: "blue"
  }
});

export default SignInScreen;