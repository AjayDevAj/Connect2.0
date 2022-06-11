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
import chatStyles from './styles/AllChatChatStylesheet';
import Card from '../Card/Card';
import CardRowOne from '../Card/CardRowOne';
import CardRowTwo from '../Card/CardRowTwo';
    
const AllChatList = ({data}) => {
    return (
        <View style={ chatStyles.chatListMainContainer }>
            <FlatList 
                data={data}
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={() => console.log('Chat List')}>
                        <Card>
                            <CardRowOne logo={item.logo} name={item.name} location={item.location} />
                            <CardRowTwo assigned={item.assignedTo} message={item.message} time={item.time} />
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default AllChatList;

