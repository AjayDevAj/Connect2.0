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
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import NoChatDataFoundSvg from './assets/undraw_team_chat_re_vbq1.svg';

import chatStyles from './styles/ChatStylesheet';

import Card from '../Card/Card';
import CardRowOne from '../Card/CardRowOne';
import CardRowTwo from '../Card/CardRowTwo';
import CardRowThree from '../Card/CardRowThree';
import {dateToFromNowDaily} from '../utility/CommonFunc'

    
const ChatList = ({data,onPress_Chat,isShowRowThree=false, msgCount=0, tabName='' }) => {
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
        {(data != '' && msgCount > 0) ? (
            <View style={ chatStyles.chatListMainContainer }>
                <FlatList 
                    animation={true}
                    data={data}
                    renderItem={( { item }) => (
                        <TouchableOpacity onPress={() => onPress_Chat(item)}>
                            <Card>
                                <CardRowOne logo={item.publisher_type} name={item.display_name} location={item.location_name} isImportant={item.is_important} />
                                <CardRowTwo assigned={item.assignor_name} message={item.message} messageStatus={item.message_status} time={item.createdAt} unread={item.unread} status={item.chat_status} />
                                {isShowRowThree &&
                                <CardRowThree name={item.agent_name} />
                                }
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>
        ) : (
            <View style={ chatStyles.noChatAssignedMainContainer }>
                <View style={ chatStyles.noChatAssignedSvgView }>
                    <NoChatDataFoundSvg /> 
                </View>

                <View style={ chatStyles.noChatAssignedTextView }>
                    <Text style={ chatStyles.noChatAssignedText }>{tabName == 'assign_chat' ? 'No Chats Assigned !!!' : `No ${Capitalize(tabName)} Chats !!!`}</Text>
                    <Text style={ chatStyles.noChatAssignedDesc }>Lorem ipsum dolor sit amet. Vel minus voluptas non dicta reprehenderit est sunt dolor qui repellat deserunt.</Text>
                </View>
                
            </View>
        )}
        </>
        
    );
}

export default ChatList;