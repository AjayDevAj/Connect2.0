import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './CustomDrawerStyleSheet';

import { signOut } from '../Routes'
import AuthContext from '../AuthContext';

import NavigationString from '../../utility/NavigationString';
import { deleteAll } from '../../utility/StorageClass'

import Singleinterfaceicon from '../../../assets/svg/singleinterfaceicon.svg'
import fontFamily from '../../utility/Font-Declarations';

import { logOutApi } from '../../api/logOutApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { show_location_screen } from '../../utility/Constant';

function CustomDrawer(props) {
    const navigation1 = useNavigation();

    const { logOut } = useContext(AuthContext);

    const setLocationScreenView = async () => {
        await AsyncStorage.setItem(show_location_screen, 'true');
    }

    //Logout api calling..
    const logout = async () => {
        const logOutResponse = await logOutApi();

        if (logOutResponse?.error === false) {
            setLocationScreenView();
            navigation.closeDrawer();
            // deleteAll()
            signOut();
            navigation.navigate(NavigationString.LOGIN);
        } else if (logOutResponse?.error?.error) {
            throw new Error(logOutResponse?.error?.error)
        }
    }

    const { navigation } = props
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)' }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{  }}>

                <View 
                    style={{
                        backgroundColor: 'rgba(14, 0, 113, 1)',
                        flexDirection: "column",
                        height: '28%',
                        marginTop: -4,
                        borderBottomRightRadius: 24
                    }}
                >
                    <View style={{
                        borderColor: '#0070FC',
                        marginTop: 15,
                        marginLeft: 15,
                        height: 52,
                        width: 52,
                        borderRadius: 52/2,
                        backgroundColor: '#0070FC',
                        opacity: 1
                    }}>
                        <Singleinterfaceicon height={48} width={48} marginLeft={2} marginTop={2} />
                    </View>

                    <Text style={{
                        color: 'rgba(255, 255, 255, 1)',
                        marginTop: 8,
                        // marginBottom: 20,
                        marginLeft: 16,
                        fontSize: 12,
                        fontFamily: fontFamily.Alte_DIN,
                        opacity: 0.7
                    }}>
                        XYZ Automobiles & Services
                    </Text>
                </View>

                <View style={{ backgroundColor: 'rgba(247, 252, 255, 1)', padding: 10, }}>
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate(NavigationString.MyPostHome)}
                    >
                        <View style={styles.listView}>
                            <Icon name='post-add' size={20} style={styles.iconList} />
                            <Text style={styles.listText}>Posts</Text>
                            <Icon name='chevron-right' size={20} color='#5F6368' style={{ marginLeft: 135, marginTop: 5, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate(NavigationString.My_Offers_home)}
                    >
                        <View style={styles.listView}>
                            <Icon name='local-offer' size={20} style={styles.iconList} />
                            <Text style={styles.listText}>Offers</Text>
                            <Icon name='chevron-right' size={20} color='#5F6368' style={{ marginLeft: 130, marginTop: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate(NavigationString.Locations)}
                    >
                        <View style={styles.listView}>
                            <Icon name='location-on' size={20} style={styles.iconList} />
                            <Text style={styles.listText}>Locations</Text>
                            <Icon name='chevron-right' size={20} color='#5F6368' style={{ marginLeft: 103, marginTop: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                    // onPress={() => navigation.navigate(NavigationString.Offers)}
                    >
                        <View style={styles.listView}>
                            <Icon name='group' size={20} style={styles.iconList} />
                            <Text style={styles.listText}>Manage Team</Text>
                            <Icon name='chevron-right' size={20} color='#5F6368' style={{ marginLeft: 75, marginTop: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                    // onPress={() => navigation.navigate(NavigationString.Offers)}
                    >
                        <View style={styles.listView}>
                            <Icon name='person-outline' size={20} style={styles.iconList} />
                            <Text style={styles.listText}>Profile</Text>
                            <Icon name='chevron-right' size={20} color='#5F6368' style={{ marginLeft: 128, marginTop: 5 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>
                </View>
            </DrawerContentScrollView>

            <View style={styles.logoutStyle}>
                <Icon.Button name='logout' size={22} color={'rgba(95, 99, 104, 1)'} backgroundColor={'rgba(255, 255, 255, 1)'} marginLeft={15}
                    onPress={() => {
                        logout();
                        logOut();
                    }}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Icon.Button>
                
                <Icon name='close' size={20} color='rgba(95, 99, 104, 1)' style={styles.closeImg} 
                onPress={() => {
                    navigation1.goBack()
                }} />
                
            </View>
        </View>
    );
}

export default CustomDrawer;