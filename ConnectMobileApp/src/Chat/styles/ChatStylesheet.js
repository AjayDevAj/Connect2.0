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

const chatStyles = StyleSheet.create({
    chatMainContainer: {
        backgroundColor: '#F7FCFF',
        width: '100%', 
        height: '100%',
    },
    chatListMainContainer: {
        backgroundColor: '#FFFFFF', 
        width: '100%', 
        height: '70%',
        overflow: 'scroll',
        position: 'absolute',
        top: 50,
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