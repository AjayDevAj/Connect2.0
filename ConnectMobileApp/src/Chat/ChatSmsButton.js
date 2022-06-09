import React from 'react';
import { View } from 'react-native';

import SmsIcon from './Icons/smsIcon.svg';

import chatStyles from './styles/ChatStylesheet';

const ChatSmsButton = () => {
    return (
        <View style={ chatStyles.chatSmsButtonContainer }>
            <SmsIcon />
        </View>
    )
}

export default ChatSmsButton;