import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import cardStyles from './styles/CardStylesheet';

import CardLocation from './CardLocation';
import CardIcon from './CardIcon';
import CardTime from './CardTime';

import Icon from 'react-native-vector-icons/MaterialIcons';

const CardRowOne = ({ logo, name, location, isImportant, createdAt='', itemId, customerItemData, dotHandler }) => {
    return (
        <View style={ cardStyles.cardRowOne }>
            <View style={ cardStyles.cardLogoNameContainer}>
                <CardIcon logo={logo} />
            
                <Text style={ cardStyles.cardName }>{ name }</Text>
                {isImportant > 0 && <Icon name="star-border" size={16} color="#FFAA00" style={{ opacity: 1, marginLeft: 5, marginTop: 2 }} />}
                {createdAt !='' && ( 
                    <View style={{ alignSelf: 'flex-start', marginLeft: 6,  marginTop: -7}}>
                        <CardTime time={createdAt} />
                    </View>
                )}
            </View>
            
            {createdAt !='' ? (
                <TouchableOpacity onPress={(val) => dotHandler(itemId, customerItemData)}>
                    <Icon name="more-vert" size={20} color="#5F6368" />
                </TouchableOpacity>
            )
            : <CardLocation location={location} /> 
            }
        </View>
    )
}

export default CardRowOne;