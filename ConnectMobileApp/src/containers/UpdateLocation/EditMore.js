import {
  StyleSheet,
  Text,
  View,
  TextInput,
  
  Alert,
  TouchableOpacity,
  
} from 'react-native';
import React from 'react'
import DropdownComponent from '../Post/Post_dropDown';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StateList, CityList} from '../../utility/Constant';
import styles from './UpdateLocationStyle';
import fontfamily from '../../utility/Font-Declarations';
import CheckBox from '@react-native-community/checkbox';

const EditMore = (route, navigation) => {

route = route.route.params.route
console.log('Route params in  Edit More',route)
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
     <View style={{padding: 15}}>
          <Text style={styles.TitleTextlable}>Contact No.</Text>
          <TextInput
            style={styles.InputText}
            numberOfLines={4}
            onChangeText={text => setmobile_number(text)}
            //value={route.params.Location_Data.mobile_number}
            placeholder={route.params.Location_Data.mobile_number}
            keyboardType="numeric"
          />

          <View style={{paddingTop: 20}}>
            <DropdownComponent
              style={{height: 20}}
              title={'Choose Primary Category'}
              listvalue={StateList}
              onChange={item => {
                console.log('OnChange dropdown item', item);
                setStatename(item);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => Alert.alert('Category not available')}>
            <Text
              style={{
                color: 'rgba(0, 112, 252, 1)',
                fontFamily: fontfamily.Alte_DIN,
                fontSize: 12,
                paddingTop: 10,
              }}>
              Add Another Category{' '}
            </Text>
          </TouchableOpacity>
          <Text style={styles.TitleTextlable}>Add Services</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CheckBox />
            <Text style={{paddingRight: 40}}>Home Delivery</Text>
          </View>
          <TouchableOpacity style={[styles.UpdateButton, {bottom: -270}]}>
            <Text style={styles.UpdatebtnLebelText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default EditMore

