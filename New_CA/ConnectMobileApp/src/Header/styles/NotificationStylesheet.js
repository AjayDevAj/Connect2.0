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

const notificationStyles = StyleSheet.create({
    notificationMainContainer: {
        backgroundColor: '#fff', 
        width: '100%', 
        height: '5%',
        justifyContent: 'flex-start',
        marginVertical: '3%',
    },
    notificationLeftIcon: {
        color: '#657180',
        alignSelf: 'flex-start',
        left: 5,
        padding: 10, 
    },
    notificationText: {
      color: '#5F6368',
      position: 'absolute',
      left: 40,
      padding: 10,
      fontSize: 14,
      fontFamily: fontFamily.Poppins,
      letterSpacing: -0.28,
      opacity: 1,
      textTransform: 'capitalize',

    //   top: 2

    },
    notificationRightIcon: {
        position: 'absolute',
        color: '#000000',
        opacity: 1,
        right: 20,
        padding: 10,
    }
    
});

export default notificationStyles;