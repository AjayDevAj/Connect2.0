import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
//import navigationString from '../Constent/navigationString';
import { Image, View, Text,  } from 'react-native';


function CustomDrawer(props) {
    const { navigation } = props
    return (
        <DrawerContentScrollView {...props}>
                <View style={{
                    backgroundColor: 'rgba(0, 0, 179, 0.6)',
                    // alignItems: 'center',
                    // paddingVertical: '25',
                    flexDirection: "row"
                }}>
                    

                    <Text style={{
                        color: 'white',
                        fontWeight: '900',
                        marginTop: 20,
                        marginLeft: 15
                    }}>
                        React Native
                    </Text>
                </View>

                <DrawerItem
                    label="Posts"
                    onPress={() => navigation.navigate(navigationString.HOME)}
                    labelStyle={{ color: 'red' }}
                />
                <DrawerItem
                    label="Offers"
                    onPress={() => navigation.navigate(navigationString.PROFILE)}
                    labelStyle={{ color: 'green' }}
                />
                <DrawerItem
                    label="Locations"
                    onPress={() => navigation.navigate(navigationString.EXPLORE)}
                    labelStyle={{ color: 'orange' }}
                />
                <DrawerItem
                    label="Manage Team"
                    onPress={() => navigation.navigate(navigationString.PROFILE)}
                    labelStyle={{ color: 'green' }}
                />
                <DrawerItem
                    label="Profile"
                    onPress={() => navigation.navigate(navigationString.EXPLORE)}
                    labelStyle={{ color: 'orange' }}
                />

        </DrawerContentScrollView>
    );
}
export default CustomDrawer;