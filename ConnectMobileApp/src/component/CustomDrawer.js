import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, View, Text, Alert, StyleSheet, FlatList } from 'react-native';
import NavigationString from '../utility/NavigationString';


function CustomDrawer(props) {
    const { navigation } = props
    return (
        <View style={{ flex: 1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: 'rgba(14, 0, 113, 1)', borderBottomRightRadius: 30,height: 150}}>
                
                <View style={{
                    backgroundColor: 'rgba(14, 0, 113, 1)',
                    //backgroundColor: 'red',
                    flexDirection: "column",
                    height: '80%',
                    borderBottomRightRadius: 30,
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
                    <DrawerItem
                        label="Posts"
                        onPress={() => navigation.navigate(NavigationString.Posts)}
                        labelStyle={styles.listText}
                    />
                    <View style={styles.lineStyle}></View>
                    <DrawerItem
                        label="Offers"
                        onPress={() => Alert.alert("Screen Comming soon....")}
                        labelStyle={styles.listText}
                    // onPress={() => navigation.navigate(NavigationString.Offers)}
                    />
                    <View style={styles.lineStyle}></View>


                    <DrawerItem
                        label="Locations"
                        onPress={() => Alert.alert("Screen Comming soon....")}
                        labelStyle={styles.listText}
                    // onPress={() => navigation.navigate(NavigationString.Locations)}
                    />
                    <View style={styles.lineStyle}></View>

                    <DrawerItem
                        label="Manage Team"
                        onPress={() => Alert.alert("Screen Comming soon....")}
                        labelStyle={styles.listText}
                    //onPress={() => navigation.navigate(NavigationString.ManageTeam)}
                    />
                    <View style={styles.lineStyle}></View>

                    <DrawerItem
                        label="Profile"
                        onPress={() => Alert.alert("Screen Comming soon....")}
                        labelStyle={styles.listText}
                    // onPress={() => navigation.navigate(NavigationString.Profile)}
                    />
                    <View style={styles.lineStyle}></View>

                </View>




            </DrawerContentScrollView>
            <View style={{
                position: 'absolute', bottom: 30, backgroundColor: 'white',
                height: '5%', width: '100%', borderWidth: 0.2, 
                shadowRadius: 0.5, shadowColor: 'gray', shadowOpacity: 0.5
            }}>
                <Text >
                    Logout
                </Text>
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    listText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    lineStyle: {
        marginLeft: 20,
        backgroundColor: 'rgb(242, 242, 242)',
        height: 1

    }
});

export default CustomDrawer;