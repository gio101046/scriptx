import * as Font from 'expo-font';

const COLORS = {
    WHITE: "#fff",
    BLACK: "#000",
    LIGHT_GRAY: "#D3D3D3"
}

const SHADOW = {
    shadowOffset: {
        width: 0,
        height: 6
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
}

const FONT_SIZES = {
    Small: {fontSize: 12},
    Medium: {fontSize: 16},
    Large: {fontSize: 20}
}

const FONT_STYLES = {
    Arial: {fontFamily: "Arial"}
}

const CUSTOM_FONTS_STYLES = {
    MavenProMedium: {fontFamily: "MavenPro-Medium"}, 
    MavenProRegular: {fontFamily: "MavenPro-Regular"}
};

const _CUSTOM_FONTS = {
    'MavenPro-Medium': require('./assets/fonts/MavenPro-Medium.ttf'),
    'MavenPro-Regular': require('./assets/fonts/MavenPro-Regular.ttf'),
}

// TODO: move into a class potentially a seperate file
let customFontsLoaded = false

isCustomFontsLoaded = () => {
    return customFontsLoaded
};

setCustomFontsLoaded = () => {
    customFontsLoaded = true
};

loadCustomFonts = async () => {
    await Font.loadAsync(_CUSTOM_FONTS);
    setCustomFontsLoaded()
};

export default {
    COLORS,
    SHADOW,
    FONT_SIZES,
    FONT_STYLES,
    CUSTOM_FONTS_STYLES,
    isCustomFontsLoaded,
    setCustomFontsLoaded, 
    loadCustomFonts
}