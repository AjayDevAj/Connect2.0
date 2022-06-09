import React from 'react'
import {View,TouchableOpacity , StyleSheet , Text} from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialIcons ';

function OtpViaSMSButton() {
  return (
    
    <View>
      <TouchableOpacity
        style={styles.OtpViaSMSButton}
        onPress={()=>console.log('Via SMA')}
      >
          {/* <Icon name="sms" size={16} color="#900"/> */}
        <Text style={styles.OtpViaSMSButtonText}>Via SMS </Text>
      </TouchableOpacity>  
    </View>
  )
}

export default OtpViaSMSButton

const styles = StyleSheet.create({
   
    OtpViaSMSButton: {
      borderRadius: 8,
      height: 40,
      width:160,
      alignItems: 'center',
      justifyContent: 'center',
      
      backgroundColor: 'rgba(14, 0, 113, 1)',
      
    },
    OtpViaSMSButtonText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      
    },
  
  });