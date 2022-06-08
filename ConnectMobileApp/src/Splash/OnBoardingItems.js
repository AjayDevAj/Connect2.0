/*
**
*
** ===================================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: OnBoardingItems.js
** UsedFor: OnBoarding Items data at splashscreen for connect 2.0 app
** Author:
**
** ====================================================================
*
**
**
*
** ==========================================================
**                     OnBoarding Items Component
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
import { Text, View, Image, useWindowDimensions } from 'react-native';

/*
**
* * Background Circle is created for each onboarding slide, named as Ellipse
** 
*/

import Ellipse1 from './Ellipses/Ellipse1';
import Ellipse2 from './Ellipses/Ellipse2';
import Ellipse3 from './Ellipses/Ellipse3';

/*
**
* * SVG file in place of images
** 
*/

import Group2610Svg from './splash1/Group2610.svg';
import Group2434Svg from './splash2/Group2434.svg';
import Group2435Svg from './splash3/Group2435.svg';

/*
**
*
** import onBoarding stylesheet
*
** 
*/

import onBoardingStyles from './styles/OnBoardingStyleSheet';


/*
**
*
** Complete data (background circles (Ellipse), image, title, description) 
** of each onboarding slides
*
** 
*/

const OnBoardingItems = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
      <View 
        style={ { 
          width, 
          overflow:'hidden', 
          alignItems:'center' 
        } }
      >
        {item.id == 1 ? <Ellipse1 /> : item.id == 2 ? <Ellipse2 /> : <Ellipse3 /> }
        {item.id == 1 ? <Group2610Svg /> : item.id == 2 ? <Group2434Svg /> : <Group2435Svg /> }
        <View >
            <Text style={onBoardingStyles.title}>{item.title}</Text>
            <Text style={onBoardingStyles.description}>{item.description}</Text>
        </View>
      </View>
    );
};

export default OnBoardingItems;