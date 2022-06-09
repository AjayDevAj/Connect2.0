/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Header Notification.js
** UsedFor: Notification Chat in connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Header Notification component
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

import React from 'react';
import { Text, View } from 'react-native';

import notificationStyles from './styles/NotificationStylesheet';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderNotification = ({ left, message, right }) => {
    return (
        <View style={ notificationStyles.notificationMainContainer }>
            <Icon name={left} size={20} style={ notificationStyles.notificationLeftIcon } />
            <Text style={ notificationStyles.notificationText }>{message}</Text>
            <Icon name={right} size={18} style={ notificationStyles.notificationRightIcon } />
        </View>
    );
}

export default HeaderNotification;
