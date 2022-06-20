/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: MaterialMenuStylesheet.js
** UsedFor: MaterialMenu StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   MaterialMenu Stylesheet
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

const materialStyles = StyleSheet.create({
    materialContainer: { 
        position: 'absolute',
    },
    materialMenuMainContainer: {
        height: '17%', 
        width: '30%',
        position: 'absolute',
        backgroundColor: '#FFF',
        marginLeft: '52%',
        marginTop: '22%'
        // flexDirection: 'row',
        // justifyContent: 'flex-end'
    },
    materialMenuItemText: {
        color: '#000000',
        textAlign: 'left',
        fontSize: 14,
        fontFamily: fontFamily.Poppins,
        opacity: 1,
        // justifyContent: 'flex-end'
    }
});

export default materialStyles;