import React from "react";
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import AddSubscriptionScreen from "./screens/AddSubscriptionScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theme from "./Theme";
import AuthContext from "./contexts/Auth";

Theme.loadCustomFonts(); // load custom font
const Stack = createNativeStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    }
  }

  signIn = () => {
    this.setState({ isSignedIn: true });
  }

  signOut = () => {
    this.setState({ isSignedIn: false });
  }

  render() {
    return (
      <NavigationContainer>
        <AuthContext.Provider value={{signIn: this.signIn, signOut: this.signOut}}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!this.state.isSignedIn ?
              (
                <>
                  <Stack.Screen name="sign-in" component={SignInScreen} options={{animationTypeForReplace: !this.state.isSignedIn ? 'pop' : 'push'}} />
                </>
              ) :
              (
                <>
                  <Stack.Screen name="homescreen" component={HomeScreen} options={{animationTypeForReplace: !this.state.isSignedIn ? 'pop' : 'push'}} />
                  <Stack.Screen name="add-subscription" component={AddSubscriptionScreen} options={{presentation: 'modal' }}/>
                </>
              )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    );
  }
}

export default App;