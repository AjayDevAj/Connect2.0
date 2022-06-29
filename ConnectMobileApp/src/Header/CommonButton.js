import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import fontfaimly from '../utility/Font-Declarations';
const CommonButton = ({buttonname}) => {
  return (
   
    <View
      style={{
        backgroundColor: 'rgba(14, 0, 113, 1)',
        width: 328,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        bottom:50
      }}>
      <Text style={{fontSize:16,fontFamily:fontfaimly.Alte_DIN,color:'#FFFFFF'}}>{buttonname}</Text>
    </View>
   
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
