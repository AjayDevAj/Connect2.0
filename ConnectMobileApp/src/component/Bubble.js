import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
export default function Bubble() {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View 
    style={{
      width:120,
      height:120,
      backgroundColor:'rgba(0, 193, 88, 0.10)',
      opacity:10,
      
      borderRadius:120/2,
       top:-80,
       left:300,
        

    }}
    >
     
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})
