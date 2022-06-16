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
        position: 'relative'
    },
    headerMenuIcon: {
        color: '#fff',
        alignSelf: 'flex-start',
        marginLeft: '8%',
    },
    headerText: {
        color: '#FFFFFF',
        opacity: 1,
        fontFamily: fontFamily.Alte_DIN,
        fontSize: 20,
        marginLeft: '8%',
    },
    headerSearchIcon: {
        // color: '#FFFFFF',
        opacity: 1,
        alignSelf: 'flex-start',
        
        marginLeft: '45%',
    },
    headerFilterIcon: {
        color: '#FFFFFF',
        opacity: 1,
        alignSelf: 'flex-end',
        marginRight: '8%',
    },
});

export default headerStyles;