import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

import CardTime from './CardTime';

const CardRowTwo = ({ assigned, message, time, unread, status }) => {
    unread = 1
    return (
        <View style={ cardStyles.cardRowTwo }>
            <View style={{ alignSelf: 'flex-start' }}></View>
            {  message != '' ? 
                    (unread > 0 && status == 'open') ? 
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '76%' }}>
                            <Text style={ cardStyles.unreadChatMessage } numberOfLines={1} ellipsizeMode='tail'>{ message }</Text>
                            <Text style={ cardStyles.unreadCountDesign } > { unread }</Text> 
                        </View>
                    :
                        <Text style={ cardStyles.chatMessage }>{ message }</Text>
                : 
                <View style={ cardStyles.assignedToContainer }>
                    <Icon name="done-all" size={18} color="#0070FC" />
                    <Text style={ cardStyles.chatAssignedTo }>{ assigned }</Text> 
                    {/* { assigned } */}
                </View>
            }
            <CardTime time={time} />
        </View>
    )
}

export default CardRowTwo;