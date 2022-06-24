import * as React from 'react';
import {ProgressBar} from 'react-native-paper';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fontFamaly from '../utility/Font-Declarations';
import {useSelector, useDispatch} from 'react-redux';

// value,review_Count,review_Percentage
const LineChart = ({title}) => {
  const OverAllReducer_ResponceData = useSelector(store => store.OverAllReducer_ResponceData);
// console.log('OverAllReducer_ResponceData.data.review_data.ratings[1]',OverAllReducer_ResponceData.data.review_data.ratings[1])
  const getPercentage = (value) => {
    var totalRating =
      parseInt(OverAllReducer_ResponceData.data.review_data.ratings[1]) +
      parseInt(OverAllReducer_ResponceData.data.review_data.ratings[2]) +
      parseInt(OverAllReducer_ResponceData.data.review_data.ratings[3]) +
      parseInt(OverAllReducer_ResponceData.data.review_data.ratings[4]) +
      parseInt(OverAllReducer_ResponceData.data.review_data.ratings[5]) 
      
    if (totalRating !== 0) {
      return ((value / totalRating) * 100).toFixed(1);
    } else {
      return 0;
    }
  };

  const numFormatter = (num) => {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}
const value = getPercentage(title)
  return (
    <View style={stylePB.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: fontFamaly.Alte_DIN,
              fontSize: 14,
              color: '#5F6368',
              paddingRight: 5,
            }}>
            {title}
          </Text>
          <Icon name={'star-border'} size={13} color={'#5F6368'} />
        </View>
        <View style={{flex: 1, height: 9, paddingLeft: 10, paddingRight: 16}}>
          <ProgressBar
            progress={value / 100}
            style={{
              borderRadius: 5,
              backgroundColor: 'rgba(101, 113, 128, 0.1)',
              height: 9,
            }}
            color="rgba(250, 187, 98, 1)"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'flex-end',
            right: 0,
          }}>
          <Text
            style={{
              fontFamily: fontFamaly.Alte_DIN,
              fontSize: 14,
              color: '#5F6368',
              paddingRight: 10,
            }}>
            ({numFormatter(value)})
          </Text>
          <Text
            style={{
              fontFamily: fontFamaly.Poppins,
              fontSize: 10,
              color: '#5F6368',
              paddingRight: 10,
              textAlign: 'right',
            }}>
            {value}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const stylePB = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    // flex:1
  },
});

export default LineChart;
