/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ClosedChatStylesheet.js
** UsedFor: Closed Chat StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Closed Chat Stylesheet
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

const closedChatStyles = StyleSheet.create({
    closedChatText: {
        // color: '#657180',
        opacity: 1,
        letterSpacing: 0.16,
        fontFamily: fontFamily.Alte_DIN,
        textTransform: 'uppercase'
    },
    
});

export default closedChatStyles;