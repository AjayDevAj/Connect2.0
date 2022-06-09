/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatHeader.js
** UsedFor: Chat Header at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
** Chat Header component
** ==========================================================
*
**
*/

import React from 'react';
import { Text, View } from 'react-native';

import TopHeader from '../Header/TopHeader';
import HeaderTabView from '../Header/HeaderTabView';
import HeaderNotification from '../Header/HeaderNotification';

import chatStyles from './styles/chatStylesheet';

import OpenedChat from './OpenedChat';
import ClosedChat from './ClosedChat';
import AssignedChat from './AssignedChat';

const ChatHeader = () => {

    const menuHandler = () => {
        alert("Menu Handler");
    };

    const searchHandler = () => {
        alert("Search Handler");
    };

    const filterHandler = () => {
        alert("Filter Handler");
    };

    const chatTabsTitleData = [
        { key: 'first', title: 'Open', no_of_chat: 2 },
        { key: 'second', title: 'Closed', no_of_chat: 3 },
        { key: 'third', title: 'Assigned', no_of_chat: 0},
    ];

    const chatTabs = [
        { id: 1, component: OpenedChat },
        { id: 2, component: ClosedChat },
        { id: 3, component: AssignedChat },
    ];

    return (
        <View style={ chatStyles.chatMainContainer }>
            <TopHeader name="My Chats" 
                menuHandler={menuHandler} 
                searchHandler={searchHandler} 
                filterHandler={filterHandler}
            />

            <HeaderTabView chatTabsTitleData={chatTabsTitleData} chatTabs={chatTabs} />

            <HeaderNotification />
        </View>
    );
}

export default ChatHeader;

