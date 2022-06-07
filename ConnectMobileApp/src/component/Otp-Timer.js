import React, {useState, useEffect} from 'react';
import {View, Dimensions, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import fontFamily from '../utility/Font-Declarations'

const OtpTimerHandler = ({Resend,StopTimer}) => {
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View>
      {counter > 0 ? <Text style={{color: 'rgba(95, 99, 104, 1)',fontSize:12,fontFamily:fontFamily.Poppins}}>
          Time Left : {counter} sec
          </Text> :
          <Text style={{color: 'rgba(95, 99, 104, 1)',fontSize:12,
                        fontFamily:fontFamily.Poppins,
                        // marginBottom:10
          }}>
            Didn’t Received?{' '}
            <TouchableOpacity
              onPress={Resend}>
              <Text style={styles.ResentButtonText}>Resend</Text>
            </TouchableOpacity>
          </Text>}
    </View>
  );
};
const styles = StyleSheet.create({
    ResentButtonText: {
      color: 'rgba(0, 112, 252, 1)',
      textDecorationLine: 'underline',
      fontFamily:fontFamily.Poppins,
      fontSize:12,
      marginTop:10,
      marginLeft:3
      
    }});
export default OtpTimerHandler;
