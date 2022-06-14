/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: Chat.js
 ** UsedFor: Chat at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **                  Chat component
 ** ==========================================================
 *
 **
 */

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import fontFamily from '../utility/Font-Declarations'

export const SegmentComponent = ({onClickSegmentChanged,badgesValue=[2, 2, 0],selectedIndexTab=0}) => {
  const [selectedIndex, setSelectedIndex] = useState(selectedIndexTab);
  
  return (
      <View
        style={{
          height: Platform.OS == 'ios' ? '6.5%' : '10%',
          backgroundColor: '#F7FCFF',
          width: '85%',
          justifyContent: 'flex-end',
        }}>
        <SegmentedControlTab
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          selectedIndex={selectedIndex}
          badges={badgesValue}
          activeTabBadgeContainerStyle={styles.activeTabBadgeContainerStyle}
          activeTabBadgeStyle={styles.activeTabBadgeStyle}
          tabBadgeContainerStyle={styles.tabBadgeContainerStyle}
          tabBadgeStyle={styles.tabBadgeStyle}
          allowFontScaling={true}
          values={['OPEN', 'CLOSED', 'ASSIGNED']}
          onTabPress={index => {
            setSelectedIndex(index)
            onClickSegmentChanged(index == 0 ? 'open' : index == 1 ? 'closed':'assign_chat')
          }}
        />
      </View>
    
  );
};

const styles = StyleSheet.create({
  tabsContainerStyle: {
    //custom styles
    borderRadius: 0,
    borderBottomColor: 'red',
    height: 30,
  },
  tabStyle: {
    //custom styles
    borderRadius: 0,
    borderColor: '#F7FCFF',
    backgroundColor: '#F7FCFF',
  },
  firstTabStyle: {
    //custom styles
  },
  lastTabStyle: {
    //custom styles
  },
  tabTextStyle: {
    //custom styles
    color: '#657180',
    fontFamily:fontFamily.Alte_DIN,
    fontSize:16

  },
  activeTabStyle: {
    //custom styles
    borderBottomColor: '#0070FC',
    backgroundColor: '#F7FCFF',
    // color:'#000'
  },
  activeTabTextStyle: {
    //custom styles
    color: '#0070FC',

  },
  tabBadgeContainerStyle: {
    //custom styles
    backgroundColor:'rgba(95, 99, 104, 0.1)',
    borderRadius:9,
    // top:3,
    height:16,
    width:21,
    justifyContent:'center'
  },
  activeTabBadgeContainerStyle: {
    //custom styles
    backgroundColor:'#D8E9FF',
    borderRadius:9,
    // top:3,
    height:16,
    width:21,
    justifyContent:'center'

  },
  tabBadgeStyle: {
    //custom styles
    color:'#rgba(95, 99, 104, 1)',
    fontSize:10,
    fontFamily:fontFamily.Poppins,
    textAlign:'center'
  },
  activeTabBadgeStyle: {
      color:'#0070FC',
      fontSize:10,
      fontFamily:fontFamily.Poppins,
      textAlign:'center'
    //custom styles
  },
});
