import React from 'react';
import { View } from 'react-native';

import WhatsappIcon from './Icons/whatsapp.svg';
import GoogleIcon from './Icons/Google.svg';

import cardStyles from './styles/CardStylesheet';

const CardIcon = ({ logo }) => {
    return (
        <View style={ cardStyles.cardIconContainer }>
            { logo === 'whatsapp' ? 
                <WhatsappIcon width="14" />
            : 
                <GoogleIcon width="14" /> 
            }
        </View>
    )
}

export default CardIcon;