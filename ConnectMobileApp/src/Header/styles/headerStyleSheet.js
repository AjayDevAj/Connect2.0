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

    headerIconContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        width: 25,
        height: 25,
        borderRadius: 25/2,
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        elevation: 6,
        // shadowColor: '#00000029',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderColor: '#FFFFFF',
        opacity: 0.9,
        marginLeft: 15,
    },
});

export default headerStyles;