import { StyleSheet } from 'react-native';
import fontFamily from '../../utility/Font-Declarations'

const skipButtonStyles = StyleSheet.create({
    text: {
        color: '#000',
        textAlign: 'left',
        left: -145,
        top: -80,
        opacity: 0.9,
        letterSpacing: 0.14,
        fontFamily: fontFamily.Poppins,
        fontSize: 14
    },
    icon: {
        color: '#000',
        top: -102,
        left: -118,
    },
});

export default skipButtonStyles;