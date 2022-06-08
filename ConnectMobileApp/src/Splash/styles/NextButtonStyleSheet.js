/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: NextButtonStyleSheet.js
** UsedFor: Next Button StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Next Button Stylesheet
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

const nextButtonStyles = StyleSheet.create({
    button: {
        position: 'absolute',
        backgroundColor: '#493d8a',
        borderRadius: 100,
        padding: 10,
        width: 50,
        height: 50,
        top: -90,
        left: 120,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default nextButtonStyles;