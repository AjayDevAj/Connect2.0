import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';

import navigationString from '../utility/NavigationString';


import CustomDrawer from '../component/CustomDrawer';
import RouteTabBar from "../navigation/RouteTabBar";
import Message from '../containers/Message/Message';
import CustomerFilter from '../containers/Customer_Filter/CustomerFilter';
import Chat_Filter from '../containers/FilterChat/Chat_Filter'
import My_Offers_Home from '../containers/Offers/My_Offers_Home';
import MyPostHome from '../containers/Post/MyPostHome'
import Add_new_offer from '../containers/Offers/Add_new_offers'
import My_Offers from '../containers/Offers/My_Offers';
import PurchaseLeadComponent from '../PurchaseLead/PurchaseLeadComponent';
import Storelocation from '../containers/Location/Storelocation';

import Login from '../containers/login/Login';
import GetOtpScreen from '../containers/Otp/GetOtpScreen';

const Drawer = createDrawerNavigator();

export default function DashboardDrawer() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false }}>
           
            <Drawer.Screen component={RouteTabBar} name={navigationString.RouteTabBar} />

            <Drawer.Screen component={Storelocation} name={navigationString.Location} />
            <Drawer.Screen component={Message} name={navigationString.Message} />
            <Drawer.Screen component={CustomerFilter} name={navigationString.Filter} />
            <Drawer.Screen component={Chat_Filter} name={navigationString.Chat_Filter} />
            <Drawer.Screen component={My_Offers_Home} name={navigationString.My_Offers_home} />
            <Drawer.Screen component={MyPostHome} name={navigationString.MyPostHome} />
            <Drawer.Screen component={Add_new_offer} name={navigationString.Add_new_offer} />
            <Drawer.Screen component={PurchaseLeadComponent} name={navigationString.Purchase_Lead_Component} />
            <Drawer.Screen component={My_Offers} name={navigationString.My_Offers} />
            <Drawer.Screen component={Login} name={navigationString.LOGIN} />
            <Drawer.Screen component={GetOtpScreen} name={navigationString.GetOtpScreen} />
        </Drawer.Navigator>
    );
}
