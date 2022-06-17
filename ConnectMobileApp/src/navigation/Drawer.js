import * as React from 'react';
import { Text, Button, View, StyleSheet, ImageBackground, } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import RouteTabBar from './RouteTabBar';
import CustomDrawer from '../component/CustomDrawer';



function Posts({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const Drawerbar = createDrawerNavigator();

export default function Drawer(props) {
  return (

    <Drawerbar.Navigator drawerContent={(props) => <CustomDrawer {...props}/>} initialRouteName="Home">
      
      <Drawerbar.Screen name="Posts" component={RouteTabBar} options={{ headerShown: false }} />
      {/* <Drawerbar.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
      <Drawerbar.Screen name="Locations" component={Locations} options={{ headerShown: false }} />
      <Drawerbar.Screen name="Manage Team" component={ManageTeam} options={{ headerShown: false }} />
      <Drawerbar.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
    </Drawerbar.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});