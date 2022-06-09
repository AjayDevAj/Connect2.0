
import React from 'react'
import {View,TouchableOpacity , StyleSheet, Text} from 'react-native'

function OtpViaCallButton() {
  return (
    
    <View>
      <TouchableOpacity
        style={styles.OtpViaCALLButton}
        onPress={()=>console.log('Via CALL')}
      >
        <Text style={styles.OtpViaCALLButtonText}>CALL </Text>
      </TouchableOpacity>  
    </View>
  )
}

export default OtpViaCallButton

const styles = StyleSheet.create({
   
    OtpViaCALLButton: {
      borderRadius: 8,
      height: 40,
      width:160,
      alignItems: 'center',
      justifyContent: 'center',
      
      backgroundColor: '#00C158',
      
    },
    OtpViaCALLButtonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      
    },
  
  });