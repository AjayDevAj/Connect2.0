import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NextButton = ({ scrollTo }) => {
    return (
      <View>
        <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
            <Icon name="angle-right" size={24} color='#fff' />
        </TouchableOpacity>
      </View>
    );
}
  
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: '#493d8a',
    borderRadius: 100,
    padding: 10,
    width: 50,
    height: 50,
    top: -90,
    left: 90,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
  
export default NextButton;