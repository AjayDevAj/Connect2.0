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

import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import chatStyles from './styles/ChatStylesheet';

import Card from '../Card/Card';
import CardIcon from '../Card/CardIcon';
import CardNameMessage from '../Card/CardNameMessage';
import CardLocationTime from '../Card/CardLocationTime';

import {useSelector, useDispatch} from 'react-redux';

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

const closeChatData = [
    {
        id: 1,
        logo: 'whatsapp',
        name: 'Jenny Hilton',
        assignedTo: 'Chat assigned to you',
        message: '',
        location: 'Sikandarpur',
        time: '12:44 PM'
    },
    {
        id: 2,
        logo: 'google',
        name: 'Rahul Sagarkar',
        assignedTo: '',
        message: 'Please send more pictures…',
        location: 'Sikandarpur',
        time: 'Wednesday'
    },
];

const assignedChatData = [
    {
        id: 1,
        logo: 'whatsapp',
        name: 'Vijay Jaggi',
        assignedTo: 'Chat assigned to you',
        message: '',
        location: 'Sikandarpur',
        time: '12:44 PM'
    },
    {
        id: 2,
        logo: 'google',
        name: 'Jenny Hilton',
        assignedTo: '',
        message: 'Please send more pictures…',
        location: 'Sikandarpur',
        time: '12:08 PM'
    },
];


const ChatList = ({ type }) => {
    const dispatch = useDispatch();
    const chatResponseData = useSelector(store => store.ChatResponseData);

    console.log("Chat Response Data - " + chatResponseData);

    return (
        <View style={ chatStyles.chatListMainContainer }>
            <FlatList 
                data={type == 'open' ? OpenChatData : type == 'closed' ? closeChatData : assignedChatData }
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

