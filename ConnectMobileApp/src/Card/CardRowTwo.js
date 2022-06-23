import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

import CardTime from './CardTime';

import fontFamily from '../utility/Font-Declarations';

const CardRowTwo = ({ assigned, message, time, unread, status, type='', intentData }) => {
    var intent_val = '';
    {type == 'customer' ? (
       <>
        {intentData != '' ? 
        intentData.map((item) => {
            intent_val = item.intent
        })
        : ''}
        </>
    ) : ''}
    
    return (
        <View style={ cardStyles.cardRowTwo }>
            {type != '' ? (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft:25}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        {status == 'Open' ? (
                            <>
                                <View style={ [cardStyles.cardTimeIcon, {backgroundColor: '#00A34B'}] }></View>
                                <Text style={ [cardStyles.unreadChatMessage, { textTransform: 'capitalize', color: '#00A34B', fontFamily: fontFamily.Alte_DIN, fontSize: 13, marginLeft: 3 }] }>{status}</Text>
                            </>
                        ) : (
                            <>
                                <View style={ [cardStyles.cardTimeIcon, {backgroundColor: '#BA0101'}] }></View>
                                <Text style={ [cardStyles.unreadChatMessage, { textTransform: 'capitalize', color: '#BA0101', fontFamily: fontFamily.Alte_DIN, fontSize: 13, marginLeft: 3 }] }>{status}</Text>
                            </>
                        )}
                        
                    </View>
                    {intent_val != '' && (
                        <>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8}}>
                            <View style={ cardStyles.cardTimeIcon }></View>
                            <Text style={ [cardStyles.unreadChatMessage, { textTransform: 'capitalize', color: '#657180', fontFamily: fontFamily.Alte_DIN, fontSize: 13, marginLeft: 3 }] }>{intent_val}</Text>
                        </View>
                        </>
                    )}
                    
                </View>
            ) : (
                <>
                {  message != '' ? 
                    (unread > 0 && status == 'open') ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:25}}>
                            <Text style={ cardStyles.unreadChatMessage } numberOfLines={1} ellipsizeMode='tail'>{message}</Text>
                            <Text style={ cardStyles.unreadCountDesign }>{unread}</Text> 
                        </View>
                    )
                    :
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:25}}>
                    <Text style={ cardStyles.chatMessage }>{message}</Text>
                    </View>
                    : 
                    <View style={ cardStyles.assignedToContainer }>
                        <Icon name="done-all" size={18} color="#0070FC" />
                        <Text style={ cardStyles.chatAssignedTo }>{ assigned }</Text> 
                        {/* { assigned } */}
                    </View>
                }
                <CardTime time={time} />
                </>
            )}
            
        </View>
    )
}

export default CardRowTwo;