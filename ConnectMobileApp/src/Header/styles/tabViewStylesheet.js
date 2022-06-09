/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: headerStyleSheet.js
** UsedFor: Header StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Header Stylesheet
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
import fontFamily from '../../utility/Font-Declarations';

const tabViewStyles = StyleSheet.create({
    /*
    **
    *
    ** Tab View CSS
    *
    ** 
    */

    tabViewContainer: {
        backgroundColor: '#F7FCFF',
        height: '57%',
        width: '100%',
        elevation: 0,
    },
    tabText: {
        alignSelf: 'flex-start',
        backgroundColor: '#F7FCFF',
        color: '#0070FC',
        textTransform: 'uppercase',
        fontFamily: fontFamily.Alte_DIN,
        opacity: 1,
        letterSpacing: 0.16,
        fontSize: 16,
        left: -30,
        top: 15
    },
    tabNoOfChat: {
        backgroundColor: '#D8E9FF',
        color: '#0070FC',
        width: 21,
        height: 18,
        fontSize: 10,
        fontFamily: fontFamily.Poppins,
        opacity: 1,
        borderRadius: 15 / 2,
        bottom: 2,
        padding: 2,
        textAlign: 'center',
        alignSelf: 'flex-end'
    }
});

export default tabViewStyles;