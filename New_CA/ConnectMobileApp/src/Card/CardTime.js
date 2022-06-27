import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import cardStyles from './styles/CardStylesheet';

const CardTime = ({ time }) => {
    return (
        <View style={ cardStyles.cardTimeContainer }>
            <View style={ cardStyles.cardTimeIcon }></View>
            <Text style={ cardStyles.cardTime }>{moment(time).format('HH:ss A')}</Text>
        </View>
    )
}

export default CardTime;