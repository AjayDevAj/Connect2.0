import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cardStyles from './styles/CardStylesheet';

import CardTime from './CardTime';

import fontFamily from '../utility/Font-Declarations';

const CardRowTwo = ({
  assigned,
  message,
  messageStatus,
  time,
  unread,
  status,
  type = '',
  intentData,
  image = 'Photo',
}) => {
  var intent_val = '';
  {
    type == 'customer' ? (
      <>
        {intentData != ''
          ? intentData.map(item => {
              intent_val = item.intent;
            })
          : ''}
      </>
    ) : (
      ''
    );
  }

  return (
    <View style={cardStyles.cardRowTwo}>
      {type != '' ? (
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 25}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={
                status == 'Open'
                  ? [cardStyles.cardTimeIcon, {backgroundColor: '#00A34B'}]
                  : [cardStyles.cardTimeIcon, {backgroundColor: '#BA0101'}]
              }></View>
            <Text
              style={
                status == 'Open'
                  ? [
                      cardStyles.unreadCardMessage,
                      {
                        textTransform: 'capitalize',
                        color: '#00A34B',
                        fontFamily: fontFamily.Alte_DIN,
                        fontSize: 13,
                        marginLeft: 3,
                      },
                    ]
                  : [
                      cardStyles.unreadCardMessage,
                      {
                        textTransform: 'capitalize',
                        color: '#BA0101',
                        fontFamily: fontFamily.Alte_DIN,
                        fontSize: 13,
                        marginLeft: 3,
                      },
                    ]
              }>
              {status}
            </Text>
          </View>
          {intent_val != '' && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 8,
              }}>
              <View style={cardStyles.cardTimeIcon}></View>
              <Text
                style={[
                  cardStyles.unreadCardMessage,
                  {
                    textTransform: 'capitalize',
                    color: '#657180',
                    fontFamily: fontFamily.Alte_DIN,
                    fontSize: 13,
                    marginLeft: 3,
                  },
                ]}>
                {intent_val}
              </Text>
            </View>
          )}
        </View>
      ) : (
        <>
          {message != '' ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 25,
              }}>
              {unread > 0 && status == 'open' ? (
                <>
                {message != null &&
                  <Text
                    style={cardStyles.unreadCardMessage}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {message}
                  </Text>
}
                  {message == null && (
                    <>
                    <View>
                      <Icon name={'photo-camera'} size={16} color="#657180" />
                    </View>
                    <Text style={cardStyles.cardMessage}>
                    {image}
                  </Text>
                    </>
                  )}
                 

                  <Text style={cardStyles.unreadCountDesign}>{unread}</Text>
                </>
              ) : (
                <>
                  <Icon
                    name="done-all"
                    size={18}
                    color={messageStatus == 'read' ? '#0070FC' : '#657180'}
                  />
                  {message == null && (
                    <View style={{marginLeft: 10, marginRight: 0}}>
                      <Icon name={'photo-camera'} size={16} color="#657180" />
                    </View>
                  )}

                  <Text style={cardStyles.cardMessage}>
                    {message != null ? message : image}
                  </Text>
                </>
              )}
            </View>
          ) : (
            <View style={cardStyles.assignedToContainer}>
              <Icon name="done-all" size={18} color="#0070FC" />
              <Text style={cardStyles.chatAssignedTo}>{assigned}</Text>
              {/* { assigned } */}
            </View>
          )}
          <CardTime time={time} />
        </>
      )}
    </View>
  );
};

export default CardRowTwo;
