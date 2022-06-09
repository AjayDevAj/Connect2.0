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

const HeaderNotification = () => {
    return (
        <View style={ notificationStyles.notificationMainContainer }>
            <Icon name="people" size={20} style={ notificationStyles.notificationPeopleIcon } />
            <Text style={ notificationStyles.notificationText }>12 Open chats with team</Text>
            <Icon name="chevron-right" size={18} style={ notificationStyles.notificationRightIcon } />
        </View>
    );
}

export default HeaderNotification;
