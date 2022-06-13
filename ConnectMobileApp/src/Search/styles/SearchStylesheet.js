/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: NotificationStylesheet.js
** UsedFor: Notification StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Notification Stylesheet
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

const searchStyles = StyleSheet.create({
    searchMainContainer: {
        backgroundColor: '#0E0071',
        height: '15%',
        width: '100%',
        opacity: 1,
        borderBottomRightRadius: 28,
        alignItems: "center",
        flexDirection: "row",
        // position: 'absolute'
        
    },
    searchTextinput: {
        fontSize: 18,
        width: "90%",
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 9,
        borderColor: '#C3C7D988',
        color: '#5F6368',
        height: '100%',
        paddingLeft: 20,
    },
    searchBar__unclicked: {
        // padding: 10,
        flexDirection: "row",
        width: "95%",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        // padding: 10,
        flexDirection: "row",
        width: "95%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: '8%',
    },
    searchItemList: {
        backgroundColor: '#FFF',
        width: '83%',
        flexDirection: "row",
        borderBottomEndRadius: 15,
        zIndex: 2,
        height: '50%'
        
    },
    searchItemText: {
        fontSize: 14,
        letterSpacing: -0.28,
        color: '#657180',
        opacity: 1,
        textAlign: 'left',
        margin: 1,
        paddingLeft: 10
    }
    
});

export default searchStyles;