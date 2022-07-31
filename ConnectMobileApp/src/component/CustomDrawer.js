import React, { useEffect } from 'react';
import {
    DrawerContentScrollView, DrawerItemList, DrawerItem
} from '@react-navigation/drawer';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import NavigationString from '../utility/NavigationString';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './CustomDrawerStyleSheet';
import { deleteAll, StorageClass } from '../utility/StorageClass'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Singleinterfaceicon from '../../assets/svg/singleinterfaceicon.svg'
import fontFamily from '../utility/Font-Declarations'
import { API_URL_STAGING } from '../utility/Config_File'
import { getOtpResponse } from '../utility/StorageClass'
import { otpResponse_Storage_Key } from '../utility/Constant'
import { result } from 'lodash';
import { signOut } from '../navigation/Routes'


function CustomDrawer(props) {

    const navigation1 = useNavigation();

    //Logout api calling..
    const logout = async () => {

        const token_Value = await getOtpResponse(otpResponse_Storage_Key)
        console.log("Token Value :::: =", token_Value.token)

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token_Value.token}`);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://test-chat.starify.co/user/auth/logout", requestOptions)
            .then(response => response.json())
            .then(result => console.log("JSON Result :::: ", result))
            .catch(error => console.log('Error Result :::: ', error));

        deleteAll()
        console.log("Logout User")
        // navigation1.navigate(NavigationString.LOGIN);
        signOut()

        if (response.status > 400) {
            throw new Error(data.errors)
        }
    }


    const { navigation } = props
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)' }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'rgba(14, 0, 113, 1)', borderBottomRightRadius: 30, height: 150 }}>

                <View style={{
                    flexDirection: "column",
                    height: '90%',
                    marginTop: 10,
                }}>
                    <Singleinterfaceicon height={52} width={52} marginLeft={15} />

                    <Text style={{
                        color: 'rgba(255, 255, 255, 1)',
                        marginTop: 10,
                        marginBottom: 20,
                        marginLeft: 16,
                        fontSize: 12,
                        fontFamily: fontFamily.Alte_DIN,
                        opacity: 70

                    }}>
                        XYZ Automobiles & Services
                    </Text>
                </View>

                <View style={{ backgroundColor: 'rgba(247, 252, 255, 1)', padding: 10 }}>
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate(NavigationString.MyPostHome)}
                    >
                        <View style={styles.listView}>
                            <Icon name='post-add' size={25} style={styles.iconList} />
                            <Text style={styles.listText}>Posts</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 135, marginTop: 10, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate(NavigationString.My_Offers_home)}
                    >
                        <View style={styles.listView}>
                            <Icon name='local-offer' size={25} style={styles.iconList} />
                            <Text style={styles.listText}>Offers</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 130, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                    // onPress={() => navigation.navigate(NavigationString.Locations)}
                    >
                        <View style={styles.listView}>
                            <Icon name='location-on' size={25} style={styles.iconList} />
                            <Text style={styles.listText}>Locations</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 103, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                     onPress={() => navigation.navigate(NavigationString.ManageTeam)}
                    >
                        <View style={styles.listView}>
                            <Icon name='group' size={25} style={styles.iconList} />
                            <Text style={styles.listText}>Manage Team</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 65, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                    // onPress={() => navigation.navigate(NavigationString.Offers)}
                    >
                        <View style={styles.listView}>
                            <Icon name='person-outline' size={25} style={styles.iconList} />
                            <Text style={styles.listText}>Profile</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 128, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>
                </View>
            </DrawerContentScrollView>

            <View style={styles.logoutStyle}>
                <Icon.Button name='logout' size={25} color={'rgba(95, 99, 104, 1)'} backgroundColor={'rgba(255, 255, 255, 1)'} marginLeft={15}
                    onPress={() => logout()}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Icon.Button>
                <Icon name='close' size={20} color='rgba(95, 99, 104, 1)' style={styles.closeImg} />
            </View>
        </View>
    );
}

export default CustomDrawer;