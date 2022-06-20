/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: ChatList.js
** UsedFor: Chat List at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**              Chat List component
** ==========================================================
*
**
*/

import React, {useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';


import chatStyles from './styles/ChatStylesheet';

import Card from '../Card/Card';
import CardRowOne from '../Card/CardRowOne';
import CardRowTwo from '../Card/CardRowTwo';
import CardRowThree from '../Card/CardRowThree';
    
const ChatList = ({data,onPress_Chat}) => {
    return (
        <View style={ chatStyles.chatListMainContainer }>
            <FlatList 
                animation={true}
                data={data}
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={() => onPress_Chat(item)}>
                        <Card>
                        <CardRowOne logo={item.logo} name={item.display_name} location={item.location_name} 
                        isImportant={item.is_important}/>
                        <CardRowTwo assigned={item.assignedTo} message={item.message} time={item.time} 
                        unread={item.unread} status={item.chat_status}
                        />

                        <CardRowThree name={item.agent_name} />
                        

                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default ChatList;