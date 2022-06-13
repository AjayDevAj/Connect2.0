import React from 'react'
import {View,StyleSheet} from 'react-native'

export const MessageContainer = () => {
    return (
        <View style={messageContainerStyle.container}>
            
        </View>
    )
}

const messageContainerStyle = StyleSheet.create({
    container: {
      backgroundColor:'red',
    height:30
    },
  })