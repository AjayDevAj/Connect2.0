import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';

import Ellipse1 from './Ellipses/Ellipse1';
import Ellipse2 from './Ellipses/Ellipse2';
import Ellipse3 from './Ellipses/Ellipse3';

const OnBoardingItems = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
      <View style={ [styles.Container, {width}] }>
        {item.id == 1 ? <Ellipse1 /> : item.id == 2 ? <Ellipse2 /> : <Ellipse3 /> }
        <Image source={item.image} style={ styles.image } />
        <View >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
};
  
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F7FCFF',
  },
  image: {
    left: 70,
    width: 243,
  },
  title: {
    fontSize: 22,
    fontFamily: 'alte-din-1451-mittelschrift.gepraegt',
    top: 30,
    color: '#0E0071',
    textAlign: 'center',
    letterSpacing: 0.22,
    opacity: 0.8
  },
  description: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: 0.12,
    opacity: 0.5,
    top: 40,
    left: 60,
    width: 260
  },
});
  
export default OnBoardingItems;