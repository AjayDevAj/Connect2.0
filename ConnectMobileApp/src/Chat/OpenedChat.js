/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: OpenedChat.js
** UsedFor: Opened Chat in connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Opened Chat component
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

import openChatStyles from './styles/OpenChatStylesheet';

const OpenChatData = [
    {
        id: 1,
        logo: 'whatsapp',
        name: 'Rahul Jaggi',
        assignedTo: '',
        message: '',
        location: '',
        time: ''
    },
];

const OpenedChat = () => {
    return (
        <View>
            {/* <Text style={ openChatStyles.openChatText }>Open</Text> */}
        </View>
    );
}

export default OpenedChat;
