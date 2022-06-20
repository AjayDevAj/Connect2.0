
import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

import CardLocation from './CardLocation';
import CardIcon from './CardIcon';

const CardRowThree = ({name}) => {
    return (
        <View style={ cardStyles.cardRowOne }>
            <View style={ cardStyles.cardAgentNameContainer}>
                <Icon name='person-add-alt' size={20} color={'rgba(101, 113, 128, 1)'}  style={{marginLeft: 10}}/>
                <Text style={ cardStyles.cardAgentName }>{ name }</Text>
            </View>
            
        </View>
    )
}

export default CardRowThree;