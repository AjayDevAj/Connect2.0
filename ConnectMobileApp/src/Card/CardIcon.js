import React from 'react';
import { View } from 'react-native';

import WhatsappIcon from './Icons/whatsapp.svg';
import GoogleIcon from './Icons/Google.svg';

import cardStyles from './styles/CardStylesheet';

const CardIcon = ({ logo }) => {
    return (
        <View style={ cardStyles.cardIconContainer }>
            { logo === 'whatsapp' ? 
                <WhatsappIcon width="20" />
            : 
                <GoogleIcon width="20" /> 
            }
        </View>
    )
}

export default CardIcon;