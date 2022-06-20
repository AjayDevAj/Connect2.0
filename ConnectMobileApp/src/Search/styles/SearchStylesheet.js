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
        // backgroundColor: '#0E0071',
        backgroundColor: '#0E0071',
        height: '15%',
        width: '100%',
        opacity: 1,
        borderBottomRightRadius: 28,
        // alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: 'flex-start',
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
        // flex: 1,
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
        width: "100%",
        // flex: 2,
        // backgroundColor: '#FFF',
        // borderRadius: 9,
        // borderColor: '#C3C7D988',
        color: '#5F6368',
        height: '100%',
        paddingLeft: 45,
    },

    searchListMainContainer: {
        alignItems: 'flex-end', 
        flex: 1,
        zIndex: 1, 
        height: '100%', 
        width: '90%',
        backgroundColor: '#FFF',
        marginTop: '22.2%',
        margin: 15,
        position: 'absolute',
        // borderBottomLeftRadius: 15
    },
    searchItemListContainer: {
        borderBottomRadius: 15,
        width: '95%',
        height: '100%',
        // flexDirection: 'column',
        padding: 10,
        zIndex: 1,
        position: 'absolute', 
        flex: 1
    },
    searchResearchClearContainer: {
        flexDirection: 'row',
        zIndex: 1, 
    },
    searchItemResearchText: {
        // alignSelf: 'flex-start', 
        textAlign: 'left',
        color: '#5F6368',
        zIndex: 1, 
    },
    searchItemClearAllText: {
        // alignSelf: 'flex-end',
        textAlign: 'right', 
        color: '#488EEE',
        zIndex: 1, 
    },
    searchItemList: {
        borderBottomRadius: 15,
        width: '85%',
        height: '100%',
        // flexDirection: 'column',
        padding: 10,
        zIndex: 1, 
    },
    searchItemText: {
        fontSize: 14,
        letterSpacing: -0.28,
        color: '#657180',
        opacity: 1,
        textAlign: 'left',
        margin: 1,
        paddingLeft: 10,
        zIndex: 1, 
    }
    
});

export default searchStyles;