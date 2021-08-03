import React from 'react';
import { FlatList, Image } from 'react-native';
import { NavBar, Block, Button, Text } from "galio-framework"
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import theme from "../theme";

// TODO: temporary solution
import dropboxIcon from "../assets/icons/dropbox.png"

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subscriptions: [
                {
                    id: 0,
                    serviceName: "Apple Music",
                    serviceIcon: require("../assets/icons/apple.png"),
                    color: "#000",
                    amount: 11.99
                },
                {   
                    id: 1,
                    serviceName: "Dropbox",
                    serviceIcon: require("../assets/icons/dropbox.png"),
                    color: "#1587EA",
                    amount: 12.99
                },
                {   
                    id: 2,
                    serviceName: "Evernote",
                    serviceIcon: require("../assets/icons/evernote.png"),
                    color: "#8DC63F",
                    amount: 11.99
                },
                {   
                    id: 3,
                    serviceName: "Amex",
                    serviceIcon: require("../assets/icons/amex.png"),
                    color: "#27A6D1",
                    amount: 11.99
                },
                {   
                    id: 4,
                    serviceName: "Netflix",
                    serviceIcon: require("../assets/icons/netflix.png"),
                    color: "#D42F2F",
                    amount: 11.99
                },
                {   
                    id: 5,
                    serviceName: "iCloud",
                    serviceIcon: require("../assets/icons/icloud.png"),
                    color: "#2196F3",
                    amount: 11.99
                }
            ]
        };
    }

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

    renderSubscription(subscription) {
        return (
            <Block height={75} row style={{backgroundColor: theme.COLORS.WHITE, marginRight: 12, marginLeft: 12, marginTop: 8, marginBottom: 8, borderRadius: 10, borderColor: subscription.color, borderWidth: 1, alignItems: "center"}}>
                <Image source={subscription.serviceIcon} style={{width: 40, height: 40, margin: 10}} />
                <Text style={{color: subscription.color, marginLeft: 10}}>{subscription.serviceName}</Text>
                <Text style={{color: subscription.color, marginRight: 15, marginLeft: "auto"}}>${subscription.amount}</Text>
            </Block>
        );
    }

    render() {
        return (
            <Block flex={1}>
                <Block height={getStatusBarHeight()} style={{backgroundColor: theme.COLORS.WHITE}}></Block>
                <NavBar right={this.renderNavBarRight()} left={this.renderNavBarLeft()} title="Subscriptions" titleStyle={{fontWeight: "bold"}} style={{marginBottom: 10, ...theme.SHADOW}}/>
                <FlatList data={this.state.subscriptions} renderItem={(s) => this.renderSubscription(s.item)} style={{backgroundColor: theme.COLORS.WHITE}} /> 
            </Block>
        );
    }
}

export default HomeScreen;