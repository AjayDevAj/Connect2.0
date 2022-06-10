import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

import CardLocation from './CardLocation';
import CardIcon from './CardIcon';

const CardRowOne = ({ logo, name, location }) => {
    return (
        <View style={ cardStyles.cardRowOne }>
            <View style={ cardStyles.cardLogoNameContainer}>
                <CardIcon logo={logo} />
            
                <Text style={ cardStyles.cardName }>{ name }</Text>
            </View>
            
            <CardLocation location={location} />
        </View>
    )
}

export default CardRowOne;