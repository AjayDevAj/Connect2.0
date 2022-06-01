import React, {useState, useEffect} from 'react';
import {View, Dimensions, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';

const OtpTimerHandler = () => {
  const [counter, setCounter] = useState(30);
  console.log(counter);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <View>
      {counter > 0 ? <Text style={{color: 'rgba(95, 99, 104, 1)'}}>
          Time Left : {counter} sec
          </Text> :
          <Text style={{color: 'rgba(95, 99, 104, 1)'}}>
            Didn’t Received?{' '}
            <TouchableOpacity
              onPress={() => Alert.alert('Navigate to Mobile Screen')}>
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
      marginRight: 5,
    }});
export default OtpTimerHandler;
