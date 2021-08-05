import React from "react";
import { Text as ReactText } from "galio-framework"

import Theme from "../Theme";

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isRegular: true // TODO: check if font loaded before appliying style
        }
        this.fontLoadTimer = null;
    }

    checkForCustomFontLoad () {
        if (Theme.isCustomFontsLoaded()) {
            this.setState({ isLoaded: true });
            clearTimeout(this.fontLoadTimer);
            this.fontLoadTimer = null;
        }
    }

    componentDidMount() {
        if (!Theme.isCustomFontsLoaded()) {
            this.fontLoadTimer = setTimeout(this.checkForCustomFontLoad.bind(this), 25);
        } else {
            this.setState({isLoaded: true});
        }
    }

    render() {
        let fontFamily = this.state.isLoaded ? Theme.CUSTOM_FONTS_STYLES.MavenProRegular : Theme.FONT_STYLES.Arial
        return (
            <ReactText style={{...fontFamily, ...Theme.FONT_SIZES.Medium, ...this.props.style}} onPress={this.props.onPress}>
                {this.props.children}
            </ReactText>
        );
    }
} 

export default Text;