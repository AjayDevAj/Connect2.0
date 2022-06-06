import { StyleSheet } from 'react-native';
import fontFamily from '../../utility/Font-Declarations'

const onBoardingStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7FCFF'
    },
    skipNextRow: {
        flexDirection: 'row'
    },
    image: {
        left: 70,
        width: 243,
    },
    title: {
        fontSize: 22,
        // fontFamily: 'alte-din-1451-mittelschrift.gepraegt',
        top: 30,
        color: 'rgba(14, 0, 113, 1)',
        textAlign: 'center',
        letterSpacing: 0.22,
        opacity: 0.8,
        fontFamily:fontFamily.Alte_DIN
    },
    description: {
        fontSize: 12,
        fontFamily: fontFamily.Poppins,
        color: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
        letterSpacing: 0.12,
        opacity: 0.5,
        top: 40,
        left: 60,
        width: 260,
        
    },
});

export default onBoardingStyles;