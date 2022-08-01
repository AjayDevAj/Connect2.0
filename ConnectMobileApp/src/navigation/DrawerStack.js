import React from 'react'
import navigationString from '../utility/NavigationString';

import CustomDrawer from './CustomDrawer/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';

import RouteTabBar from './RouteTabBar';
import MyPostHome from '../containers/Post/MyPostHome';
import My_Offers_Home from '../containers/Offers/My_Offers_Home';
import UpdateLocationHome_Screen from '../containers/UpdateLocation/UpdateLocationHome_Screen';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false }}>
            <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />
            <Drawer.Screen component={MyPostHome} name={navigationString.MyPostHome} />
            <Drawer.Screen component={My_Offers_Home} name={navigationString.My_Offers_home} />
            <Drawer.Screen component={UpdateLocationHome_Screen} name={navigationString.Locations} />
            {/* <Drawer.Screen component={ManageTeam} name={navigationString.ManageTeam} />
            <Drawer.Screen component={Profile} name={navigationString.Profile} /> */}
        </Drawer.Navigator>
    );
  }
