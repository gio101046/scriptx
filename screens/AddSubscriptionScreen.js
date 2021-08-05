import React from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import Text from '../components/Text'
import { Block, NavBar, Input } from 'galio-framework'
import { Dimensions } from 'react-native';
import Theme from '../Theme'

class AddSubscriptionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            services: [
                {
                    name: "Apple Music",
                    color: "#000000",
                    icon: require("../assets/icons/apple.png")
                },
                {
                    name: "Dropbox",
                    color: "#1587EA",
                    icon: require("../assets/icons/dropbox.png")
                },
                {
                    name: "Evernote",
                    color: "#8DC63F",
                    icon: require("../assets/icons/evernote.png")
                },
                {
                    name: "Amex",
                    color: "#27A6D1",
                    icon: require("../assets/icons/amex.png"),
                },
                {
                    name: "Netflix",
                    color: "#D42F2F",
                    icon: require("../assets/icons/netflix.png"),
                },
                {
                    name: "iCloud",
                    color: "#2196F3",
                    icon: require("../assets/icons/icloud.png")
                },
                {
                    name: "Spotify",
                    color: "#00D960",
                    icon: require("../assets/icons/spotify.png")
                },
                {
                    name: "Slack",
                    color: "#01BCD4",
                    icon: require("../assets/icons/slack.png")
                },
                {
                    name: "Sketch",
                    color: "#FFCA28",
                    icon: require("../assets/icons/sketch.png")
                },
                {
                    name: "Google Play",
                    color: "#4CAF51",
                    icon: require("../assets/icons/google-play.png")
                },
                {
                    name: "One Drive",
                    color: "#017DAA",
                    icon: require("../assets/icons/onedrive.png")
                },
                {
                    name: "Verizon",
                    color: "#F22538",
                    icon: require("../assets/icons/verizon.png")
                },
                {
                    name: "Crunchyroll",
                    color: "#FFC108",
                    icon: require("../assets/icons/crunchyroll.png")
                }
            ]
        }
    }

    getGroupedServices() {
        let groupedServices = [];

        let currentGroupCount = 0;
        let currentGroup = [];
        let filter = this.state.filter;
        this.state.services.forEach((service) => {
            if (service.name.toUpperCase().includes(filter.toUpperCase())) {
                if (currentGroupCount == 3) {
                    groupedServices.push(currentGroup);
                    currentGroup = [service];
                    currentGroupCount = 1;
                }
                else {
                    currentGroup.push(service);
                    currentGroupCount++;
                }
            }
        });

        if (currentGroup.length > 0) {
            groupedServices.push(currentGroup);
        }

        return groupedServices;
    }

    applyFilter(filter) {
        this.setState({filter: filter});
    }

    renderService(services) {
        let rowWidth = Dimensions.get('window').width;
        let boxWidthAndHeight = rowWidth * 0.3;
        let boxSpacing = rowWidth * 0.1 * 0.1;

        return (
            <Block row style={{backgroundColor: Theme.COLORS.WHITE, alignSelf: "center"}}>
                {services.map((service, i) => { return (
                    <TouchableOpacity key={i}>
                        <Block height={boxWidthAndHeight} width={boxWidthAndHeight} style={{alignItems: "center", margin: boxSpacing, justifyContent: "center", borderRadius: 5, borderColor: service.color, borderWidth: 1}}>
                            <Image source={service.icon} style={{width: 40, height: 40, marginBottom: 15}} />
                            <Text style={{color: service.color}}>{service.name}</Text>
                        </Block>
                    </TouchableOpacity>
                )})}
            </Block>    
        );
    }

    render() {
        return (
            <Block flex={1}>
                <NavBar title="Services" titleStyle={[Theme.FONT_SIZES.Large, Theme.CUSTOM_FONTS_STYLES.MavenProMedium]}></NavBar>
                <Block style={{backgroundColor: Theme.COLORS.WHITE, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}} > 
                    <Input placeholder="Search services..." right icon="search" family="fontawesome" iconSize={20} iconColor="gray" bgColor={Theme.COLORS.LIGHT_GRAY} onChangeText={text => this.applyFilter(text)}/>
                </Block>
                <FlatList data={this.getGroupedServices()} renderItem={(s) => this.renderService(s.item)} keyExtractor={(s, i) => i.toString()} style={{backgroundColor: Theme.COLORS.WHITE}}/>
            </Block>
        );
    }
}

export default AddSubscriptionScreen;