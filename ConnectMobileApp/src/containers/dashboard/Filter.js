import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fontfaimily from '../../utility/Font-Declarations';
import Buttongroup from './buttongropu_Filter';
import styles from '../dashboard/FilterStyle';
// import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
// import Filter_Action_Sheet from '../../component/Filter_Action_Sheet';

export default Filter = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top header buttons */}

      <View style={styles.header}>
        <Icon.Button
          name="filter-alt"
          size={30}
          backgroundColor="transparent"
          color={'#000000'}>
          <Text style={{fontSize: 18, fontFamily: fontfaimily.Alte_DIN}}>
            Filters
          </Text>
        </Icon.Button>
        {/* Header Pipe Symbol */}
        <View style={styles.headerPipeSymbol}></View>

        <Icon.Button
          name="sort"
          color={'#657180'}
          size={30}
          backgroundColor="transparent"
          onPress={() => {
            SheetManager.show('sortingsheet')
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontfaimily.Alte_DIN,
              color: 'rgba(101, 113, 128, 1)',
            }}>
            {' '}
            Sorting
          </Text>
        </Icon.Button>
      </View>
      {/* Left and right containers  */}

      <View style={{flexDirection: 'row'}}>
        {/* Left Conatiner holds the Filters buttons   to   filter out the required data */}

        <View style={styles.leftContainer}>
          <Buttongroup />
        </View>
        {/* Right Conatiner  */}
        <View style={styles.rightContainer}></View>
      </View>

      {/* Bottom container for footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            {
            }
          }}>
          <Text style={styles.clearAllBtnText}>CLEAR ALL</Text>
        </TouchableOpacity>

        {/* Footer Pipe Symbol */}

        <View style={styles.footerPipeSymbol}></View>
        <TouchableOpacity
          style={styles.applyFilterBTN}
          onPress={() => {
            {
            }
          }}>
          <Text style={styles.applyFilterBtnText}>APPLY FILTERS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
