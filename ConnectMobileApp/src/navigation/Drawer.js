import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import RouteTabBar from './RouteTabBar';


function Posts({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function Offers({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawerbar = createDrawerNavigator();

export default function Drawer() {
  return (
   
      <Drawerbar.Navigator initialRouteName="Home">
        <Drawerbar.Screen name="Posts" component={RouteTabBar} />
        <Drawerbar.Screen name="Offers" component={Offers} />
        <Drawerbar.Screen name="Locations" component={Offers} />
        <Drawerbar.Screen name="Manage Team" component={Offers} />
        <Drawerbar.Screen name="Profile" component={Offers} />


      </Drawerbar.Navigator>
    
  );
}