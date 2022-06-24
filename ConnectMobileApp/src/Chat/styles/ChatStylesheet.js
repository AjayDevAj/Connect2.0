/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: chatStylesheet.js
** UsedFor: Chat StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Chat Stylesheet
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

const chatStyles = StyleSheet.create({
    chatMainContainer: {
        backgroundColor: '#F7FCFF',
        width: '100%', 
        height: '100%',
    },
    chatListMainContainer: {
        backgroundColor: '#fff', 
        width: '100%',
        flex:1,
    },

    noChatAssignedMainContainer: {
        flexDirection: 'column', 
        justifyContent: 'space-between',
        
    },
    noChatAssignedSvgView: {
        marginTop: '20%',
        alignItems: 'center'
    },
    noChatAssignedTextView: {
        alignItems: 'center',
        marginTop: '7%'
    },
    noChatAssignedText: {
        color: '#000',
        opacity: 1,
        letterSpacing: 0.18,
        fontSize: 18,
        fontFamily: fontFamily.Alte_DIN,
        fontWeight: 'bold',
    },
    noChatAssignedDesc: {
        color: '#000',
        opacity: 0.5,
        letterSpacing: 0.12,
        fontSize: 12,
        fontFamily: fontFamily.Poppins,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '70%',
        marginTop: '2%'
    }
});

export default chatStyles;