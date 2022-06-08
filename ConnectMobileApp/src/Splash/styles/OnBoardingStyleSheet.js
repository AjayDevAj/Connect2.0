/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: OnBoardingStyleSheet.js
** UsedFor: OnBoarding StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   OnBoarding Stylesheet
** ==========================================================
*
**
*/


/*
**
*
** Common react packages import
*
** 
*/

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
        top: 30,
        color: '#0E0071',
        textAlign: 'center',
        letterSpacing: 0.22,
        opacity: 0.8,
        fontFamily:fontFamily.Alte_DIN
    },
    description: {
        fontSize: 12,
        fontFamily: fontFamily.Poppins,
        color: '#000000',
        textAlign: 'center',
        letterSpacing: 0.12,
        opacity: 0.5,
        top: 40,
        // left: 60,
        width: 260,
        
    },
});

export default onBoardingStyles;