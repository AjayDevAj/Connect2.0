import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import RouteTabBar from './RouteTabBar';



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

function Offers({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawerbar = createDrawerNavigator();

export default function Drawer(props) {
  return (

    <Drawerbar.Navigator initialRouteName="Home">

    {/* <DrawerContentScrollView {...props}>

      <View style={styles.menuContainer}>
        <View
          style={{backgroundColor: 'red'}}>
        </View>

      </View>

    </DrawerContentScrollView> */}



      <Drawerbar.Screen name="Posts" component={RouteTabBar} options={{ headerShown: false }} />
      <Drawerbar.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
      <Drawerbar.Screen name="Locations" component={Offers} options={{ headerShown: false }} />
      <Drawerbar.Screen name="Manage Team" component={Offers} />
      <Drawerbar.Screen name="Profile" component={Offers} />
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