import React from 'react';
import { FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import Text from '../components/Text'
import { Block, NavBar, Input, Button } from 'galio-framework'
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Theme from '../Theme'


class SubscriptionScreen extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        let rowWidth = Dimensions.get('window').width;
        let buttonWidth = rowWidth * 0.9;
        let service = this.props.route.params.service;

        return (
            <Block center flex={1} style={{backgroundColor: Theme.COLORS.WHITE}}>
                <NavBar title="Add Subscription" titleStyle={[Theme.FONT_SIZES.Large, Theme.CUSTOM_FONTS_STYLES.MavenProMedium]}></NavBar>
                <Image source={service.icon} style={{width: 80, height: 80, marginBottom: 20, marginTop: 10}} />
                <Block center style={{marginBottom: 20}}>
                    <TextInput placeholder="$0.00" maxLength="7" keyboardType="numeric" style={{textAlign: "center", ...Theme.FONT_SIZES.ExtraLarge}} />
                </Block>
                <Block row style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: Theme.COLORS.GRAY, paddingTop: 12, paddingBottom: 12}}>
                    <Block flex={1} style={{marginLeft: 22}}>
                        <Text style={{textAlign: "left", ...Theme.FONT_SIZES.Medium, ...Theme.CUSTOM_FONTS_STYLES.MavenProMedium}}>Name</Text>
                    </Block>
                    <Block flex={1} style={{marginRight: 22}}>
                        <Text style={{textAlign: "right", ...Theme.FONT_SIZES.Medium}}>{service.name}</Text>
                    </Block>
                </Block>
                <Block row style={{borderBottomWidth: 1, borderColor: Theme.COLORS.GRAY, paddingTop: 12, paddingBottom: 12}}>
                    <Block flex={1} style={{marginLeft: 22}}>
                        <Text style={{textAlign: "left", ...Theme.FONT_SIZES.Medium, ...Theme.CUSTOM_FONTS_STYLES.MavenProMedium}}>Description</Text>
                    </Block>
                    <Block flex={1} style={{marginRight: 22}}>
                        {/* <Text style={{textAlign: "right", ...Theme.FONT_SIZES.Large}}>{service.name}</Text> */}
                    </Block>
                </Block>
                <Block row style={{borderBottomWidth: 1, borderColor: Theme.COLORS.GRAY, paddingTop: 12, paddingBottom: 12}}>
                    <Block flex={1} style={{marginLeft: 22}}>
                        <Text style={{textAlign: "left", ...Theme.FONT_SIZES.Medium, ...Theme.CUSTOM_FONTS_STYLES.MavenProMedium}}>First Bill</Text>
                    </Block>
                    <Block flex={1} style={{marginRight: 22}}>
                        {/* <Text style={{textAlign: "right", ...Theme.FONT_SIZES.Large}}>{service.name}</Text> */}
                    </Block>
                </Block>
                <Block row style={{borderBottomWidth: 1, borderColor: Theme.COLORS.GRAY, paddingTop: 12, paddingBottom: 12}}>
                    <Block flex={1} style={{marginLeft: 22}}>
                        <Text style={{textAlign: "left", ...Theme.FONT_SIZES.Medium, ...Theme.CUSTOM_FONTS_STYLES.MavenProMedium}}>Cycle</Text>
                    </Block>
                    <Block flex={1} style={{marginRight: 22}}>
                        {/* <Text style={{textAlign: "right", ...Theme.FONT_SIZES.Large}}>{service.name}</Text> */}
                    </Block>
                </Block>
                <Block flex={1}></Block>
                <Block center style={{backgroundColor: Theme.COLORS.WHITE, paddingTop: 10}}>
                    <Button round color="#FE546F" style={{width: buttonWidth}} onPress={() => this.props.navigation.navigate("homescreen")}>
                        <Text style={{color: Theme.COLORS.WHITE}}>Add subscription</Text>
                    </Button>
                </Block>
                <Block height={getStatusBarHeight()} style={{backgroundColor: Theme.COLORS.WHITE}}>{/* TODO: Fix height wrongly calculated */}</Block>
            </Block>
        );
    }
}

export default SubscriptionScreen;