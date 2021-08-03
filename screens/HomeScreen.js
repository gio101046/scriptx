import React from 'react';
import { View } from "react-native";
import { Text, NavBar } from "galio-framework"

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignContent:"center", justifyContent: "center", alignSelf: "center"}}>
            <Text>HomeScreen Hello!</Text>
            </View>
        );
    }
}

export default HomeScreen;