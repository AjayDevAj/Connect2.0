/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: AssignedChat.js
** UsedFor: Assigned Chat in connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Assigned Chat component
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
import { View } from 'react-native';

import assignChatStyles from './styles/AssignedStylesheet';

import ChatList from './ChatList';

const AssignedChat = () => {
  
    return (
        <ChatList type="assigned" />
    );
}

export default AssignedChat;
