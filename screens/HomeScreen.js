import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { NavBar, Block, Button } from "galio-framework"
import { StatusBar } from "expo-status-bar"; 
import Text from "../components/Text"
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Theme from "../Theme";
import AuthContext from "../contexts/Auth";

class HomeScreen extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);

        this.state = {
            subscriptions: [
                {
                    id: "0",
                    serviceName: "Apple Music",
                    serviceIcon: require("../assets/icons/apple.png"),
                    color: "#000000",
                    amount: 11.99
                },
                {   
                    id: "1",
                    serviceName: "Dropbox",
                    serviceIcon: require("../assets/icons/dropbox.png"),
                    color: "#1587EA",
                    amount: 12.99
                },
                {   
                    id: "2",
                    serviceName: "Evernote",
                    serviceIcon: require("../assets/icons/evernote.png"),
                    color: "#8DC63F",
                    amount: 11.99
                },
                {   
                    id: "3",
                    serviceName: "Amex",
                    serviceIcon: require("../assets/icons/amex.png"),
                    color: "#27A6D1",
                    amount: 11.99
                },
                {   
                    id: "4",
                    serviceName: "Netflix",
                    serviceIcon: require("../assets/icons/netflix.png"),
                    color: "#D42F2F",
                    amount: 11.99
                },
                {   
                    id: " 5",
                    serviceName: "iCloud",
                    serviceIcon: require("../assets/icons/icloud.png"),
                    color: "#2196F3",
                    amount: 11.99
                }
            ]
        };
    }

    getSubscriptionsChargeSum() {
        return this.state.subscriptions.map((subscription) => {
            return subscription.amount;
        }).reduce((a, b) => a + b);
    }

    renderNavBarRight() {
        return (
            <Button color="transparent" style={{width: 50, borderColor: 'transparent', marginRight: -25}} onPress={() => this.props.navigation.navigate('add-subscription')}>
                <FontAwesomeIcon icon={faPlusSquare} size={20} color="gray" />
            </Button>
        );
    }

    renderNavBarLeft() {
        return (
            <Button color="transparent" style={{width: 50, borderColor: 'transparent', marginLeft: -10}} onPress={() => this.context.signOut()}>
                <FontAwesomeIcon icon={faCog} size={20} color="gray" />
            </Button>
        );
    }

    renderSubscription(subscription) {
        return (
            <TouchableOpacity onPress={() => console.log(subscription)}>
                <Block height={60} row style={{backgroundColor: subscription.color+"09", marginRight: 15, marginLeft: 15, marginTop: 8, marginBottom: 8, borderRadius: 5, borderColor: subscription.color, borderWidth: 1, alignItems: "center"}}>
                    <Image source={subscription.serviceIcon} style={{width: 30, height: 30, margin: 10}} />
                    <Text style={{color: subscription.color, marginLeft: 10}}>{subscription.serviceName}</Text>
                    <Text style={{color: subscription.color, marginRight: 15, marginLeft: "auto"}}>${subscription.amount}</Text>
                </Block>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Block flex={1}>
                <StatusBar style="auto" />
                <Block height={getStatusBarHeight()} style={{backgroundColor: Theme.COLORS.WHITE}}></Block>
                <NavBar right={this.renderNavBarRight()} left={this.renderNavBarLeft()} title="Subscriptions" titleStyle={{...Theme.CUSTOM_FONTS_STYLES.MavenProMedium, ...Theme.FONT_SIZES.Large}} />
                <FlatList data={this.state.subscriptions} renderItem={(s) => this.renderSubscription(s.item)} style={{backgroundColor: Theme.COLORS.WHITE}} /> 
                <Footer totalAmount={this.getSubscriptionsChargeSum()}/>
                <Block height={getStatusBarHeight()} style={{backgroundColor: Theme.COLORS.WHITE}}>{/* TODO: Fix height wrongly calculated */}</Block>
            </Block>
        );
    }
}

function Footer({totalAmount}) {
    return (
        <Block row height={60} style={{backgroundColor: Theme.COLORS.WHITE, borderTopWidth: 1, borderColor: Theme.COLORS.GRAY}}>
            <Block flex={1} style={{marginLeft: 25, justifyContent: "center"}}>
                <Text p style={{color: Theme.COLORS.BLACK}}>Expenses</Text>
                <Text style={{color: "gray", ...Theme.FONT_SIZES.Small}}>BY MONTH</Text>
            </Block>
            <Block flex={1} style={{marginRight: 25, marginLeft: "auto", justifyContent: "center"}}>
                <Text p style={{color: "gray", textAlign: "right"}}>${totalAmount}</Text>
            </Block>
        </Block>
    );
}

export default HomeScreen;