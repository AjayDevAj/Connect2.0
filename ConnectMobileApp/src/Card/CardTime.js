import React from 'react';
import { View, Text } from 'react-native';

import cardStyles from './styles/CardStylesheet';

const CardTime = ({ time }) => {
    return (
        <View style={ cardStyles.cardTimeContainer }>
            <View style={ cardStyles.cardTimeIcon }></View>
            <Text style={ cardStyles.cardTime }>{ time }</Text>
        </View>
    )
}

export default CardTime;