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
        // position: 'absolute',
        // marginTop: '12%',
        // alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: 'flex-start',
        
    },
    searchBarView__clicked: {
        flex: 1,
        flexDirection: "row",
        width: "95%",
        borderRadius: 15,
        alignItems: "center",
        // justifyContent: "space-evenly",
        // marginTop: '8%',
        position: 'absolute',
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
        color: '#5F6368',
        height: '100%',
        paddingLeft: 45,
    },

    searchListMainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        flex: 1,
        zIndex: 1, 
        height: '100%', 
        width: '90%',
        backgroundColor: '#FFF',
        marginTop: '22.2%',
        margin: 12,
        position: 'absolute',
        borderColor: '#C3C7D988',
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        opacity: 1,
        shadowColor: '#00000029',
        shadowRadius: 3,
        // backgroundColor: '#FFF'
    },
    searchItemListContainer: {
        borderBottomRadius: 15,
        width: '95%',
        height: '100%',
        padding: 10, 
    },
    searchResearchClearContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchItemResearchText: {
        textAlign: 'left',
        color: '#5F6368',
        fontFamily: fontFamily.Poppins,
        fontSize: 12,
        opacity: 1,
        letterSpacing: -0.28,
        textTransform: 'uppercase'
    },
    searchItemClearAllText: {
        textAlign: 'right', 
        color: '#488EEE',
        fontFamily: fontFamily.Poppins,
        fontSize: 12,
        opacity: 1,
        letterSpacing: -0.24
    },
    searchItemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    searchItemText: {
        fontSize: 14,
        letterSpacing: -0.28,
        color: '#657180',
        opacity: 1,
        textAlign: 'left',
        fontFamily: fontFamily.Poppins,
        opacity: 1,
    },
    searchItemCrossBtn: {
        color: '#657180',
        opacity: 1,
        textAlign: 'right',
        fontSize: 14,
    }
});

export default searchStyles;