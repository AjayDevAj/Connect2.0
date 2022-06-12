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
    
const ChatList = ({data,onPress}) => {
    return (
        <View style={ chatStyles.chatListMainContainer }>
            <FlatList 
                animation={true}
                data={data}
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={() => console.log('Chat List',item)}>
                        <Card>
                        <CardRowOne logo={item.logo} name={item.display_name} location={item.location_name} />
                        <CardRowTwo assigned={item.assignedTo} message={item.message} time={item.time} />
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default ChatList;

