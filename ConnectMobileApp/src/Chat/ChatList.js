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

import React, {useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { loadChatData } from '../actions/ChatAction';

import chatStyles from './styles/ChatStylesheet';

import Card from '../Card/Card';
import CardRowOne from '../Card/CardRowOne';
import CardRowTwo from '../Card/CardRowTwo';
    
const ChatList = ({ type }) => {
    const [OpenChatData, setOpenChatData] = useState([]);
    const [closeChatData, setcloseChatData] = useState([]);
    const [assignedChatData, setassignedChatData] = useState([]);

    const isFocused = useIsFocused();

    const dispatch = useDispatch();
    const chatResponseData = useSelector(store => store.ChatResponseData);
    
    useEffect(() => {
        if (isFocused) {
            if (type == 'open') {
                dispatch(loadChatData(0, null, 0, 'DESC', 'open', 1, 0, 557));
            } else if (type == 'closed') {
                dispatch(loadChatData(0, null, 0, 'DESC', 'closed', 1, 0, 557));
            } else {
                dispatch(loadChatData(0, null, 0, 'DESC', 'assigned', 1, 0, 557));
            }
        }
    }, [isFocused]);
    
    useEffect(() => {
        try {
            if (chatResponseData.data.totalCount > 0) {
                var chatResponse = chatResponseData.data.result;
    
                var chatData = chatResponse.map(value => ({
                    id: value.id,
                    logo: value.publisher_type,
                    name: value.display_name,
                    assignedTo: value.assignor_name,
                    message: value.message,
                    location: value.location_name,
                    time: value.updatedAt,
                    chat_status: value.chat_status,
                }));
                
                if (type == 'open') {
                    setOpenChatData(chatData);
                } else if (type == 'closed') { 
                    setcloseChatData(chatData);
                } else {
                    setassignedChatData(chatData);
                }
                console.log("Chat Data - " + chatData);
            }
        } catch (err) {
            console.log('Chat List response error : ' + err + ' for type : ' + type)
        }
        
    }, [chatResponseData]);

    return (
        <View style={ chatStyles.chatListMainContainer }>
            <FlatList 
                data={type == 'open' ? OpenChatData : type == 'closed' ? closeChatData : assignedChatData }
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

export default ChatList;

