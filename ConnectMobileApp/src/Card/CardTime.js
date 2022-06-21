import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import cardStyles from './styles/CardStylesheet';

const CardTime = ({ time }) => {
    return (
        <View style={ cardStyles.cardTimeContainer }>
            <View style={ cardStyles.cardTimeIcon }></View>
            <Text style={ cardStyles.cardTime }>{moment(time, "HH:mm:ss").format("hh:mm A")}</Text>
            {/* <Text style={ cardStyles.cardTime }>{moment().format(time, 'LT')}</Text> */}

        </View>
    )
}

export default CardTime;