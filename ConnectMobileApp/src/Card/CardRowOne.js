import React from 'react';
import { View, Text } from 'react-native';

import cardStyles from './styles/CardStylesheet';

import CardLocation from './CardLocation';
import CardIcon from './CardIcon';

import Icon from 'react-native-vector-icons/MaterialIcons';

const CardRowOne = ({ logo, name, location, is_important }) => {
    return (
        <View style={ cardStyles.cardRowOne }>
            <View style={ cardStyles.cardLogoNameContainer}>
                <CardIcon logo={logo} />
            
                <Text style={ cardStyles.cardName }>{ name }</Text>
                {is_important > 0 && <Icon name="star-border" size={16} color="#FFAA00" style={{ opacity: 1, marginLeft: 5, marginTop: 2 }} />}
            </View>
            
            <CardLocation location={location} />
        </View>
    )
}

export default CardRowOne;