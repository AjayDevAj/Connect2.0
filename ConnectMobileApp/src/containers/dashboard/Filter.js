import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fontfaimly from '../../utility/Font-Declarations';
import Buttongroup from './buttongropu_Filter';
import styles from '../dashboard/FilterStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EntryPointFilter from '../../component/EntryPointFilter';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import Filter_Action_Sheet from '../../component/Filter_Action_Sheet';
import DateFilter from '../../component/DateFilter';
import { selectedbtnid } from '../../utility/Constant';
import { useSelector } from 'react-redux';
import FilterLocationData from '../../component/FilterLocationData';


export default Filter = ({navigation, route}) => {

  const [applyfilter ,setApplyFilter]=useState(false)
  const ButtonidselctorResponce = useSelector(store => store.FilterDataReducer_Responce);
  console.log('selctorrrrrrrrr-------->',ButtonidselctorResponce)
  
  
  const [btnId ,setBtnID] =useState(null)
   



  useEffect(() => {
    //getData()
    //navigation.goBack()
    //removeValue()

    setBtnID(ButtonidselctorResponce)
  },[]);

  // const getData = async () => {
  //   try {
  //      const value = await AsyncStorage.getItem(selectedbtnid)
  //     if(value !== null) {
  //       // value previously stored
        
  //       console.log('storage value from constant========>', value)
  //       console.log('storage value from State========>',btnId)
  //     }
  //   } catch(e) {
  //     // error reading value
  //     console.log('error--------',e)
  //   }
  // }

  // removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem(selectedbtnid)
  //   } catch(e) {
  //     // remove error

  //     console.log('Remove Errror ++++++++++++++++++++',e)
  //   }
  
  //   console.log('Done.')
  // }
 

  return (
    <SafeAreaView style={styles.container}>
      {/* Top header buttons */}

      <View style={styles.header}>
        <TouchableOpacity style={{justifyContent:'center'}} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={'#5F6368'} />
        </TouchableOpacity>

        <Icon.Button
          name="filter-alt"
          size={30}
          backgroundColor="transparent"
          color={'#000000'}>
          <Text style={{fontSize: 18, fontFamily: fontfaimly.Alte_DIN}}>
            Filters
          </Text>
        </Icon.Button>
        {/* Header Pipe Symbol */}
        <View style={styles.headerPipeSymbol}></View>

        <Icon.Button
          name="sort"
          color={'#657180'}
          size={30}
          backgroundColor="rgba(255, 255, 255, 1)"
          onPress={() => {
            //navigation.navigate('RouteTabBar')
            navigation.goBack(() => Alert.alert('hi'));
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontfaimly.Alte_DIN,
              color: 'rgba(101, 113, 128, 1)',
            }}>
            Sorting
          </Text>
        </Icon.Button>
      </View>
      {/* Left and right containers  */}

      <View style={{flexDirection: 'row'}}>
        {/* Left Conatiner holds the Filters buttons   to   filter out the required data */}

        <View style={styles.leftContainer}>
          <Buttongroup idstate={btnId}/>
        </View>
        {/* Right Conatiner  */}
        <View style={styles.rightContainer}>
<>
{
  // btnId  === 1 && btnId !='' ?  <FilterRightContainer /> : <DateFilter/>

}
</>

          {/* <Text style={{fontFamily:'Poppins'}}>{}</Text> */}
         
          {/* <EntryPointFilter/> */}
          <DateFilter/>
          {/* <FilterLocationData appyFilter={applyfilter}/> */}
        </View>
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
              setApplyFilter(true)
            }
          }}>
          <Text style={styles.applyFilterBtnText}>APPLY FILTERS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
