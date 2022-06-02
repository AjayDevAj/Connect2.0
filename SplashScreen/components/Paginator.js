import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

import paginatorStyles from '../assets/styles/NextButtonStyleSheet';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={ paginatorStyles.container }>
      {data.map((_, i) => {
        const inputRange = [(i -1) * width, i * width, (i + 1) * width ]

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 0.6, 0.2],
          extrapolate: 'clamp'
        })

        return <Animated.View style={[ paginatorStyles.dot, { opacity } ]} key={i.toString()} />;
      })}
    </View>
  );
};
  
  
  export default Paginator;