import React from 'react'
import navigationString from '../utility/NavigationString';

import CustomDrawer from './CustomDrawer/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';

import RouteTabBar from './RouteTabBar';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false }}>
            <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />
        </Drawer.Navigator>
    );
  }
