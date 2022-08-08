import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect,useState}from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EditBusinessHours from './EditBusinessHours';
import EditMore from './EditMore';
import Editlocation from './Editlocation';
import TopHeader from '../../Header/TopHeader';
import CommonButton from '../../Header/CommonButton';
import {StateList, CityList} from '../../utility/Constant';
import FontDeclarations from '../../utility/Font-Declarations';


const Tab = createMaterialTopTabNavigator();


const UpdateLocation = ({route, navigation}) => {

  

  const menuHandler = () => {
    navigation.goBack();

    
  };
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
      <TopHeader
        name={route.params.Location_Data.locality}
        firstIcon={'arrow-back'}
        menuHandler={menuHandler}
      />
    <Tab.Navigator
      initialRouteName="Editlocation"
      screenOptions={{
        tabBarActiveTintColor: 'rgba(0, 0, 0, 1)',
        tabBarLabelStyle: { fontSize: 18,fontFamily:FontDeclarations.Alte_DIN,textTransform: 'none' },
        tabBarStyle: { backgroundColor: 'rgba(247, 252, 255, 1)'},
         tabBarItemStyle: { flexDirection:'row',marginLeft:15,marginRight:15},
        
      }}
    >
      <Tab.Screen
        name="Editlocation"
        component={Editlocation}
        initialParams={{route}}
        options={{ tabBarLabel: 'Location',
          tabBarIcon: ({ color, size}) => (
            
            <Icon name="place" size={25} color="rgba(0, 0, 0, 1)" />
          ),
        
        }}
      />
      <Tab.Screen
        name="EditBusinessHours"
        component={EditBusinessHours}
        options={{ tabBarLabel: 'Hours' ,
        tabBarIcon: ({ color, size}) => (
            
            <Icon name="watch-later" size={25} color="rgba(0, 0, 0, 1)" />
          ),}}
        
      />
      <Tab.Screen
        name="EditMore"
        component={EditMore}
        initialParams={{route}}
        options={{ tabBarLabel: 'More' ,
        tabBarIcon: ({ color, size}) => (
            
            <Icon name="more-vert" size={25} color="rgba(0, 0, 0, 1)" />
          )}}
        
      />
    </Tab.Navigator>
    </View>
  );
}

export default UpdateLocation

const styles = StyleSheet.create({})