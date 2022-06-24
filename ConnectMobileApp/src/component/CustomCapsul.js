import React from 'react'
import {View, Text} from 'react-native';
import fontFamaly from '../utility/Font-Declarations';

export const Custom_Capsul = ({title,count}) => {
    return(
    <View
    style={{
      height: 68,
      width: 100,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 8,
      paddingHorizontal:12
    }}>
        <Text style={{
            fontFamily:fontFamaly.Alte_DIN,
            fontSize:13,
            color:'rgba(0, 0, 0,0.5)',
            paddingTop:12
        }}>
            {title}
        
        </Text>
        <Text style={{
            fontFamily:fontFamaly.Alte_DIN,
            fontSize:20,
            color:'rgba(0, 0, 0,1)',
            paddingTop:6
        }}>
        {count}
        </Text>
    </View>
    )

}