/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: AllchatStylesheet.js
** UsedFor: AllChat StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   AllChat Stylesheet
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

const chatStyles = StyleSheet.create({
    chatMainContainer: {
        backgroundColor: '#F7FCFF',
        width: '100%', 
        flex:1
    },
    chatListMainContainer: {
        backgroundColor: '#fff', 
        flex:1
    },
    chatSmsButtonContainer: {
        width: 70,  
        height: 70,   
        borderRadius: 70 /2 ,            
        backgroundColor: '#0070FC',                                    
        position: 'absolute',                                          
        bottom: 30,                                                    
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
        shadowColor: '#00000029',
        shadowRadius: 6,
    },
});

export default chatStyles;