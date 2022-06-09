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
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import chatStyles from './styles/ChatStylesheet';

import Card from '../Card/Card';
import CardIcon from '../Card/CardIcon';
import CardNameMessage from '../Card/CardNameMessage';
import CardLocationTime from '../Card/CardLocationTime';


const OpenChatData = [
    {
        id: 1,
        logo: 'whatsapp',
        name: 'Rahul Jaggi',
        assignedTo: 'Chat assigned to you',
        message: '',
        location: 'Sikandarpur',
        time: '12:44 PM'
    },
    {
        id: 2,
        logo: 'google',
        name: 'Vijay Sagarkar',
        assignedTo: '',
        message: 'Please send more pictures…',
        location: 'Sikandarpur',
        time: 'Wednesday'
    },
];

console.log(OpenChatData);

const ChatList = () => {
    return (
        <View style={ chatStyles.chatListMainContainer }>
            <FlatList 
                data={OpenChatData}
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={() => console.log('Chat List')}>
                        <Card>
                            <CardIcon logo={item.logo} />

                            <CardNameMessage name={item.name} assigned={item.assignedTo} message={item.message} />
                            
                            <CardLocationTime location={item.location} time={item.time} />
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default ChatList;

