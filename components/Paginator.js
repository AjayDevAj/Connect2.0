import React from 'react';
import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
      <View style={ styles.Container }>
          {data.map((_, i) => {
              const inputRange = [(i -1) * width, i * width, (i + 1) * width ]

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.2, 0.6, 0.2],
                extrapolate: 'clamp'
              })

              return <Animated.View style={[ styles.dot, { opacity } ]} key={i.toString()} />;
          })}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    Container: {
      flexDirection: 'row',
    },
    dot: {
      height: 6,
      width: 6,
      borderRadius: 5,
      backgroundColor: '#657180',
      marginHorizontal: 3,
      opacity: 0.1,
      top:-230
    }
  });
  
  export default Paginator;