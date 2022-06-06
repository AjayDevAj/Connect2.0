import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Bubble() {
  return (
     <View  style={{ flexDirection: 'row', width:'100%' }}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'rgba(0, 193, 88, 0.10)',
          borderRadius: 150 / 2,
          top: -50,
          right: -50,
          position:'absolute',
          alignSelf: 'flex-end',
        }}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
