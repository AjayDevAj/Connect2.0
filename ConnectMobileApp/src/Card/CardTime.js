import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import cardStyles from './styles/CardStylesheet';

const CardTime = ({ time, createdAt }) => {
    return (
        <View style={ cardStyles.cardTimeContainer }>
            <View style={ cardStyles.cardTimeIcon }></View>
            <Text style={ cardStyles.cardTime }>{createdAt ? moment(createdAt).format('dddd') : moment(time).format("hh:mm A")}</Text>
        </View>
    )
}

export default CardTime;