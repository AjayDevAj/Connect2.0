import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import nextButtonStyles from './styles/NextButtonStyleSheet';

// It will move to next slide of onboarding
const NextButton = ({ scrollTo }) => {
  return (
    <TouchableOpacity onPress={scrollTo} style={nextButtonStyles.button} activeOpacity={0.6}>
      <Icon name="angle-right" size={24} color='#fff' />
    </TouchableOpacity>
  );
}

export default NextButton;