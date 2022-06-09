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

import ChatList from './ChatList';

const OpenedChat = () => {
    return (
        <ChatList type="open" />
    );
}

export default OpenedChat;
