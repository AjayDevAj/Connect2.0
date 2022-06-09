/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: AssignedStylesheet.js
** UsedFor: Assign Chat StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Assign Chat Stylesheet
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

const assignChatStyles = StyleSheet.create({
    assignChatText: {
        // color: '#657180',
        opacity: 1,
        letterSpacing: 0.16,
        fontFamily: fontFamily.Alte_DIN,
        textTransform: 'uppercase'
    },
    
});

export default assignChatStyles;