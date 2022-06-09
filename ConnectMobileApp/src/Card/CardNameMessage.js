import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import cardStyles from './styles/CardStylesheet';

const CardNameMessage = ({ name, assigned, message }) => {
    return (
        <View style={ cardStyles.cardNameMsg }>
            <Text style={ cardStyles.cardName }>{ name }</Text>
            
            { assigned !== '' ? 
                <View style={ cardStyles.assignedToContainer }>
                    <Icon name="checkmark-done-outline" size={18} color="#0070FC" />
                    <Text style={ cardStyles.chatAssignedTo }>{ assigned }</Text> 
                </View>
            : 
                <Text style={ cardStyles.chatMessage }>{ message }</Text>
            }
        </View>
    )
}

export default CardNameMessage;