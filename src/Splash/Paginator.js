import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

// import stylesheet
import paginatorStyles from './styles/PaginatorStyleSheet';

// Pagination will highlight the current onboarding slide
const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={ paginatorStyles.container }>
      {data.map((_, i) => {
        const inputRange = [(i -1) * width, i * width, (i + 1) * width ]

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.18, 0.4, 0.18],
          extrapolate: 'clamp'
        })

        return <Animated.View style={[ paginatorStyles.dot, { opacity } ]} key={i.toString()} />;
      })}
    </View>
  );
};

export default Paginator;