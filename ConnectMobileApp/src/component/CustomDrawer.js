import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, View, Text, Alert, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import NavigationString from '../utility/NavigationString';
import Icon from 'react-native-vector-icons/MaterialIcons';
import fontfamly from '../utility/Font-Declarations'


function CustomDrawer(props) {
    const { navigation } = props
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(247, 252, 255, 1)' }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: 'rgba(14, 0, 113, 1)', borderBottomRightRadius: 30, height: 150 }}>

                <View style={{
                    flexDirection: "column",
                    height: '80%',
                    marginTop: 10
                }}>
                    <Image
                        source={{ uri: 'https://media.istockphoto.com/vectors/vector-businessman-black-silhouette-isolated-vector-id610003972?k=20&m=610003972&s=612x612&w=0&h=-Nftbu4sDVavoJTq5REPpPpV-kXH9hXXE3xg_D3ViKE=' }}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
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


                <View style={{ backgroundColor: 'rgba(247, 252, 255, 1)', marginTop: 10 }}>

                    <TouchableOpacity
                        style={{ width: '100%', height: '25%', marginTop: 15 }}
                        onPress={() => navigation.navigate(NavigationString.Posts)}>
                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <Icon name='post-add' size={30} color='gray' style={{ marginLeft: 15, marginTop: 5 }} />
                            <Text style={styles.listText}>Posts</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 135, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={{ width: '100%', height: '25%', marginTop: 5 }}
                        onPress={() => navigation.navigate(NavigationString.Offers)}>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Icon name='local-offer' size={30} color='gray' style={{ marginLeft: 15, marginTop: 5 }} />
                            <Text style={styles.listText}>Offers</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 130, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={{ width: '100%', height: '25%', marginTop: 5 }}
                        onPress={() => navigation.navigate(NavigationString.Locations)}>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Icon name='location-on' size={30} color='gray' style={{ marginLeft: 15, marginTop: 5 }} />
                            <Text style={styles.listText}>Locations</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 105, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={{ width: '100%', height: '25%', marginTop: 5 }}
                        onPress={() => navigation.navigate(NavigationString.Offers)}>
                        <View style={{ flexDirection: 'row', marginTop: 5, height: '100%' }}>
                            <Icon name='group' size={30} color='gray' style={{ marginLeft: 15, marginTop: 5 }} />
                            <Text style={styles.listText}>Manage Team</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 65, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>

                    <TouchableOpacity
                        style={{ width: '100%', height: '25%', marginTop: 5 }}
                        onPress={() => navigation.navigate(NavigationString.Offers)}>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Icon name='person-outline' size={30} color='gray' style={{ marginLeft: 15, marginTop: 5 }} />
                            <Text style={styles.listText}>Profile</Text>
                            <Icon name='chevron-right' size={20} style={{ marginLeft: 130, marginTop: 10 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lineStyle}></View>
                </View>
            </DrawerContentScrollView>

            <View style={{
                position: 'absolute', bottom: 20, backgroundColor: 'white',
                height: '5%', width: '100%', elevation: 10,
                shadowRadius: 5,
                shadowOpacity: 0.8,
                shadowOffset: {
                    width: 0,
                    height: -5,
                },
                elevation: 10,
                shadowColor: 'rgba(47, 110, 243, 0.16)',

            }}>
                <Icon.Button name='logout' size={30} color={'rgba(95, 99, 104, 1)'} backgroundColor={'rgba(255, 255, 255, 1)'} onPress={() => { Alert.alert('Logout function is comming soon') }}>
                    <Text style={{ fontFamily: fontfamly.Alte_DIN, fontSize: 16, fontWeight:'bold', color: 'rgba(14, 0, 113, 1)' }}>Logout</Text></Icon.Button>
               
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    listText: {
        color: 'black',
        fontSize: 15,
        // fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 10,
        fontFamily: fontfamly.Poppins

    },
    lineStyle: {
        marginLeft: 20,
        backgroundColor: 'rgb(242, 242, 242)',
        height: 1,
        marginTop: 10

    }
});

export default CustomDrawer;