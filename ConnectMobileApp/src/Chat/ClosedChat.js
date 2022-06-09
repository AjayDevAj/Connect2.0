/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ClosedChat.js
** UsedFor: Closed Chat in connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Closed Chat component
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

import closedChatStyles from './styles/ClosedChatStylesheet';

import ChatList from './ChatList';

const ClosedChat = () => {
    return (
        <ChatList type="closed" />
    );
}

export default ClosedChat;
