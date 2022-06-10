/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Chat.js
** UsedFor: Chat at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                  Chat component
** ==========================================================
*
**
*/

import React from 'react';
import { View } from 'react-native';

import TopHeader from '../Header/TopHeader';
import HeaderTabView from '../Header/HeaderTabView';
import HeaderNotification from '../Header/HeaderNotification';

import chatStyles from './styles/ChatStylesheet';

const Chat = () => {
    const menuHandler = () => {
        console.log("Menu Handler")
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

    return (
        <View style={ chatStyles.chatMainContainer }>
            <TopHeader firstIcon="menu" secondIcon="search" thirdIcon="filter-list"
                name="My Chats" menuHandler={menuHandler} searchHandler={searchHandler} 
                filterHandler={filterHandler}
            />
            <HeaderTabView chatTabsTitleData={chatTabsTitleData} />
            <HeaderNotification left="people" message="12 Open chats with team" right="chevron-right" />
        </View>
    );
}

export default Chat;