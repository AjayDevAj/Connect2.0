import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

import CardTime from './CardTime';

const CardRowTwo = ({ assigned, message, time }) => {
    return (
        <View style={ cardStyles.cardRowTwo }>
            <View style={{ alignSelf: 'flex-start'}}></View>
            { message != '' ? 
                <Text style={ cardStyles.chatMessage }>{ message }</Text>
            : 
                <View style={ cardStyles.assignedToContainer }>
                    <Icon name="done-all" size={18} color="#0070FC" />
                    <Text style={ cardStyles.chatAssignedTo }>{ assigned }</Text> 
                </View>
            }
            <CardTime time={time} />
        </View>
    )
}

export default CardRowTwo;