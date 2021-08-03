import React from 'react';
import { NavBar, Block, Button, Text } from "galio-framework"
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import theme from "../theme";

class HomeScreen extends React.Component {
    renderNavBarRight() {
        return (
            <Button color="transparent" style={{width: 50, borderColor: 'transparent', marginRight: -25}} onPress={() => console.log("Right button works!")}>
                <FontAwesomeIcon icon={faPlusSquare} size={20} color="gray" />
            </Button>
        );
    }

    renderNavBarLeft() {
        return (
            <Button color="transparent" style={{width: 50, borderColor: 'transparent', marginLeft: -10}} onPress={() => console.log("Left button works!")}>
                <FontAwesomeIcon icon={faCog} size={20} color="gray" />
            </Button>
        );
    }

    render() {
        return (
            <Block flex={1}>
                <Block height={getStatusBarHeight()} style={{backgroundColor: theme.COLORS.WHITE}}></Block>
                <NavBar right={this.renderNavBarRight()} left={this.renderNavBarLeft()} title="Subscriptions" titleStyle={{fontWeight: "bold"}} style={theme.SHADOW}/>
            </Block>
        );
    }
}

export default HomeScreen;