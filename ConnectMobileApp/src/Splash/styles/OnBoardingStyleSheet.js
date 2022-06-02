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
        left: 70,
        width: 243,
    },
    title: {
        fontSize: 22,
        fontFamily: 'alte-din-1451-mittelschrift.gepraegt',
        top: 30,
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
        opacity: 0.5,
        top: 40,
        left: 60,
        width: 260
    },
});

export default onBoardingStyles;