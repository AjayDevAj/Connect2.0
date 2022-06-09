import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

const CardLocation = ({ location }) => {
    return (
        <View style={ cardStyles.cardLocationContainer }>
            <Icon name="storefront" size={16} color="#657180" />
            <Text style={ cardStyles.cardLocation }>{ location }</Text>
        </View>
    )
}

export default CardLocation;