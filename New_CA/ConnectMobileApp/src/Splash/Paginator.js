/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: Paginator.js
** UsedFor: Paginator at splashscreen for connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                     Paginator Component
** ==========================================================
*
**
*/


/*
**
*
** Common react packages import
*
** 
*/

import React from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

/*
**
*
** import paginator stylesheet
*
** 
*/

import paginatorStyles from './styles/PaginatorStyleSheet';


/*
**
*
** Pagination will highlight the current onboarding slide
*
** 
*/

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