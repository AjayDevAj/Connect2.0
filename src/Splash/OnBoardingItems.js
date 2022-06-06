import React from 'react';
import { Text, View, Image, useWindowDimensions } from 'react-native';

// Background Circle is created for each onboarding slide
import Ellipse1 from './Ellipses/Ellipse1';
import Ellipse2 from './Ellipses/Ellipse2';
import Ellipse3 from './Ellipses/Ellipse3';

// Stylesheet
import onBoardingStyles from './styles/OnBoardingStyleSheet';

// Complete data (background circles (Ellipse), image, title, description) 
// of each onboarding slides
const OnBoardingItems = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
      <View style={ {width} }>
        {item.id == 1 ? <Ellipse1 /> : item.id == 2 ? <Ellipse2 /> : <Ellipse3 /> }
        <Image source={item.image} style={ onBoardingStyles.image } />
        <View >
            <Text style={onBoardingStyles.title}>{item.title}</Text>
            <Text style={onBoardingStyles.description}>{item.description}</Text>
        </View>
      </View>
    );
};
  
export default OnBoardingItems;