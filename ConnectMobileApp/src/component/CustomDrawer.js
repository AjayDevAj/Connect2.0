import React from 'react';
import {
    DrawerContentScrollView, DrawerItemList, DrawerItem
} from '@react-navigation/drawer';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import NavigationString from '../utility/NavigationString';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './CustomDrawerStyleSheet';
import { deleteAll, StorageClass} from '../utility/StorageClass'
import {NavigationContainer, useNavigation} from '@react-navigation/native';


function CustomDrawer(props) {

    const navigation1 = useNavigation();

    const logout = () => {
        deleteAll()
        console.log("Logout User")
        navigation1.navigate(NavigationString.LOGIN);    
    }

    const { navigation } = props
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)' }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'rgba(14, 0, 113, 1)', borderBottomRightRadius: 30, height: 150 }}>

                <View style={{
                    flexDirection: "column",
                    height: '80%',
                    marginTop: 20
                }}>
                    <Image
                        source={{ uri: 'https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=' }}
                        style={{
                            width: 55,
                            height: 55,
                            borderRadius: 27.5,
                            marginLeft: 20,
                        }} >
                    </Image>

                    <Text style={{
                        color: 'white',
                        marginTop: 5,
                        marginBottom: 20,
                        marginLeft: 20,
                        fontSize: 12
                    }}>
                        XYZ Automobiles & Services
                    </Text>
                </View>

                <View style={{ backgroundColor: 'rgba(247, 252, 255, 1)', padding: 10 }}>
                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate(NavigationString.Dashboard)}>
                        <View style={styles.listView}>
                            <Icon name='post-add' size={30} style={styles.iconList} />
                            <Text style={styles.listText}>Posts</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 135, marginTop: 10, }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                        onPress={() => navigation.navigate(NavigationString.Chat)}
                        >
                        <View style={styles.listView}>
                            <Icon name='local-offer' size={30} style={styles.iconList} />
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
                            <Icon name='location-on' size={30} style={styles.iconList} />
                            <Text style={styles.listText}>Locations</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 103, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={styles.btnStyle}
                        // onPress={() => navigation.navigate(NavigationString.Offers)}
                        >
                        <View style={styles.listView}>
                            <Icon name='group' size={30} style={styles.iconList} />
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
                            <Icon name='person-outline' size={30} style={styles.iconList} />
                            <Text style={styles.listText}>Profile</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 128, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>
                </View>
            </DrawerContentScrollView>

            <View style={styles.logoutStyle}>
                <Icon.Button name='logout' size={30} color={'rgba(95, 99, 104, 1)'} backgroundColor={'rgba(255, 255, 255, 1)'}
                    onPress={() => logout()}>
                    <Text style={styles.logoutText}>Logout</Text>
                </Icon.Button>
            </View>
        </View>
    );
}

export default CustomDrawer;