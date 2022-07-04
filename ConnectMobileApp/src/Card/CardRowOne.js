import React from 'react';
import { View, Text } from 'react-native';

import cardStyles from './styles/CardStylesheet';

import CardLocation from './CardLocation';
import CardIcon from './CardIcon';
import CardTime from './CardTime';

import Icon from 'react-native-vector-icons/MaterialIcons';

const CardRowOne = ({ logo, name, location, isImportant, createdAt='' }) => {
    return (
        <View style={ cardStyles.cardRowOne }>
            <View style={ cardStyles.cardLogoNameContainer}>
                <CardIcon logo={logo} />
            
                <Text style={ cardStyles.cardName }>{ name }</Text>
                {isImportant > 0 && <Icon name="star-border" size={16} color="#FFAA00" style={{ opacity: 1, marginLeft: 5, marginTop: 2 }} />}
                {createdAt !='' && ( <View style={{ alignSelf: 'flex-start', marginLeft: 6,  marginTop: -7}}><CardTime createdAt={createdAt} /></View> )}
            </View>
            
            {createdAt !='' 
            ? <Icon name="more-vert" size={20} color="#5F6368" />
            : <CardLocation location={location} /> 
            }
            
        </View>
    )
}

export default CardRowOne;