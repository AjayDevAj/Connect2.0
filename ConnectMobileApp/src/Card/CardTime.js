import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import cardStyles from './styles/CardStylesheet';

const CardTime = ({ time }) => {
    return (
        <View style={ cardStyles.cardTimeContainer }>
            <Icon name="dot-single" size={16} color="#657180" style={ cardStyles.cardTimeIcon } />
            <Text style={ cardStyles.cardTime }>{ time }</Text>
        </View>
    )
}

export default CardTime;