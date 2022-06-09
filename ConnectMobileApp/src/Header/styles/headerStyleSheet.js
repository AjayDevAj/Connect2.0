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

const headerStyles = StyleSheet.create({
    /*
    **
    *
    ** Top Header CSS
    *
    ** 
    */

    mainContainer: {
        backgroundColor: '#0E0071',
        height: '15%',
        width: '100%',
        opacity: 1,
        borderBottomRightRadius: 28,
        position: 'absolute',
    },
    headerMenuIcon: {
        position: 'absolute',
        left: 19,
        top: 46,
        color: '#fff'
    },
    headerText: {
        position: 'absolute',
        color: '#FFFFFF',
        left: 65,
        top: 46,
        opacity: 1,
        fontFamily: fontFamily.Alte_DIN,
        fontSize: 20,
    },
    headerSearchIcon: {
        color: '#FFFFFF',
        opacity: 1,
        alignSelf: 'flex-end',
        top: 46,
        right: 80
    },
    headerFilterIcon: {
        color: '#FFFFFF',
        opacity: 1,
        alignSelf: 'flex-end',
        top: 18,
        right: 30
    },
});

export default headerStyles;