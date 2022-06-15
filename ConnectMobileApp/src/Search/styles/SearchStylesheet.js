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
        alignItems: "flex-start",
        flexDirection: "row",
    },
    searchBarView__unclicked: {
        flex: 1,
        flexDirection: "row",
        width: "95%",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBarView__clicked: {
        flex: 1,
        flexDirection: "row",
        width: "95%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        // marginTop: '8%',
        position: 'absolute'
    },
    searchTextinputView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#FFF',
        borderRadius: 9,
        borderColor: '#C3C7D988',
        marginLeft: '4%',
        marginTop: '10%',
    },
    searchTextinput: {
        fontSize: 18,
        fontFamily: fontFamily.Alte_DIN,
        width: "90%",
        // flex: 2,
        // backgroundColor: '#FFF',
        // borderRadius: 9,
        // borderColor: '#C3C7D988',
        color: '#5F6368',
        height: '100%',
        paddingLeft: 45,
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