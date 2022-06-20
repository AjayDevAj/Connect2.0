import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

import CardTime from './CardTime';

const CardRowTwo = ({ assigned, message, time, unread, status }) => {
    unread = 1
    const msgLength = message.length;
    return (
        <View style={ cardStyles.cardRowTwo }>
            <View style={{ alignSelf: 'flex-start' }}></View>
            {  message != '' ? 
                    (unread > 0 && status == 'open') ? (
                        <View>
                            {msgLength > 31 ? (
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '68%' }}>
                                    <Text style={ cardStyles.unreadChatMessage } numberOfLines={1} ellipsizeMode='tail'>{ message }</Text>
                                    <Text style={ cardStyles.unreadCountDesign } > { unread }</Text> 
                                </View>
                            ) : (
                                <View style={{ flexDirection: 'row',  }}>
                                    <Text style={ cardStyles.unreadChatMessage }>{ message } </Text>
                                    <Text style={ cardStyles.unreadCountDesignLessThan31 } > { unread }</Text> 
                                </View>
                            )}
                            
                        </View>
                    )
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