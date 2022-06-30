import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopHeader from '../../Header/TopHeader';
import MyPostBg from '../../../assets/svg/MyPostBg.svg';
import fontfaimly from '../../utility/Font-Declarations';
const My_Post = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#F7FCFF', flex: 1}}>
      <TopHeader name={'My Posts'} firstIcon={'menu'} />
      <View
        style={{
          flex: 1,

          alignItems: 'center',
          // padding: 25,
          paddingTop: '30%',
          //paddingBottom: 40,
        }}>
        <MyPostBg />
        <Text
          style={{
            color: '#000000',
            fontSize: 18,
            fontFamily: fontfaimly.Alte_DIN,
            opacity: 100,
            marginTop: 25,
          }}>
          Post Published Successfully !!!
        </Text>
       
          <Text
            style={{
              fontFamily: fontfaimly.Poppins,
              color: '#000000',
              opacity: 50,
              fontSize: 12,
              paddingBottom: 20,
              paddingTop: 10,
              textAlign:'center',
              padding:30
            }}>
            Your post has been published successfully on GMB,you can visit your
            GMB profile to have a look.
          </Text>
        

        <TouchableOpacity
          style={{
            width: 99,
            height: 32,
            backgroundColor: '#0070FC',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: fontfaimly.Alte_DIN,
              fontSize: 14,
              color: '#FFFFFF',
            }}>
            VISIT NOW
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default My_Post;

const styles = StyleSheet.create({});
