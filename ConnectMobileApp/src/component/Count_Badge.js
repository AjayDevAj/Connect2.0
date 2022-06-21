import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import fontFamily from '../utility/Font-Declarations';

const Count_Badge = ({topRight,top,badge_Value, width=30, height=20}) => {

  return (
    <Text
      style={{
        width: width,
        height: height,
        backgroundColor: '#E6F5FF',
        fontFamily: fontFamily.PoppinsBoald,
        color: '#0070FC',
        borderRadius: width / 2,
        position: 'absolute',
        right: topRight,
        top:top,
        textAlign: 'center',
        zIndex: 11,
        overflow: 'hidden',
      }}>
      {badge_Value}
    </Text>
  );
}

export default Count_Badge