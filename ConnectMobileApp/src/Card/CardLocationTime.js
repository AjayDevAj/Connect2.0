import React from 'react';
import { View } from 'react-native';

import cardStyles from './styles/CardStylesheet';

import CardLocation from './CardLocation';
import CardTime from './CardTime';

const CardLocationTime = ({ location, time }) => {
    return (
        <View style={ cardStyles.cardLocationTime }>
            <CardLocation location={location} />
            <CardTime time={time} />
        </View>
    )
}

export default CardLocationTime;