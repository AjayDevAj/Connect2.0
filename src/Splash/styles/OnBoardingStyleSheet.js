import { StyleSheet } from 'react-native';

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
        top: 30,
        left: 70,
        width: 244,
    },
    title: {
        fontSize: 22,
        fontFamily: 'alte-din-1451-mittelschrift.gepraegt',
        top: 60,
        color: '#0E0071',
        textAlign: 'center',
        letterSpacing: 0.22,
        opacity: 0.8
    },
    description: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#000000',
        textAlign: 'center',
        letterSpacing: 0.12,
        opacity: 0.6,
        top: 68,
        left: 50,
        width: 273
        
    },
});

export default onBoardingStyles;